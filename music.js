(function () {
  "use strict";

  var dialog = document.getElementById("column-dialog");
  if (!dialog) return;

  var COLUMNS = {
    fantasy: {
      hash: "fantasy-notes",
      eyebrow: "COLUMN 01 / 幻想音帖",
      title: "幻想音帖",
      intro: "七首来自《东方 Project》原声音乐集的曲子。把音量调到舒服的位置，让风先吹一会儿。",
      cover: "#cover-fantasy",
      captionKicker: "COLUMN 01 / FANTASY NOTES",
      captionTitle: "幻想音帖",
      captionMeta: "TOUHOU PROJECT / 7 TRACKS",
      quote: "有些旋律，适合在深夜把音量调小一点。",
      footnote: "曲目版权归原作者与上海爱丽丝幻乐团所有。这里只是私人收藏与试听，不做商业用途。",
      tracks: [
        ["cosmic-shrine-maiden.mp3", "飞翔于宇宙的不可思议巫女", "宇宙を飛ぶ不思議な巫女 / 上海爱丽丝幻乐团"],
        ["rabbit-landed.mp3", "兔已着陆", "兎は舞い降りた / 上海爱丽丝幻乐团"],
        ["wind-goddess.mp3", "风神少女", "风神少女 (Short Version) / 上海爱丽丝幻乐团"],
        ["usagi-white-flag.mp3", "宇佐大人的白旗", "お宇佐さまの素い幡 / 上海爱丽丝幻乐团"],
        ["otenba-adventure.mp3", "活泼纯情小姑娘的冒险", "おてんば恋娘の冒険 / 上海爱丽丝幻乐团"],
        ["till-when.mp3", "广有射怪鸟事", "広有射怪鳥事 ～ Till When / 上海爱丽丝幻乐团"],
        ["dream-battle.mp3", "少女绮想曲", "少女綺想曲 ～ Dream Battle / 上海爱丽丝幻乐团"]
      ]
    },
    nocturne: {
      hash: "nocturne",
      eyebrow: "COLUMN 02 / 物语夜奏",
      title: "物语夜奏",
      intro: "两首来自《物语系列》的歌。一首轻快得像夏天不会结束，一首安静得像放学后绕远的那条路。",
      cover: "#cover-nocturne",
      captionKicker: "COLUMN 02 / MONOGATARI NIGHT",
      captionTitle: "物语夜奏",
      captionMeta: "MONOGATARI SERIES / 2 TRACKS",
      quote: "回家的路，有时候比目的地更长。",
      footnote: "曲目版权归原作者、花澤香菜与加藤英美里所有。这里只是私人收藏与试听，不做商业用途。",
      tracks: [
        ["renai-circulation.mp3", "恋爱循环", "花澤香菜 / 恋愛サーキュレーション"],
        ["kaerimichi.mp3", "回家的路", "加藤英美里 / 帰り道"]
      ]
    }
  };

  var openers = Array.prototype.slice.call(document.querySelectorAll("[data-open-column]"));
  var closeButton = dialog.querySelector(".column-close");
  var coverUse = document.getElementById("column-cover-use");
  var captionKicker = document.getElementById("column-caption-kicker");
  var captionTitle = document.getElementById("column-caption-title");
  var captionMeta = document.getElementById("column-caption-meta");
  var columnEyebrow = document.getElementById("column-eyebrow");
  var columnTitle = document.getElementById("column-title");
  var columnIntro = document.getElementById("column-intro");
  var columnQuote = document.getElementById("column-quote");
  var columnFootnote = document.getElementById("column-footnote");
  var trackList = document.getElementById("column-track-list");
  var audio = document.getElementById("music-audio");
  var playerTitle = document.getElementById("player-title");
  var playerStatus = document.getElementById("player-status");
  var playerToggle = document.getElementById("player-toggle");
  var playerSeek = document.getElementById("player-seek");
  var playerTime = document.getElementById("player-time");
  var playerMute = document.getElementById("player-mute");
  var tracks = [];
  var currentTrack = null;
  var activeColumn = "fantasy";
  var isMuted = false;

  var PLAY_ICON = '<svg class="track-icon-play" viewBox="0 0 16 16"><path d="M4.5 2.8v10.4L13 8 4.5 2.8Z" fill="currentColor"/></svg>';
  var PAUSE_ICON = '<svg class="track-icon-pause" viewBox="0 0 16 16"><path d="M4.5 2.8h2.6v10.4H4.5zM8.9 2.8h2.6v10.4H8.9z" fill="currentColor"/></svg>';

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[character];
    });
  }

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

  function trackMarkup(track, index) {
    var title = escapeHTML(track[1]);
    var artist = escapeHTML(track[2]);
    var src = escapeHTML(track[0]);
    var position = String(index + 1).padStart(2, "0");
    return '<button class="track" type="button" data-src="assets/music/' + src + '" data-title="' + title + '" data-artist="' + artist + '" aria-label="播放 ' + title + '">' +
      '<span class="track-index">' + position + '</span>' +
      '<span class="track-info"><strong>' + title + '</strong><small>' + artist + '</small></span>' +
      '<span class="track-time">--:--</span>' +
      '<span class="track-play" aria-hidden="true">' + PLAY_ICON + PAUSE_ICON + '</span>' +
      '</button>';
  }

  function bindTracks() {
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
  }

  function resetPlayer() {
    currentTrack = null;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    audio.muted = false;
    isMuted = false;
    if (playerTitle) playerTitle.textContent = "选一首，开始听";
    if (playerTime) playerTime.textContent = "0:00 / 0:00";
    if (playerSeek) {
      playerSeek.value = "0";
      playerSeek.disabled = true;
    }
    if (playerToggle) {
      playerToggle.disabled = true;
      playerToggle.classList.remove("is-playing");
      playerToggle.setAttribute("aria-label", "播放");
    }
    if (playerMute) {
      playerMute.disabled = true;
      playerMute.classList.remove("is-muted");
      playerMute.setAttribute("aria-pressed", "false");
      playerMute.setAttribute("aria-label", "静音");
    }
    setStatus("点击曲目或播放键开始。");
    setPlayingUI();
  }

  function renderColumn(key) {
    var column = COLUMNS[key] || COLUMNS.fantasy;
    activeColumn = COLUMNS[key] ? key : "fantasy";
    dialog.dataset.column = activeColumn;
    if (coverUse) coverUse.setAttribute("href", column.cover);
    if (captionKicker) captionKicker.textContent = column.captionKicker;
    if (captionTitle) captionTitle.textContent = column.captionTitle;
    if (captionMeta) captionMeta.textContent = column.captionMeta;
    if (columnEyebrow) columnEyebrow.textContent = column.eyebrow;
    if (columnTitle) columnTitle.textContent = column.title;
    if (columnIntro) columnIntro.textContent = column.intro;
    if (columnQuote) columnQuote.textContent = column.quote;
    if (columnFootnote) columnFootnote.textContent = column.footnote;
    if (trackList) {
      trackList.setAttribute("aria-label", column.title + "曲目");
      trackList.innerHTML = column.tracks.map(trackMarkup).join("");
      tracks = Array.prototype.slice.call(trackList.querySelectorAll(".track"));
      bindTracks();
    }
    resetPlayer();
  }

  function openColumn(key) {
    renderColumn(key);
    if (!dialog.open) {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
    }
    document.body.classList.add("music-lock");
    var column = COLUMNS[activeColumn];
    history.replaceState(null, "", location.pathname + location.search + "#" + column.hash);
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
    opener.addEventListener("click", function () {
      openColumn(opener.dataset.column || "fantasy");
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeColumn);
  }

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
    var requested = Object.keys(COLUMNS).filter(function (key) {
      return "#" + COLUMNS[key].hash === location.hash;
    })[0];

    if (requested) {
      openColumn(requested);
    } else if (dialog.open) {
      closeColumn();
    }
  });

  var initial = Object.keys(COLUMNS).filter(function (key) {
    return "#" + COLUMNS[key].hash === location.hash;
  })[0];

  if (initial) {
    window.requestAnimationFrame(function () {
      openColumn(initial);
    });
  }
})();
