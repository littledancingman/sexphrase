// script.js - full, matching your index.html
document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // CONFIG
  // ---------------------------
  const ROUND_DURATION = 80; // seconds (1:20)
  const WORDS = [
    "A-Frame",
    "Affair",
    "Adult Movie",
    "Amateur",
    "Anal Gaping",
    "Anal Sex",
    "Anna Nicole Smith",
    "Ass",
    "Ass-to-Mouth",
    "Autofellatio",
    "Backshots",
    "Ball Gag",
    "Ball Sack",
    "Bareback",
    "Barely Legal",
    "Bathhouse",
    "Bear",
    "BBC",
    "Bill Cosby",
    "Bisexual",
    "Blow Job",
    "Blindfold",
    "Blumpkin",
    "Bondage",
    "Box",
    "Bra",
    "Brazzers",
    "Brazilian Butt Lift",
    "Breast Implants",
    "Broad",
    "Bukkake",
    "Bull",
    "Bumble",
    "Butt",
    "Butt Plug",
    "Camgirl",
    "Chaturbate",
    "Cheating",
    "Chlamydia",
    "Cialis",
    "Circumcision",
    "Clitoris",
    "Cleveland Steamer",
    "Cock",
    "Cock and Ball Torture",
    "Cock Ring",
    "Condom",
    "Cougar",
    "Cowgirl",
    "Creampie",
    "Cuck",
    "Cuddling",
    "Cum",
    "Deep Throat",
    "Debbie Does Dallas",
    "Dental Dam",
    "Dick",
    "DILF",
    "Dirty Sanchez",
    "Dirty Talk",
    "Dildo",
    "Doggy Style",
    "Docking",
    "Donkey Show",
    "Dom",
    "Dominatrix",
    "Double Penetration",
    "Eiffel Tower",
    "Edible Underwear",
    "Ejaculate",
    "Erectile Dysfunction",
    "Exhibitionism",
    "Facefuck",
    "Fallopian Tubes",
    "Felching",
    "Femboy",
    "Fetish",
    "Fleshlight",
    "Foot Fetish",
    "Foreskin",
    "Foursome",
    "Friends with Benefits",
    "Full Bush",
    "G Spot",
    "Gang Bang",
    "Gay",
    "Gay-for-Pay",
    "Genitalia",
    "GHB",
    "Glass Bottom Boat",
    "Goatse",
    "Gonorrhea",
    "Gooning",
    "Granny",
    "Grindr",
    "G String",
    "Hairy Beaver",
    "Handcuffs",
    "Happy Ending",
    "Hentai",
    "Helicopter",
    "Hickey",
    "Hinge",
    "Hooters",
    "Hot Carl",
    "Humiliation",
    "Hung",
    "Hugh Hefner",
    "Hustler",
    "Incest",
    "Jenna Jameson",
    "Jock Strap",
    "Johnson",
    "Juggasaurus",
    "Just the Tip",
    "Kama Sutra",
    "Key Party",
    "Kim Kardashian",
    "Kink",
    "Labia",
    "Leather",
    "Lemon Party",
    "Lingerie",
    "Masturbation",
    "Master",
    "Maxim",
    "Making Out",
    "Marilyn Monroe",
    "Menage a Trois",
    "MILF",
    "Micropenis",
    "Minge",
    "Missionary",
    "MMF",
    "Moist",
    "Motorboat",
    "Naughty",
    "NC-17",
    "Necrophilia",
    "Nina Hartley",
    "Nipple Clamp",
    "Nipples",
    "Nude Beach",
    "Nympho",
    "Ovaries",
    "OnlyFans",
    "Oral Sex",
    "Orgy",
    "Ovulation",
    "P. Diddy",
    "Pamela Anderson",
    "Pasties",
    "Pearl Necklace",
    "Pegging",
    "Penetration",
    "Penis",
    "Penis Pump",
    "Penthouse",
    "Peter North",
    "Peeping Tom",
    "Pimp",
    "Piss",
    "Playboy",
    "Playboy Mansion",
    "Pleasure",
    "Plow",
    "PMS",
    "Polyamory",
    "Poppers",
    "Porn Addiction",
    "PornHub",
    "Precum",
    "Prostitute",
    "Prostate",
    "Pubes",
    "Pup Play",
    "Rawdog",
    "Red Wings",
    "Revenge Porn",
    "Reverse Cowgirl",
    "Rim Job",
    "Ron Jeremy",
    "Roman Polanski",
    "Rusty Trombone",
    "Scat",
    "Scrotum",
    "Semen",
    "Sperm",
    "Sperm Bank",
    "Snowballing",
    "Spank",
    "Spread Eagle",
    "Spooning",
    "Squirt",
    "Skinny Dip",
    "Slave",
    "Slut",
    "Snatch",
    "Speed Dating",
    "Spreading",
    "Stripper",
    "Striptease",
    "Sub",
    "Stormy Daniels",
    "Sugar Daddy",
    "Sybian",
    "Syphilis",
    "Swingers",
    "Tentacle Porn",
    "Testicles",
    "Threesome",
    "Thong",
    "Tina",
    "Tinder",
    "Tittyfuck",
    "Topless",
    "Tossing the Salad",
    "Trojan",
    "Twink",
    "Two Girls One Cup",
    "Undies",
    "Uncut",
    "Upside-Down Pineapple",
    "Vagina",
    "Vas Deferens",
    "Vibrator",
    "Viagra",
    "Vivid Entertainment",
    "Voyeur",
    "Vulva",
    "Wet",
    "Wet Dream",
    "Whipped Cream",
    "Whore",
    "Womb",
    "“Grab em by the pussy”"
  ];

  // ---------------------------
  // STATE
  // ---------------------------
  let currentWords = []; // copy of WORDS, used and spliced during a round
  let scoreA = 0;
  let scoreB = 0;
  let winningScore = parseInt(document.getElementById("winningScore").value) || 7;

  let timeLeft = ROUND_DURATION;
  let timerInterval = null;
  let beepInterval = null;
  let roundRunning = false;

  // Audio
  const beep = new Audio("beep.wav");
  const alarm = new Audio("alarm.wav");

  // Elements
  const wordDisplay = document.getElementById("wordDisplay");
  const nextWordBtn = document.getElementById("nextWord");
  const startRoundBtn = document.getElementById("startRound");
  const resetGameBtn = document.getElementById("resetGame");
  const scoreAEl = document.getElementById("scoreA");
  const scoreBEl = document.getElementById("scoreB");
  const scoreAButton = document.getElementById("scoreAButton");
  const scoreBButton = document.getElementById("scoreBButton");
  const winningScoreInput = document.getElementById("winningScore");

  // ---------------------------
  // HELPERS
  // ---------------------------
  function pickNextWord() {
    if (!currentWords || currentWords.length === 0) {
      return null;
    }
    const idx = Math.floor(Math.random() * currentWords.length);
    return currentWords.splice(idx, 1)[0];
  }

  function resetWords() {
    currentWords = [...WORDS];
  }

  function updateScoresUI() {
    scoreAEl.textContent = scoreA;
    scoreBEl.textContent = scoreB;
  }

  function clearIntervals() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (beepInterval) {
      clearInterval(beepInterval);
      beepInterval = null;
    }
  }

  function getBeepIntervalForTime(t) {
    // 80-61: slow, 60-41: medium, 40-21: fast, 20-0: very fast
    if (t > 60) return 2000;
    if (t > 40) return 1500;
    if (t > 20) return 1000;
    return 500;
  }

  function scheduleBeepInterval() {
    if (beepInterval) {
      clearInterval(beepInterval);
      beepInterval = null;
    }
    let lastInterval = getBeepIntervalForTime(timeLeft);
    // play immediately (optional): we won't play immediately; interval will handle it
    beepInterval = setInterval(() => {
      // Play a cloned audio so overlapping beeps won't cut each other
      try {
        const b = beep.cloneNode();
        b.play().catch(() => {});
      } catch (e) {
        // ignore
      }

      // If time segment changed, recreate interval with new timing
      const newInterval = getBeepIntervalForTime(timeLeft);
      if (newInterval !== lastInterval) {
        scheduleBeepInterval();
      }
    }, lastInterval);
  }

  // Dramatic pulsing at end
  function dramaticEndVisual() {
    const original = document.body.style.backgroundColor || "#f5f5f5";
    let pulses = 0;
    const pi = setInterval(() => {
      document.body.style.backgroundColor = pulses % 2 === 0 ? "#ff4444" : original;
      pulses++;
      if (pulses > 8) {
        clearInterval(pi);
        document.body.style.backgroundColor = original;
      }
    }, 200);
  }

  // ---------------------------
  // ROUND CONTROL
  // ---------------------------
  function startRound() {
    // Reset words and time
    resetWords();
    timeLeft = ROUND_DURATION;

    // Unlock audio permission by trying to play once (catch silence/deny)
    beep.play().catch(() => {});
    // do NOT play alarm here

    // Start internal (hidden) timer
    clearIntervals();
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        endRound();
      }
    }, 1000);

    // Start beep schedule
    scheduleBeepInterval();

    // UI state
    roundRunning = true;
    startRoundBtn.textContent = "Stop";
    wordDisplay.textContent = "Round started! Click Next Word";
  }

  function stopRound() {
    clearIntervals();
    roundRunning = false;
    startRoundBtn.textContent = "Start";
    wordDisplay.textContent = "Round stopped. Press Start to resume (will reset to 1:20).";
  }

  function endRound() {
    clearIntervals();
    roundRunning = false;
    startRoundBtn.textContent = "Start";

    // play alarm, visual pulse
    alarm.play().catch(() => {});
    dramaticEndVisual();

    wordDisplay.textContent = "⏰ Time's up!";
    // reset words so next start uses full list
    resetWords();
  }

  function toggleRound() {
    if (roundRunning) {
      stopRound();
    } else {
      // per your spec: starting always restarts the round from 1:20
      startRound();
    }
  }

  // ---------------------------
  // EVENTS
  // ---------------------------
  nextWordBtn.addEventListener("click", () => {
    const next = pickNextWord();
    if (!next) {
      wordDisplay.textContent = "No more words! Reset game to refill the list.";
      return;
    }
    wordDisplay.textContent = next;
  });

  startRoundBtn.addEventListener("click", toggleRound);

  resetGameBtn.addEventListener("click", () => {
    clearIntervals();
    roundRunning = false;
    startRoundBtn.textContent = "Start";
    scoreA = 0;
    scoreB = 0;
    updateScoresUI();
    resetWords();
    timeLeft = ROUND_DURATION;
    wordDisplay.textContent = "Press Start to begin";
  });

  scoreAButton.addEventListener("click", () => {
    scoreA++;
    updateScoresUI();
    checkWinner();
  });

  scoreBButton.addEventListener("click", () => {
    scoreB++;
    updateScoresUI();
    checkWinner();
  });

  winningScoreInput.addEventListener("change", () => {
    const v = parseInt(winningScoreInput.value);
    if (!isNaN(v) && v > 0) winningScore = v;
  });

  function checkWinner() {
    if (scoreA >= winningScore) {
      alert("🎉 Team A wins!");
      // reset game state but preserve words list
      clearIntervals();
      roundRunning = false;
      startRoundBtn.textContent = "Start";
      resetWords();
      scoreA = 0;
      scoreB = 0;
      updateScoresUI();
      wordDisplay.textContent = "Press Start to begin";
    } else if (scoreB >= winningScore) {
      alert("🎉 Team B wins!");
      clearIntervals();
      roundRunning = false;
      startRoundBtn.textContent = "Start";
      resetWords();
      scoreA = 0;
      scoreB = 0;
      updateScoresUI();
      wordDisplay.textContent = "Press Start to begin";
    }
  }

  // ---------------------------
  // INITIALIZE
  // ---------------------------
  resetWords();
  updateScoresUI();
  // Ensure UI shows Start
  startRoundBtn.textContent = "Start";
  wordDisplay.textContent = "Press Start to begin";
});
