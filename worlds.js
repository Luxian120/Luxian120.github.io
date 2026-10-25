(function () {
  "use strict";

  var WORLDS = {
    fx: {
      index: "01",
      title: "FX战士久留美",
      jp: "FX戦士くるみちゃん",
      en: "FX WARRIOR KURUMI",
      kind: "现实 / RISK",
      panelKicker: "01 / REALITY",
      quote: "把心跳画成 K 线。",
      intro: "把汇率、杠杆和保证金画成一场随时会翻车的青春喜剧。它最厉害的地方，是让你一边笑，一边替她们捏一把汗。数字每跳一下，屏幕外的呼吸也跟着乱半拍。",
      meta: [["放送", "2026 · TV"], ["制作", "Passione"], ["监督", "小川優樹"], ["原作", "でむにゃん / 炭酸だいすき"]],
      keywords: ["杠杆", "K 线", "保证金", "24H"],
      fragments: [
        ["红色蜡烛", "屏幕上的每一根线，都连着现实里的呼吸。"],
        ["凌晨两点", "世界睡了，只有汇率还醒着。"],
        ["不甘心", "比亏损更可怕的，是那句“再来一次”。"]
      ],
      palette: [["#ff5d5d", "心跳"], ["#70f0a8", "浮盈"], ["#07110b", "深夜"], ["#d9ffe8", "数字"]]
    },
    kon: {
      index: "02",
      title: "轻音少女",
      jp: "けいおん！",
      en: "K-ON!",
      kind: "日常 / AFTER SCHOOL",
      panelKicker: "02 / EVERYDAY",
      quote: "把日常过成一首歌。",
      intro: "没有拯救世界，也没有惊天逆转。只有几个女孩在放学后练习、喝茶、发呆，把最普通的日常过成了会发光的青春。原来“浪费时间”也可以是一件很温柔的事。",
      meta: [["放送", "2009 · TV"], ["制作", "京都动画"], ["监督", "山田尚子"], ["原作", "かきふらい"]],
      keywords: ["放学后", "茶点", "轻音乐", "青春"],
      fragments: [
        ["部室的茶", "茶凉了也没关系，反正大家还要再坐一会儿。"],
        ["慢半拍", "她们连成功都来得慢悠悠的，所以青春显得格外长。"],
        ["一首歌", "练习了很久的和弦，最后只为了在学园祭上一起笑。"]
      ],
      palette: [["#f8e8cf", "奶油"], ["#dca18e", "夕阳"], ["#8d5b43", "木吉他"], ["#fff8e8", "茶汽"]]
    },
    pokemon: {
      index: "03",
      title: "宝可梦",
      jp: "ポケットモンスター",
      en: "POKÉMON",
      kind: "冒险 / START",
      panelKicker: "03 / ADVENTURE",
      quote: "每一次出发，都还来得及。",
      intro: "它是我对“冒险”最初的定义：带上伙伴，离开熟悉的小镇，去看地图之外还有什么。长大后才发现，真正让人怀念的是每一次重新出发的勇气。",
      meta: [["放送", "1997 – · TV"], ["制作", "OLM"], ["形式", "游戏 / 动画"], ["世界", "关都 → 无限"]],
      keywords: ["伙伴", "地图", "道馆", "未知"],
      fragments: [
        ["第一次出发", "空白的图鉴、陌生的道路，还有一只愿意跟着你的伙伴。"],
        ["草丛", "每一步都可能遇见新的身影，也可能什么也没有。"],
        ["道馆", "输掉再重来，是这个世界最温柔的规则。"]
      ],
      palette: [["#84d9ff", "天空"], ["#8ed777", "草丛"], ["#ef4e50", "精灵球"], ["#ffe9b8", "阳光"]]
    },
    garden: {
      index: "04",
      title: "言叶之庭",
      jp: "言の葉の庭",
      en: "THE GARDEN OF WORDS",
      kind: "恋爱 / RAIN",
      panelKicker: "04 / RAIN",
      quote: "雨把城市调成了静音。",
      intro: "一场雨、一座亭子、两个都在寻找方向的人。新海诚把孤独拍得很轻，轻到一滴雨落下来，就能听见整颗心的回声。",
      meta: [["上映", "2013 · 剧场版"], ["时长", "46 分钟"], ["监督", "新海诚"], ["制作", "CoMix Wave Films"]],
      keywords: ["梅雨", "亭子", "鞋", "距离"],
      fragments: [
        ["雨", "雨声把所有没说完的话，都接了过去。"],
        ["亭子", "两个人的距离，刚好够听见彼此，又不必立刻回答。"],
        ["鞋", "她想走的路，被另一个人认真地画成了鞋的样子。"]
      ],
      palette: [["#0b211d", "雨夜"], ["#12342b", "树影"], ["#5d4381", "紫伞"], ["#9ed6c0", "水光"]]
    },
    clannad: {
      index: "05",
      title: "CLANNAD",
      jp: "CLANNAD -クラナド-",
      en: "CLANNAD",
      kind: "家族 / HOME",
      panelKicker: "05 / FAMILY",
      quote: "先让你笑，再让你懂。",
      intro: "它先让你笑，再让你在某个平常的傍晚突然明白“家人”两个字的重量。那些看似琐碎的日常，最后都变成了支撑人走下去的光。",
      meta: [["放送", "2007 · TV"], ["制作", "京都动画"], ["监督", "石原立也"], ["续篇", "AFTER STORY / 2008"]],
      keywords: ["家族", "坡道", "团子", "日常"],
      fragments: [
        ["坡道", "故事从一条长长的坡道开始，像所有普通又重要的相遇。"],
        ["团子", "小小的、软软的，聚在一起就不那么怕冷了。"],
        ["家人", "不是血缘的答案，而是愿意一起把日子过下去的人。"]
      ],
      palette: [["#f4c27f", "黄昏"], ["#e4917d", "晚霞"], ["#a26071", "旧校舍"], ["#fff8e8", "团子"]]
    },
    kaguya: {
      index: "06",
      title: "辉夜大小姐想让我告白",
      jp: "かぐや様は告らせたい",
      en: "KAGUYA-SAMA: LOVE IS WAR",
      kind: "恋爱 / GAME",
      panelKicker: "06 / LOVE GAME",
      quote: "喜欢，是一场漂亮的博弈。",
      intro: "两个天才把喜欢当成一场不能输的头脑战，结果每一次精心计算都变成笨拙的心动。它好笑、张扬，又在最不设防的时候认真得不得了。",
      meta: [["放送", "2019 · TV"], ["制作", "A-1 Pictures"], ["监督", "畠山守"], ["构成", "3 季 + 剧场版"]],
      keywords: ["学生会", "头脑战", "月亮", "心跳"],
      fragments: [
        ["学生会室", "所有精心设计的偶遇，都发生在同一间不大的房间里。"],
        ["月亮", "她抬头看月亮的时候，骄傲会暂时安静下来。"],
        ["先告白的人", "这场游戏没有输家，只有两个不肯先说出口的人。"]
      ],
      palette: [["#300a19", "夜色"], ["#8e1c32", "信封"], ["#ffe7b0", "月亮"], ["#e5b96e", "金线"]]
    },
    sakura: {
      index: "07",
      title: "百变小樱",
      jp: "カードキャプターさくら",
      en: "CARDCAPTOR SAKURA",
      kind: "魔法 / CARDS",
      panelKicker: "07 / MAGIC",
      quote: "把不可能，收进一张卡里。",
      intro: "封印之书被打开，风把卡片吹散，也把一个普通女孩的日常吹成了冒险。它相信温柔、勇气和一点点魔法，能解决很多看似无解的事。",
      meta: [["放送", "1998 · TV"], ["制作", "Madhouse"], ["监督", "浅香守生"], ["原作", "CLAMP"]],
      keywords: ["库洛牌", "小可", "魔法", "勇气"],
      fragments: [
        ["库洛牌", "每一张卡都有自己的脾气，也藏着一段小小的考验。"],
        ["小可", "一只会说话的玩偶，把冒险变成了有人陪的日常。"],
        ["樱花", "春天、校服和飞舞的花瓣，是这段魔法最初的样子。"]
      ],
      palette: [["#f7b8cc", "樱花"], ["#fff1e4", "奶油"], ["#9fd6a5", "新叶"], ["#f3cd7a", "星芒"]]
    },
    umaru: {
      index: "08",
      title: "干物妹！小埋",
      jp: "干物妹！うまるちゃん",
      en: "HIMOUTO! UMARU-CHAN",
      kind: "日常 / HOME",
      panelKicker: "08 / COZY",
      quote: "在学校是完美少女，回家是快乐废柴。",
      intro: "外面是闪闪发光的完美高中生，回家就变成薯片、可乐和游戏机旁边的一团。它把“想瘫着”的愿望拍得理直气壮，也把兄妹之间那种别扭的照顾拍得很可爱。",
      meta: [["放送", "2015 · TV"], ["制作", "动画工房"], ["监督", "太田雅彦"], ["原作", "サンカクヘッド"]],
      keywords: ["薯片", "可乐", "游戏", "哥哥"],
      fragments: [
        ["薯片", "一包薯片、一罐可乐，就是完美的下班仪式。"],
        ["仓鼠形态", "小小的、圆圆的，所有社会期待都被关在门外。"],
        ["哥哥", "嘴上嫌弃，手里却永远提着超市袋子。"]
      ],
      palette: [["#f6b35e", "薯片"], ["#fff4dd", "奶油"], ["#e86f5a", "可乐"], ["#8a5a44", "纸箱"]]
    },
    oreimo: {
      index: "09",
      title: "我的妹妹不可能那么可爱",
      jp: "俺の妹がこんなに可愛いわけがない",
      en: "MY LITTLE SISTER CAN'T BE THIS CUTE",
      kind: "恋爱 / SECRET",
      panelKicker: "09 / SECRET",
      quote: "秘密被发现的那一刻，日常开始偏航。",
      intro: "傲娇的妹妹、藏起来的爱好，和一个意外发现秘密的哥哥。它用很吵闹的方式讨论“被理解”这件事，也把秋叶原的灯光、游戏和深夜聊天拍成了一段独特的青春。",
      meta: [["放送", "2010 · TV"], ["制作", "AIC Build"], ["监督", "神戸洋行"], ["原作", "伏見つかさ"]],
      keywords: ["秋叶原", "妹妹", "秘密", "宅文化"],
      fragments: [
        ["秋叶原", "霓虹、手办和同人志，是秘密第一次被认真对待的地方。"],
        ["人生咨询", "深夜里那些说不出口的喜欢，最后都变成了一场长谈。"],
        ["傲娇", "越是在意，越要装作不在乎。"]
      ],
      palette: [["#1c2340", "夜色"], ["#ef6fa6", "霓虹"], ["#83d8ee", "屏幕"], ["#fff4f7", "秘密"]]
    },
    monogatari: {
      index: "10",
      title: "物语系列",
      jp: "〈物語〉シリーズ",
      en: "MONOGATARI SERIES",
      kind: "怪异 / WORDS",
      panelKicker: "10 / ODDITY",
      quote: "所有的怪异，都是人心的回声。",
      intro: "从一个跌倒的瞬间开始，少年一次次走进怪异，也一次次走回自己。它用密集的对话、突然切开的画面和古怪的幽默，把青春讲成一场漫长的自问自答。",
      meta: [["放送", "2009 – · TV"], ["制作", "Shaft"], ["监督", "新房昭之"], ["原作", "西尾維新"]],
      keywords: ["怪异", "对话", "青春", "夜空"],
      fragments: [
        ["螃蟹", "被夺走的东西，最后要以另一种方式拿回来。"],
        ["蜗牛", "迷路的人，也许只是不想回家。"],
        ["星空", "所有的对话，最后都落回自己。"]
      ],
      palette: [["#280b12", "夜色"], ["#d94b5d", "怪异"], ["#f3d9d4", "对白"], ["#6fb7b0", "夏夜"]]
    },
    fivecm: {
      index: "11",
      title: "秒速五厘米",
      jp: "秒速5センチメートル",
      en: "5 CENTIMETERS PER SECOND",
      kind: "距离 / SAKURA",
      panelKicker: "11 / DISTANCE",
      quote: "樱花落下的速度，是 5 cm/s。",
      intro: "三段时间，一段没有说完的距离。列车、雪、樱花和手机里没有发出的短信，被新海诚拍成了关于错过最安静的样子。",
      meta: [["上映", "2007 · 剧场版"], ["时长", "63 分钟"], ["监督", "新海诚"], ["制作", "CoMix Wave Films"]],
      keywords: ["樱花", "列车", "信", "距离"],
      fragments: [
        ["樱花抄", "雪夜里的列车，把喜欢拉成了一段很长的路。"],
        ["宇航员", "看得越远，越发现自己够不到。"],
        ["速度", "5 cm/s，是樱花落下，也是两个人走散。"]
      ],
      palette: [["#f3b9ca", "樱花"], ["#8fc7e8", "天空"], ["#fff4d4", "日光"], ["#2d3450", "夜色"]]
    },
    makeine: {
      index: "12",
      title: "败犬女主太多了",
      jp: "負けヒロインが多すぎる！",
      en: "MAKEINE: TOO MANY LOSING HEROINES!",
      kind: "恋爱 / LOSERS",
      panelKicker: "12 / LOSING HEROINES",
      quote: "输了恋爱，也不能输掉青春。",
      intro: "别人故事里的败犬，在自己的生活里也是主角。它把失恋、便当、社办和奇怪的友情拍得又好笑又心软，像一场迟迟不肯结束的放学后。",
      meta: [["放送", "2024 · TV"], ["制作", "A-1 Pictures"], ["监督", "北村翔太郎"], ["原作", "雨森たきび"]],
      keywords: ["败犬", "便当", "社办", "青春"],
      fragments: [
        ["便当", "认真做好的便当，是失恋之后也要好好吃饭的证据。"],
        ["社办", "几个没赢的人坐在一起，反而像找到了队伍。"],
        ["败犬", "输掉一场心动，不代表输掉整个夏天。"]
      ],
      palette: [["#e47691", "败犬"], ["#9ec9c8", "教室"], ["#f6d38f", "便当"], ["#3d5a66", "黄昏"]]
    },
    steins: {
      index: "13",
      title: "命运石之门",
      jp: "STEINS;GATE",
      en: "STEINS;GATE",
      kind: "时间 / WORLDLINE",
      panelKicker: "13 / WORLDLINE",
      quote: "世界线会收束，但心意不会。",
      intro: "一台微波炉、一部手机和一群秋叶原的怪人，把时间旅行变成了一场无法回头的实验。每一次跳跃都像在改写命运，也像在把某个人推得更远。",
      meta: [["放送", "2011 · TV"], ["制作", "White Fox"], ["监督", "浜崎博嗣・佐藤卓哉"], ["原作", "5pb.・Nitroplus"]],
      keywords: ["时间机器", "世界线", "秋叶原", "选择"],
      fragments: [
        ["电话微波炉", "改变过去的那一下，往往先改变的是自己。"],
        ["世界线", "所有的如果，最后都收束成一个必须接受的答案。"],
        ["助手", "在无数条世界线里，仍然有人记得同一句话。"]
      ],
      palette: [["#071216", "实验室"], ["#6fd6c4", "显示器"], ["#d75b66", "世界线"], ["#b8f3df", "读数"]]
    },
    madoka: {
      index: "14",
      title: "魔法少女小圆",
      jp: "魔法少女まどか☆マギカ",
      en: "PUELLA MAGI MADOKA MAGICA",
      kind: "魔法 / LOOP",
      panelKicker: "14 / MAGICA",
      quote: "奇迹不是免费的，愿望也有代价。",
      intro: "看起来像一场闪亮的魔法少女冒险，走近才发现是一座用愿望搭起来的迷宫。粉色的光、黑色的丝带和不断重复的时间，把“拯救”问成了一个很疼的问题。",
      meta: [["放送", "2011 · TV"], ["制作", "Shaft"], ["监督", "新房昭之"], ["原作", "Magica Quartet"]],
      keywords: ["魔法", "轮回", "愿望", "焰"],
      fragments: [
        ["契约", "被实现的愿望，会以另一种形式要求偿还。"],
        ["轮回", "时间一次次回到原点，只为了不让那个人消失。"],
        ["圆", "最温柔的愿望，有时候也是最孤独的选择。"]
      ],
      palette: [["#190d20", "魔女"], ["#f27bb5", "灵魂宝石"], ["#ffe0b8", "金色"], ["#e9d9ef", "丝带"]]
    },
    railgun: {
      index: "15",
      title: "某科学的超电磁炮",
      jp: "とある科学の超電磁砲",
      en: "A CERTAIN SCIENTIFIC RAILGUN",
      kind: "电击 / CITY",
      panelKicker: "15 / RAILGUN",
      quote: "硬币飞起的那一刻，城市安静了一秒。",
      intro: "学园都市的日常，一边是便利店、校服和友情，一边是能力者、暗部和被掩埋的实验。它把“超能力”拍成了很亮的青春，也把城市拍成了有阴影的电路板。",
      meta: [["放送", "2009 · TV"], ["制作", "J.C.Staff"], ["监督", "长井龙雪"], ["原作", "镰池和马"]],
      keywords: ["电击", "学园都市", "友情", "硬币"],
      fragments: [
        ["硬币", "拇指弹起的一枚硬币，能换来一整条街的安静。"],
        ["学园都市", "这里有最先进的科技，也有最容易被忽略的人。"],
        ["四人组", "日常和战斗之间，最难守住的是彼此。"]
      ],
      palette: [["#081425", "夜城"], ["#8fe6ff", "电光"], ["#e7b759", "硬币"], ["#f2cf78", "路灯"]]
    }
  };

  var ORDER = ["fx", "kon", "pokemon", "garden", "clannad", "kaguya", "sakura", "umaru", "oreimo", "monogatari", "fivecm", "makeine", "steins", "madoka", "railgun"];
  var dialog = document.getElementById("world-dialog");
  var closeButton = dialog ? dialog.querySelector(".world-close") : null;
  var panelScroll = document.getElementById("world-panel-scroll");
  var stage = document.getElementById("world-stage");
  var stageUse = document.getElementById("world-stage-use");
  var currentId = null;
  var lastFocused = null;
  var baseTitle = document.title;

  if (!dialog || !closeButton) return;

  var cards = Array.prototype.slice.call(document.querySelectorAll(".world-card[data-world]"));
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var visibleCount = document.getElementById("visible-count");
  var emptyState = document.querySelector(".worlds-empty");
  var activeFilter = "all";

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

  function contrastColor(hex) {
    var clean = hex.replace("#", "");
    var r = parseInt(clean.substring(0, 2), 16);
    var g = parseInt(clean.substring(2, 4), 16);
    var b = parseInt(clean.substring(4, 6), 16);
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.62 ? "#110d17" : "#fffaff";
  }

  function renderWorld(id) {
    var world = WORLDS[id];
    if (!world) return;

    dialog.dataset.world = id;
    stage.dataset.world = id;
    if (stageUse) {
      stageUse.setAttribute("href", "#art-" + id);
      try {
        stageUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#art-" + id);
      } catch (error) {}
    }

    document.getElementById("world-stage-index").textContent = "WORLD " + world.index;
    document.getElementById("world-stage-kind").textContent = world.kind;
    document.getElementById("world-stage-jp").textContent = world.jp;
    document.getElementById("world-modal-title").textContent = world.title;
    document.getElementById("world-stage-en").textContent = world.en;
    document.getElementById("world-stage-coord").textContent = "ARCHIVE " + world.index + " / " + String(ORDER.length).padStart(2, "0");
    document.getElementById("world-panel-kicker").textContent = world.panelKicker;
    document.getElementById("world-quote").textContent = world.quote;
    document.getElementById("world-intro").textContent = world.intro;
    document.getElementById("world-position").textContent = world.index + " / " + String(ORDER.length).padStart(2, "0");

    var tags = document.getElementById("world-stage-tags");
    tags.innerHTML = world.keywords.slice(0, 3).map(function (keyword) {
      return "<li>" + escapeHTML(keyword) + "</li>";
    }).join("");

    var meta = document.getElementById("world-meta");
    meta.innerHTML = world.meta.map(function (item) {
      return "<div><dt>" + escapeHTML(item[0]) + "</dt><dd>" + escapeHTML(item[1]) + "</dd></div>";
    }).join("");

    var keywords = document.getElementById("world-keywords");
    keywords.innerHTML = world.keywords.map(function (keyword) {
      return "<li>" + escapeHTML(keyword) + "</li>";
    }).join("");

    var fragments = document.getElementById("world-fragments");
    fragments.innerHTML = world.fragments.map(function (fragment, index) {
      return "<li><span>0" + (index + 1) + "</span><div><strong>" +
        escapeHTML(fragment[0]) + "</strong><p>" + escapeHTML(fragment[1]) + "</p></div></li>";
    }).join("");

    var palette = document.getElementById("world-palette");
    palette.innerHTML = world.palette.map(function (color) {
      return '<span style="background:' + color[0] + ";color:" + contrastColor(color[0]) +
        '" title="' + escapeHTML(color[1]) + " " + color[0] + '">' + escapeHTML(color[1]) + "</span>";
    }).join("");

    if (panelScroll) panelScroll.scrollTop = 0;
    document.title = "《" + world.title + "》 · 番剧世界 — 鹭仙";
  }

  function setHash(id) {
    try {
      var next = id ? "#world-" + id : location.pathname + location.search;
      history.replaceState(id ? { world: id } : null, "", next);
    } catch (error) {}
  }

  function openWorld(id, options) {
    var world = WORLDS[id];
    if (!world) return;

    var updateHash = !options || options.updateHash !== false;
    if (!dialog.open) lastFocused = document.activeElement;
    renderWorld(id);
    currentId = id;
    document.dispatchEvent(new CustomEvent("luxian:worldopen", { detail: { id: id } }));

    if (!dialog.open) {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      document.body.classList.add("modal-open");
    }

    if (updateHash) setHash(id);

    window.setTimeout(function () {
      closeButton.focus({ preventScroll: true });
    }, 60);
  }

  function stepWorld(direction) {
    var index = ORDER.indexOf(currentId);
    if (index === -1) return;
    var nextIndex = (index + direction + ORDER.length) % ORDER.length;
    openWorld(ORDER[nextIndex]);
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      openWorld(card.dataset.world);
    });
  });

  closeButton.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", function () {
    document.body.classList.remove("modal-open");
    currentId = null;
    document.title = baseTitle;
    if (location.hash.indexOf("#world-") === 0) setHash(null);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus({ preventScroll: true });
    }
    lastFocused = null;
  });

  document.querySelectorAll(".world-step").forEach(function (button) {
    button.addEventListener("click", function () {
      stepWorld(Number(button.dataset.step));
    });
  });

  document.addEventListener("keydown", function (event) {
    if (!dialog.open) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepWorld(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepWorld(-1);
    }
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeFilter = button.dataset.filter;
      filterButtons.forEach(function (item) {
        var isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      applyFilter(activeFilter);
    });
  });

  function applyFilter(filter, initial) {
    var count = 0;
    cards.forEach(function (card) {
      var categories = (card.dataset.categories || "").split(/\s+/);
      var show = filter === "all" || categories.indexOf(filter) !== -1;
      card.hidden = !show;
      if (show) {
        count += 1;
        if (!initial) {
          window.requestAnimationFrame(function () {
            card.classList.add("is-visible");
          });
        }
      }
    });

    filterButtons.forEach(function (button) {
      var current = button.dataset.filter;
      button.querySelector("span").textContent = String(
        current === "all" ? cards.length : cards.filter(function (card) {
          return (card.dataset.categories || "").split(/\s+/).indexOf(current) !== -1;
        }).length
      ).padStart(2, "0");
    });

    if (visibleCount) visibleCount.textContent = String(count).padStart(2, "0");
    if (emptyState) emptyState.hidden = count !== 0;
  }

  var randomButton = document.querySelector("[data-random]");
  if (randomButton) {
    randomButton.addEventListener("click", function () {
      var visibleCards = cards.filter(function (card) {
        return !card.hidden;
      });
      if (!visibleCards.length) return;
      var pick = visibleCards[Math.floor(Math.random() * visibleCards.length)];
      randomButton.classList.remove("is-spinning");
      void randomButton.offsetWidth;
      randomButton.classList.add("is-spinning");
      window.setTimeout(function () {
        randomButton.classList.remove("is-spinning");
      }, 700);
      window.setTimeout(function () {
        openWorld(pick.dataset.world);
      }, 180);
    });
  }

  function syncFromHash() {
    var match = location.hash.match(/^#world-([a-z]+)$/);
    if (match && WORLDS[match[1]]) {
      openWorld(match[1], { updateHash: false });
    } else if (dialog.open) {
      dialog.close();
    }
  }

  window.addEventListener("hashchange", syncFromHash);

  if (location.hash.indexOf("#world-") === 0) {
    window.setTimeout(syncFromHash, 220);
  }

  /* ---------- Random animated wallpaper ---------- */

  var WALLPAPER_NAMES = {
    fx: "FX战士久留美",
    kon: "轻音少女",
    pokemon: "宝可梦",
    garden: "言叶之庭",
    clannad: "CLANNAD",
    kaguya: "辉夜大小姐",
    sakura: "百变小樱",
    umaru: "干物妹！小埋",
    oreimo: "我的妹妹不可能那么可爱",
    monogatari: "物语系列",
    fivecm: "秒速五厘米",
    makeine: "败犬女主太多了",
    steins: "命运石之门",
    madoka: "魔法少女小圆",
    railgun: "某科学的超电磁炮"
  };

  function initWallpaper() {
    var root = document.getElementById("worlds-wallpaper");
    var slidesRoot = document.getElementById("wallpaper-slides");
    var canvas = document.getElementById("wallpaper-particles");
    var numberNode = document.getElementById("wallpaper-number");
    var nameNode = document.getElementById("wallpaper-name");
    var switchButton = document.querySelector(".wallpaper-switch");
    if (!root || !slidesRoot) return;

    var context = canvas && canvas.getContext ? canvas.getContext("2d") : null;
    var slides = {};
    var currentWallpaper = null;
    var mode = "fx";
    var width = 0;
    var height = 0;
    var dpr = 1;
    var particles = [];
    var frameId = null;
    var lastFrame = 0;
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var isMobile = window.matchMedia("(max-width: 720px)");

    ORDER.forEach(function (id) {
      var slide = document.createElement("div");
      slide.className = "wallpaper-slide";
      slide.dataset.wallpaper = id;
      slide.innerHTML = '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#art-' + id + '"></use></svg>';
      slides[id] = slide;
      slidesRoot.appendChild(slide);
    });

    function rand(min, max) {
      return min + Math.random() * (max - min);
    }

    function pick(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    function makeParticle() {
      var palettes = {
        fx: ["#70f0a8", "#ff6b6b", "#d9ffe8"],
        kon: ["#f8d9b8", "#f2bc8a", "#fff3de"],
        pokemon: ["#ffd25f", "#8ed777", "#eafbe4"],
        garden: ["#9ed6c0", "#c4b5fd", "#b9dfcf"],
        clannad: ["#f3b29c", "#f4c27f", "#fff8e8"],
        kaguya: ["#ffe7b0", "#e5b96e", "#f08a9f"],
        sakura: ["#f7b8cc", "#ffe8f2", "#f3cd7a"],
        umaru: ["#f6b35e", "#ffe8b7", "#e86f5a"],
        oreimo: ["#ef6fa6", "#83d8ee", "#ffd6e6"],
        monogatari: ["#d94b5d", "#f3d9d4", "#6fb7b0"],
        fivecm: ["#f3b9ca", "#8fc7e8", "#fff4d4"],
        makeine: ["#e47691", "#9ec9c8", "#f6d38f"],
        steins: ["#6fd6c4", "#d75b66", "#b8f3df"],
        madoka: ["#f27bb5", "#ffe0b8", "#e9d9ef"],
        railgun: ["#8fe6ff", "#e7b759", "#f2cf78"]
      };
      var palette = palettes[mode] || palettes.garden;
      var base = {
        x: rand(0, width),
        y: rand(0, height),
        vx: 0,
        vy: 0,
        size: rand(2, 5),
        alpha: rand(0.14, 0.54),
        color: pick(palette),
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.02, 0.02),
        phase: rand(0, Math.PI * 2)
      };

      if (mode === "fx") {
        base.type = Math.random() < 0.35 ? "candle" : "spark";
        base.vy = rand(-0.48, -0.12);
        base.vx = rand(-0.06, 0.06);
        base.w = rand(1.5, 3.5);
        base.h = rand(6, 22);
        base.size = base.w;
      } else if (mode === "kon") {
        base.type = "note";
        base.char = pick(["♪", "♫", "·"]);
        base.vy = rand(-0.34, -0.1);
        base.vx = rand(-0.08, 0.08);
        base.size = rand(12, 28);
      } else if (mode === "pokemon") {
        base.type = "leaf";
        base.vy = rand(0.12, 0.38);
        base.vx = rand(-0.3, 0.3);
        base.size = rand(3, 7);
        base.stretch = rand(1.7, 2.6);
      } else if (mode === "garden") {
        base.type = "rain";
        base.vy = rand(4.2, 8.2);
        base.vx = rand(-0.28, 0.03);
        base.size = rand(12, 42);
        base.alpha = rand(0.1, 0.32);
      } else if (mode === "clannad") {
        base.type = "petal";
        base.vy = rand(0.14, 0.36);
        base.vx = rand(-0.28, 0.28);
        base.size = rand(3, 6.5);
        base.stretch = rand(1.5, 2.3);
      } else if (mode === "sakura") {
        base.type = "petal";
        base.vy = rand(0.12, 0.32);
        base.vx = rand(-0.3, 0.3);
        base.size = rand(3, 6);
        base.stretch = rand(1.5, 2.4);
      } else if (mode === "fivecm") {
        base.type = "petal";
        base.vy = rand(0.16, 0.38);
        base.vx = rand(-0.18, 0.24);
        base.size = rand(2.5, 5.5);
        base.stretch = rand(1.4, 2.2);
      } else if (mode === "monogatari") {
        base.type = "spark";
        base.vy = rand(-0.34, -0.1);
        base.vx = rand(-0.12, 0.12);
        base.size = rand(1.4, 4.2);
      } else if (mode === "makeine") {
        base.type = Math.random() < 0.3 ? "heart" : "spark";
        base.vy = rand(-0.22, -0.05);
        base.vx = rand(-0.16, 0.16);
        base.size = base.type === "heart" ? rand(7, 12) : rand(1.5, 4);
      } else if (mode === "steins") {
        base.type = "spark";
        base.vy = rand(-0.3, -0.08);
        base.vx = rand(-0.08, 0.08);
        base.size = rand(1.2, 3.8);
      } else if (mode === "madoka") {
        base.type = Math.random() < 0.45 ? "heart" : "spark";
        base.vy = rand(-0.2, 0.02);
        base.vx = rand(-0.2, 0.2);
        base.size = base.type === "heart" ? rand(6, 11) : rand(1.5, 4.5);
      } else if (mode === "railgun") {
        base.type = "spark";
        base.vy = rand(-0.42, -0.14);
        base.vx = rand(-0.28, 0.28);
        base.size = rand(1.4, 4.6);
      } else if (mode === "umaru") {
        base.type = "spark";
        base.vy = rand(-0.22, -0.05);
        base.vx = rand(-0.08, 0.08);
        base.size = rand(1.5, 4);
      } else {
        base.type = Math.random() < 0.28 ? "heart" : "spark";
        base.vy = rand(-0.34, -0.08);
        base.vx = rand(-0.15, 0.15);
        base.size = base.type === "heart" ? rand(8, 14) : rand(1.6, 4.6);
      }

      return base;
    }

    function buildParticles() {
      if (!context) return;
      particles = [];
      var count = isMobile.matches ? 22 : 36;
      for (var i = 0; i < count; i += 1) {
        particles.push(makeParticle());
      }
      if (reducedMotion.matches) drawFrame(1);
    }

    function resizeCanvas() {
      if (!canvas || !context) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    }

    function drawStar(x, y, radius, color) {
      context.beginPath();
      context.moveTo(x, y - radius);
      context.lineTo(x + radius * 0.22, y - radius * 0.22);
      context.lineTo(x + radius, y);
      context.lineTo(x + radius * 0.22, y + radius * 0.22);
      context.lineTo(x, y + radius);
      context.lineTo(x - radius * 0.22, y + radius * 0.22);
      context.lineTo(x - radius, y);
      context.lineTo(x - radius * 0.22, y - radius * 0.22);
      context.closePath();
      context.fillStyle = color;
      context.fill();
    }

    function drawFrame(step) {
      if (!context) return;
      context.clearRect(0, 0, width, height);

      particles.forEach(function (particle) {
        particle.x += particle.vx * step;
        particle.y += particle.vy * step;
        particle.rot += particle.vr * step;
        particle.phase += 0.012 * step;

        if (particle.y < -70) {
          particle.y = height + 40;
          particle.x = rand(0, width);
        } else if (particle.y > height + 70) {
          particle.y = -40;
          particle.x = rand(0, width);
        }
        if (particle.x < -70) particle.x = width + 40;
        if (particle.x > width + 70) particle.x = -40;

        context.save();
        context.globalAlpha = particle.alpha;
        context.translate(particle.x, particle.y);
        context.rotate(particle.rot);

        if (particle.type === "rain") {
          context.strokeStyle = particle.color;
          context.lineWidth = 0.8;
          context.beginPath();
          context.moveTo(0, -particle.size);
          context.lineTo(0, particle.size);
          context.stroke();
        } else if (particle.type === "note") {
          context.fillStyle = particle.color;
          context.font = particle.size + "px Georgia, serif";
          context.textAlign = "center";
          context.fillText(particle.char, Math.sin(particle.phase) * 8, 0);
        } else if (particle.type === "leaf" || particle.type === "petal") {
          context.fillStyle = particle.color;
          context.beginPath();
          context.ellipse(0, 0, particle.size * particle.stretch, particle.size, 0, 0, Math.PI * 2);
          context.fill();
        } else if (particle.type === "candle") {
          context.fillStyle = particle.color;
          context.fillRect(-particle.w / 2, -particle.h / 2, particle.w, particle.h);
          context.strokeStyle = particle.color;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(0, -particle.h / 2);
          context.lineTo(0, -particle.h / 2 - 5);
          context.stroke();
        } else if (particle.type === "heart") {
          context.fillStyle = particle.color;
          context.font = particle.size + "px Georgia, serif";
          context.textAlign = "center";
          context.fillText("♥", 0, 0);
        } else {
          drawStar(0, 0, particle.size, particle.color);
        }

        context.restore();
      });
    }

    function frame(timestamp) {
      if (document.hidden || reducedMotion.matches) {
        frameId = null;
        return;
      }
      var step = lastFrame ? Math.min(2.4, (timestamp - lastFrame) / 16.667) : 1;
      lastFrame = timestamp;
      drawFrame(step);
      frameId = window.requestAnimationFrame(frame);
    }

    function startParticles() {
      if (!context || reducedMotion.matches || frameId) return;
      lastFrame = 0;
      frameId = window.requestAnimationFrame(frame);
    }

    function stopParticles() {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
      lastFrame = 0;
    }

    function setWallpaper(id, initial) {
      if (!slides[id] || !WORLDS[id]) return;
      if (currentWallpaper) slides[currentWallpaper].classList.remove("is-active");
      currentWallpaper = id;
      slides[id].classList.add("is-active");
      mode = id;
      if (numberNode) numberNode.textContent = WORLDS[id].index;
      if (nameNode) nameNode.textContent = WALLPAPER_NAMES[id] || WORLDS[id].title;
      if (switchButton) {
        switchButton.setAttribute("aria-label", "随机切换番剧壁纸，当前为" + (WALLPAPER_NAMES[id] || WORLDS[id].title));
      }
      buildParticles();
      if (!initial) startParticles();
    }

    if (switchButton) {
      switchButton.addEventListener("click", function () {
        var pool = ORDER.filter(function (id) {
          return id !== currentWallpaper;
        });
        var next = pick(pool);
        switchButton.classList.remove("is-spinning");
        void switchButton.offsetWidth;
        switchButton.classList.add("is-spinning");
        window.setTimeout(function () {
          switchButton.classList.remove("is-spinning");
        }, 650);
        setWallpaper(next);
      });
    }

    document.addEventListener("luxian:worldopen", function (event) {
      var id = event.detail && event.detail.id;
      if (id) setWallpaper(id);
    });

    var footer = document.querySelector(".site-footer");
    if (footer && "IntersectionObserver" in window) {
      var footerObserver = new IntersectionObserver(function (entries) {
        document.body.classList.toggle("at-footer", entries[0].isIntersecting);
      }, { rootMargin: "0px 0px -30px 0px", threshold: 0 });
      footerObserver.observe(footer);
    }

    window.addEventListener("resize", function () {
      resizeCanvas();
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopParticles();
      } else {
        startParticles();
      }
    });

    if (reducedMotion.addEventListener) {
      reducedMotion.addEventListener("change", function () {
        if (reducedMotion.matches) {
          stopParticles();
          drawFrame(1);
        } else {
          startParticles();
        }
      });
    }

    resizeCanvas();
    setWallpaper(pick(ORDER), true);
    startParticles();
  }

  initWallpaper();
  applyFilter("all", true);
})();
