// Animation Timeline
let tl;
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  tl = new TimelineMax();

  tl.timeScale(0.85);

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5",
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1",
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2",
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05,
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7",
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5",
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4",
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2",
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2,
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1",
    )
    // 🌹 ROSE DAY START
    // 🌹 ROSE DAY — SEQUENTIAL & SPACED
    .set("#roseDay", { visibility: "visible", opacity: 1 })

    // 1️⃣ First line (left upper)
    .fromTo("#roseDay .line-1", 1, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })

    // ⏸️ Pause after first line
    .to({}, 1, {})

    // 2️⃣ Second line (left lower, clear gap)
    .fromTo("#roseDay .line-2", 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })

    // ⏸️ Pause after second line
    .to({}, 1, {})

    // 3️⃣ Rose image (aligned right of both texts)
    .fromTo(
      "#roseDay .rose-img",
      1,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0 },
    )

    // ⏸️ Hold everything for a moment
    .to({}, 1.5, {})

    // 4️⃣ Fade out entire rose section
    .to("#roseDay", 1, {
      opacity: 0,
    })
    // Propose GASP
    .set("#proposeSection", { visibility: "visible" })

    .fromTo(
      "#proposeSection .propose-text",
      1,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0 },
    )
    .staggerFromTo(
      "#proposeSection .photo-card",
      0.8,
      { opacity: 0, rotationY: 90 },
      { opacity: 1, rotationY: 0 },
      0.3,
    )
    .to(
      "#proposeSection",
      1,
      {
        opacity: 0,
      },
      "+=2",
    )

    // ✨ MORE MOMENTS
    .set("#momentsSection", { visibility: "visible" })

    .fromTo(
      "#momentsSection .section-text",
      1,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 },
    )

    .staggerFromTo(
      "#momentsSection .photo-card",
      0.8,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 },
      0.4,
    )

    .to("#momentsSection", 1, { opacity: 0 }, "+=2")

    // 💬 MORE CONVERSATIONS
    .set("#conversationSection", { visibility: "visible" })

    .fromTo(
      "#conversationSection .section-text",
      1,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0 },
    )

    .staggerFromTo(
      "#conversationSection .photo-card",
      0.8,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 },
      0.4,
    )

    .to("#conversationSection", 1, { opacity: 0 }, "+=2")

    // 🔥 SHOW SIX SECTION PROPERLY
    // 🔥 SHOW PARTY SECTIONS
    .set(".six, .seven, .eight", {
      visibility: "visible",
      opacity: 1,
    })

    .from(".six", 1, { opacity: 0, y: 50 })

    // 🔁 RESET POSITION FOR VALENTINE SECTION
    .set(".six", {
      visibility: "visible",
      opacity: 1,
    })

    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2,
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2",
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1,
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party",
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party",
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3,
    )
    .to(
      ".six",
      0.8,
      {
        opacity: 0,
        y: 40,
      },
      "+=2",
    )
    .set(".nine", {
      visibility: "visible",
      opacity: 1,
      zIndex: 15,
    })

    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1",
    );

  tl.eventCallback("onComplete", function () {
    const roseScreen = document.getElementById("finalRoseScreen");

    roseScreen.style.visibility = "visible";

    setTimeout(() => {
      roseScreen.style.opacity = "1";
    }, 100);
  });

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline);

// ===============================
// 💕 ROMANTIC LIVE BACKGROUND
// ===============================
const canvas = document.getElementById("romantic-bg");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// 💖 Particle class
class Particle {
  constructor(type) {
    this.type = type; // "heart" | "dot"
    this.reset();
  }

  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h - h;
    this.size =
      this.type === "heart" ? 14 + Math.random() * 10 : 2 + Math.random() * 2;
    this.speedY = 0.4 + Math.random() * 1.2;
    this.speedX = Math.random() * 0.6 - 0.3;
    this.alpha = 0.15 + Math.random() * 0.25;
  }

  draw() {
    ctx.globalAlpha = this.alpha;

    if (this.type === "heart") {
      ctx.fillStyle = "#ff7aa2";
      ctx.beginPath();
      const s = this.size;
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(
        this.x - s,
        this.y - s,
        this.x - s * 2,
        this.y + s / 2,
        this.x,
        this.y + s * 1.5,
      );
      ctx.bezierCurveTo(
        this.x + s * 2,
        this.y + s / 2,
        this.x + s,
        this.y - s,
        this.x,
        this.y,
      );
      ctx.fill();
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;

    if (this.y > h + 20) this.reset();
    this.draw();
  }
}

// 💕 Create particles
const particles = [];
for (let i = 0; i < 40; i++) particles.push(new Particle("heart"));
for (let i = 0; i < 80; i++) particles.push(new Particle("dot"));

// 🎬 Animation loop
function animateBG() {
  ctx.clearRect(0, 0, w, h);

  // soft pink glow
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "rgba(255,230,240,0.25)");
  grad.addColorStop(1, "rgba(255,200,220,0.25)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  particles.forEach((p) => p.update());
  requestAnimationFrame(animateBG);
}

animateBG();

// ===============================
// 🎵 Romantic Music System
// ===============================

const musicList = [
  "music/music1.mp3",
  "music/music2.mp3",
  "music/music3.mp3",
  "music/music4.mp3",
];

let currentTrack = 0;
const audio = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function playMusic(index) {
  audio.src = musicList[index];
  audio.volume = 0.4;
  audio.play().catch(() => {});
  musicBtn.classList.add("playing");
}

// Autoplay (browser allow kare toh)
// Autoplay on load
window.addEventListener("load", () => {
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Agar autoplay blocked ho, first click start kare
      document.body.addEventListener(
        "click",
        () => {
          audio.play();
        },
        { once: true },
      );
    });
  }
});

// If autoplay blocked → first click will start it
document.body.addEventListener(
  "click",
  () => {
    audio.play();
  },
  { once: true },
);

// Click → Next Song
musicBtn.addEventListener("click", () => {
  currentTrack++;
  if (currentTrack >= musicList.length) currentTrack = 0;
  playMusic(currentTrack); // only shuffle
});

window.addEventListener("DOMContentLoaded", () => {
  const takeBtn = document.getElementById("takeRose");
  const throwBtn = document.getElementById("throwRose");
  const roseImg = document.getElementById("finalRoseImg");
  const message = document.getElementById("finalMessage");

  const messages = [
    "Nice try 😏",
    "You can't escape 😌",
    "Stop running 😂",
    "Just accept it already 🌹",
    "I am telling you……",
    "C'mon Vanshika😢",
  ];

  throwBtn.addEventListener("click", () => {
    const btnWidth = throwBtn.offsetWidth;
    const btnHeight = throwBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - 60;
    const maxY = window.innerHeight - btnHeight - 60;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    throwBtn.style.position = "absolute";
    throwBtn.style.left = randX + "px";
    throwBtn.style.top = randY + "px";

    message.innerText = messages[Math.floor(Math.random() * messages.length)];
  });
});

function setupRoseButtons() {
  const takeBtn = document.getElementById("takeRose");
  const throwBtn = document.getElementById("throwRose");
  const roseImg = document.getElementById("finalRoseImg");
  const message = document.getElementById("finalMessage");

  if (!takeBtn || !throwBtn) {
    console.log("Buttons not found");
    return;
  }

  const messages = [
    "Nice try 😏",
    "You can't escape 😌",
    "Stop running 😂",
    "Just accept it already 🌹",
    "I am telling you…",
    "C'mon Vanshika😢",
  ];

  throwBtn.addEventListener("click", () => {
    const btnWidth = throwBtn.offsetWidth;
    const btnHeight = throwBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - 40;
    const maxY = window.innerHeight - btnHeight - 40;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    throwBtn.style.position = "absolute";
    throwBtn.style.left = randX + "px";
    throwBtn.style.top = randY + "px";

    message.innerText = messages[Math.floor(Math.random() * messages.length)];
  });

  takeBtn.addEventListener("click", () => {
    roseImg.style.transform = "scale(1.4) rotate(10deg)";

    message.innerText = "You accepted it 🥺❤️";
    heartBlastEffect();

    setTimeout(() => {
      showFinalScreen();
    }, 1300);
  });

  console.log("Rose buttons ready ✅");
}

window.addEventListener("load", setupRoseButtons);

function heartBlastEffect() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-blast");

    const angle = Math.random() * 2 * Math.PI;
    const distance = 300 + Math.random() * 200;

    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    heart.style.left = window.innerWidth / 2 + "px";
    heart.style.top = window.innerHeight / 2 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1200);
  }
}

function showFinalScreen() {
  const final = document.getElementById("finalScreen");

  final.style.visibility = "visible";
  final.style.opacity = "1";

  setTimeout(() => {
    document.querySelector(".final-text").style.opacity = "1";
    document.querySelector(".final-text").style.transform = "translateY(0)";
  }, 100);
}
