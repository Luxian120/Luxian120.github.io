(function () {
  "use strict";

  var dialog = document.getElementById("column-dialog");
  if (!dialog) return;

  var openers = Array.prototype.slice.call(document.querySelectorAll("[data-open-column]"));
  var closeButton = dialog.querySelector(".column-close");
  var audio = document.getElementById("music-audio");
  var tracks = Array.prototype.slice.call(dialog.querySelectorAll(".track"));
  var playerTitle = document.getElementById("player-title");
  var playerStatus = document.getElementById("player-status");
  var playerToggle = document.getElementById("player-toggle");
  var playerSeek = document.getElementById("player-seek");
  var playerTime = document.getElementById("player-time");
  var playerMute = document.getElementById("player-mute");
  var currentTrack = null;
  var isMuted = false;

  function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return "--:--";
    var value = Math.floor(seconds);
    var hours = Math.floor(value / 3600);
    var minutes = Math.floor((value % 3600) / 60);
    var rest = value % 60;
    if (hours > 0) {
      return hours + ":" + String(minutes).padStart(2, "0") + ":" + String(rest).padStart(2, "0");
    }
    return minutes + ":" + String(rest).padStart(2, "0");
  }

  function setStatus(message) {
    if (playerStatus) playerStatus.textContent = message;
  }

  function updateProgress() {
    var duration = isFinite(audio.duration) ? audio.duration : 0;
    var ratio = duration > 0 ? Math.min(audio.currentTime / duration, 1) : 0;
    if (playerSeek) playerSeek.value = String(ratio * 100);
    if (playerTime) {
      playerTime.textContent = formatTime(audio.currentTime) + " / " + formatTime(duration);
    }
  }

  function setPlayingUI() {
    var playing = !audio.paused && !audio.ended;
    if (playerToggle) {
      playerToggle.classList.toggle("is-playing", playing);
      playerToggle.setAttribute("aria-label", playing ? "暂停" : "播放");
    }
    tracks.forEach(function (track) {
      var isCurrent = track === currentTrack;
      track.classList.toggle("is-active", isCurrent);
      track.classList.toggle("is-playing", isCurrent && playing);
      var title = track.dataset.title || "曲目";
      track.setAttribute("aria-label", (isCurrent && playing ? "暂停 " : "播放 ") + title);
    });
    if (playing && currentTrack) {
      setStatus("正在播放：" + currentTrack.dataset.title);
    }
  }

  function playCurrent() {
    if (!currentTrack) return;
    if (audio.ended) audio.currentTime = 0;
    var result = audio.play();
    if (result && typeof result.catch === "function") {
      result.catch(function () {
        setStatus("浏览器拦截了播放，请再点一次播放键。");
        setPlayingUI();
      });
    }
  }

  function togglePlayback() {
    if (!currentTrack) return;
    if (audio.paused || audio.ended) {
      playCurrent();
    } else {
      audio.pause();
    }
  }

  function selectTrack(track) {
    if (currentTrack === track) {
      togglePlayback();
      return;
    }

    currentTrack = track;
    if (playerTitle) playerTitle.textContent = track.dataset.title || "未命名曲目";
    if (playerToggle) playerToggle.disabled = false;
    if (playerMute) playerMute.disabled = false;
    if (playerSeek) playerSeek.disabled = false;
    audio.src = track.dataset.src;
    audio.load();
    updateProgress();
    setStatus("正在载入：" + (track.dataset.title || "曲目"));
    playCurrent();
    setPlayingUI();
  }

  function openColumn() {
    if (dialog.open) return;
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.body.classList.add("music-lock");
    history.replaceState(null, "", location.pathname + location.search + "#fantasy-notes");
    if (closeButton) closeButton.focus();
  }

  function closeColumn() {
    if (dialog.open && typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
      document.body.classList.remove("music-lock");
    }
  }

  openers.forEach(function (opener) {
    opener.addEventListener("click", openColumn);
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeColumn);
  }

  tracks.forEach(function (track) {
    track.addEventListener("click", function () {
      selectTrack(track);
    });

    var probe = new Audio();
    probe.preload = "metadata";
    probe.src = track.dataset.src;
    probe.addEventListener("loadedmetadata", function () {
      if (isFinite(probe.duration)) {
        var time = track.querySelector(".track-time");
        if (time) time.textContent = formatTime(probe.duration);
      }
    });
  });

  if (playerToggle) {
    playerToggle.addEventListener("click", togglePlayback);
  }

  if (playerSeek) {
    playerSeek.addEventListener("input", function () {
      if (!isFinite(audio.duration) || audio.duration <= 0) return;
      audio.currentTime = (Number(playerSeek.value) / 100) * audio.duration;
      updateProgress();
    });
  }

  if (playerMute) {
    playerMute.addEventListener("click", function () {
      isMuted = !isMuted;
      audio.muted = isMuted;
      playerMute.classList.toggle("is-muted", isMuted);
      playerMute.setAttribute("aria-pressed", String(isMuted));
      playerMute.setAttribute("aria-label", isMuted ? "取消静音" : "静音");
    });
  }

  audio.addEventListener("loadedmetadata", function () {
    updateProgress();
    if (currentTrack) {
      var time = currentTrack.querySelector(".track-time");
      if (time) time.textContent = formatTime(audio.duration);
    }
    setStatus("已就绪：" + (currentTrack ? currentTrack.dataset.title : "曲目"));
  });

  audio.addEventListener("timeupdate", updateProgress);

  audio.addEventListener("play", function () {
    setPlayingUI();
    setStatus("正在播放：" + (currentTrack ? currentTrack.dataset.title : "曲目"));
  });

  audio.addEventListener("pause", function () {
    setPlayingUI();
    if (!audio.ended) setStatus("已暂停");
  });

  audio.addEventListener("ended", function () {
    setPlayingUI();
    setStatus("播放结束，可以再听一次。");
  });

  audio.addEventListener("waiting", function () {
    setStatus("正在缓冲…");
  });

  audio.addEventListener("canplay", function () {
    if (!audio.paused) setStatus("正在播放：" + (currentTrack ? currentTrack.dataset.title : "曲目"));
  });

  audio.addEventListener("error", function () {
    setStatus("音频加载失败，请检查 assets/music 下的文件。");
    setPlayingUI();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeColumn();
  });

  dialog.addEventListener("close", function () {
    document.body.classList.remove("music-lock");
    if (!audio.paused) audio.pause();
    history.replaceState(null, "", location.pathname + location.search);
    setPlayingUI();
  });

  window.addEventListener("hashchange", function () {
    if (location.hash === "#fantasy-notes") {
      openColumn();
    } else if (dialog.open) {
      closeColumn();
    }
  });

  if (location.hash === "#fantasy-notes") {
    window.requestAnimationFrame(openColumn);
  }
})();
