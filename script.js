(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var header = document.getElementById("site-header");
  var progressBar = document.querySelector(".scroll-progress span");
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var clock = document.getElementById("clock");
  var year = document.getElementById("year");
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var moodPicker = document.querySelector("[data-mood-picker]");
  var moodToggle = document.querySelector(".mood-toggle");
  var moodMenu = document.querySelector(".mood-menu");
  var moodOptions = Array.prototype.slice.call(document.querySelectorAll(".mood-option"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[data-nav]"));
  var sections = ["about", "work", "contact"].map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);

  var scrollTicking = false;

  function updateScrollUI() {
    var scrollTop = window.scrollY || window.pageYOffset;
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

    if (progressBar) {
      progressBar.style.transform = "scaleX(" + ratio + ")";
    }

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 24);
    }

    var activeId = "";
    sections.forEach(function (section) {
      if (scrollTop + window.innerHeight * 0.34 >= section.offsetTop) {
        activeId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("data-nav") === activeId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    scrollTicking = false;
  }

  function requestScrollUpdate() {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateScrollUI);
    }
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate);
  updateScrollUI();

  /* Mood themes ------------------------------------------- */

  var MOODS = {
    day: { name: "晴", tone: "light", color: "#f5efe5" },
    rain: { name: "雨", tone: "light", color: "#e6eff3" },
    night: { name: "夜", tone: "dark", color: "#08070d" },
    bloom: { name: "花", tone: "light", color: "#f7eef3" }
  };

  function applyMood(mood, persist) {
    var selected = MOODS[mood] ? mood : "night";
    var entry = MOODS[selected];
    root.setAttribute("data-theme", selected);
    root.setAttribute("data-tone", entry.tone);
    root.style.colorScheme = entry.tone === "dark" ? "dark" : "light";

    if (themeColor) {
      themeColor.setAttribute("content", entry.color);
    }

    if (moodToggle) {
      moodToggle.setAttribute("aria-label", "切换心情主题，当前：" + entry.name);
      moodToggle.setAttribute("title", "当前主题：" + entry.name);
    }

    moodOptions.forEach(function (option) {
      option.setAttribute("aria-checked", String(option.dataset.mood === selected));
    });

    if (persist) {
      try {
        localStorage.setItem("luxian-mood", selected);
      } catch (error) {}
    }
  }

  function openMoodMenu() {
    if (!moodMenu || !moodToggle) return;
    moodMenu.hidden = false;
    moodToggle.setAttribute("aria-expanded", "true");
    var selected = moodMenu.querySelector('[aria-checked="true"]') || moodOptions[0];
    if (selected) selected.focus();
  }

  function closeMoodMenu(returnFocus) {
    if (!moodMenu || !moodToggle) return;
    moodMenu.hidden = true;
    moodToggle.setAttribute("aria-expanded", "false");
    if (returnFocus) moodToggle.focus();
  }

  if (moodPicker && moodToggle && moodMenu) {
    moodToggle.addEventListener("click", function () {
      if (moodMenu.hidden) {
        openMoodMenu();
      } else {
        closeMoodMenu(true);
      }
    });

    moodOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        applyMood(option.dataset.mood, true);
        closeMoodMenu(true);
      });
    });

    moodMenu.addEventListener("keydown", function (event) {
      var index = moodOptions.indexOf(document.activeElement);
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        var direction = event.key === "ArrowDown" ? 1 : -1;
        var next = (index + direction + moodOptions.length) % moodOptions.length;
        moodOptions[next].focus();
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        moodOptions[event.key === "Home" ? 0 : moodOptions.length - 1].focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!moodPicker.contains(event.target) && !moodMenu.hidden) {
        closeMoodMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !moodMenu.hidden) {
        closeMoodMenu(true);
      }
    });

    applyMood(root.getAttribute("data-theme") || "night", false);
  }

  /* Clock ------------------------------------------------- */

  function updateClock() {
    if (!clock) return;
    try {
      clock.textContent = new Intl.DateTimeFormat("zh-CN", {
        timeZone: "Asia/Shanghai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(new Date());
    } catch (error) {
      var now = new Date();
      clock.textContent = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
    }
  }

  updateClock();
  window.setInterval(updateClock, 15000);

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* Mobile menu ------------------------------------------- */

  function setMenu(open) {
    if (!mobileMenu || !menuToggle) return;
    body.classList.toggle("menu-open", open);
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      setMenu(!mobileMenu.classList.contains("is-open"));
    });
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileMenu && mobileMenu.classList.contains("is-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 960 && mobileMenu && mobileMenu.classList.contains("is-open")) {
      setMenu(false);
    }
  });

  /* Reveal ------------------------------------------------ */

  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var staggerGroups = Array.prototype.slice.call(document.querySelectorAll("[data-stagger]"));

  staggerGroups.forEach(function (group) {
    Array.prototype.slice.call(group.children).forEach(function (child, index) {
      if (child.classList.contains("reveal")) {
        child.style.setProperty("--delay", index * 70 + "ms");
      }
    });
  });

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -7% 0px",
      threshold: 0.08
    });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* Portrait tilt ----------------------------------------- */

  var tiltStage = document.querySelector("[data-tilt]");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (tiltStage && finePointer.matches && !reduceMotion.matches) {
    var depth = tiltStage.querySelector(".portrait-depth");

    tiltStage.addEventListener("pointermove", function (event) {
      var rect = tiltStage.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width;
      var y = (event.clientY - rect.top) / rect.height;
      var rotateX = (0.5 - y) * 7;
      var rotateY = (x - 0.5) * 8;
      depth.style.setProperty("--rx", rotateX.toFixed(2) + "deg");
      depth.style.setProperty("--ry", rotateY.toFixed(2) + "deg");
    });

    tiltStage.addEventListener("pointerleave", function () {
      depth.style.setProperty("--rx", "0deg");
      depth.style.setProperty("--ry", "0deg");
    });
  }
})();
