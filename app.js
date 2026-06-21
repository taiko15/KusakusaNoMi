import { RAW_BANKS, SUPPLEMENTAL_BANKS } from "./data/questions.js";
import { CRAB_IMAGES } from "./data/crabs.js";

const TOTAL_QUESTIONS = 10;
const CUSTOM_BANK_KEY = "kanji-custom-bank-v1";
const WRONG_HISTORY_KEY = "kanji-wrong-history-v1";
const CRAB_COLLECTION_KEY = "kanji-crab-collection-v1";
const state = {
  grade: 1,
  queue: [],
  index: 0,
  locked: false,
};

const baseBanks = Object.fromEntries(
  Object.entries(RAW_BANKS).map(([grade, raw]) => [
    grade,
    parseBank(`${raw}\n${SUPPLEMENTAL_BANKS[grade] || ""}`, Number(grade)),
  ])
);
const customBanks = loadCustomBanks();
const banks = buildBanks();

const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const resultScreen = document.querySelector("#result-screen");
const gradeGrid = document.querySelector("#grade-grid");
const kanjiText = document.querySelector("#kanji-text");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const gradeLabel = document.querySelector("#grade-label");
const celebration = document.querySelector("#celebration");
const addForm = document.querySelector("#add-form");
const customGrade = document.querySelector("#custom-grade");
const customKanji = document.querySelector("#custom-kanji");
const customReading = document.querySelector("#custom-reading");
const addMessage = document.querySelector("#add-message");
const historyList = document.querySelector("#history-list");
const collectionGrid = document.querySelector("#collection-grid");
const collectionCount = document.querySelector("#collection-count");
const rewardCard = document.querySelector("#reward-card");
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioContext;
let bgmTimer;
let bgmStep = 0;

function getAudioContext() {
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(frequency, start, duration, type, volume) {
  const context = getAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function startBgm() {
  const context = getAudioContext();
  if (!context || bgmTimer) return;

  const melody = [392, 494, 587, 494, 440, 523, 659, 523];
  bgmTimer = window.setInterval(() => {
    const now = context.currentTime;
    playTone(melody[bgmStep % melody.length], now, 0.2, "sine", 0.075);
    playTone(melody[(bgmStep + 2) % melody.length] / 2, now, 0.24, "triangle", 0.04);
    bgmStep += 1;
  }, 430);
}

function playCorrectSound() {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  playTone(880, now, 0.15, "sine", 0.28);
  playTone(1175, now + 0.12, 0.22, "sine", 0.32);
}

function playWrongSound() {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  playTone(180, now, 0.22, "sawtooth", 0.26);
  playTone(130, now + 0.18, 0.28, "sawtooth", 0.24);
}

function playFanfare() {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  [523, 659, 784, 1047, 784, 1047, 1319].forEach((frequency, index) => {
    playTone(frequency, now + index * 0.13, 0.22, "triangle", 0.3);
  });
}

function parseBank(raw, grade) {
  const entries = raw
    .trim()
    .split("\n")
    .map((line, index) => {
      const [text, reading] = line.split("|").map((part) => part.trim());
      return { id: `${grade}-${index + 1}`, text, reading };
    });
  return entries.slice(0, 200);
}

function buildBanks() {
  return Object.fromEntries(
    Object.entries(baseBanks).map(([grade, items]) => [grade, [...items, ...customBanks[grade]]])
  );
}

function loadCustomBanks() {
  const emptyBanks = Object.fromEntries([1, 2, 3, 4, 5, 6].map((grade) => [grade, []]));
  try {
    const saved = JSON.parse(localStorage.getItem(CUSTOM_BANK_KEY) || "{}");
    Object.keys(emptyBanks).forEach((grade) => {
      emptyBanks[grade] = Array.isArray(saved[grade]) ? saved[grade] : [];
    });
  } catch {
    return emptyBanks;
  }
  return emptyBanks;
}

function saveCustomBanks() {
  localStorage.setItem(CUSTOM_BANK_KEY, JSON.stringify(customBanks));
}

function loadWrongHistory() {
  try {
    return JSON.parse(localStorage.getItem(WRONG_HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveWrongHistory(history) {
  localStorage.setItem(WRONG_HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
}

function loadCrabCollection() {
  try {
    const saved = JSON.parse(localStorage.getItem(CRAB_COLLECTION_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((name) => CRAB_IMAGES.includes(name)) : [];
  } catch {
    return [];
  }
}

function saveCrabCollection(collection) {
  localStorage.setItem(CRAB_COLLECTION_KEY, JSON.stringify([...new Set(collection)]));
}

function crabName(fileName) {
  return fileName.replace(/\.jpg$/i, "");
}

function crabPath(fileName) {
  return `./picts/${encodeURIComponent(fileName)}`;
}

function awardCrab() {
  const collection = loadCrabCollection();
  const owned = new Set(collection);
  const available = CRAB_IMAGES.filter((fileName) => !owned.has(fileName));
  const won = available.length > 0 ? sample(available, 1)[0] : sample(CRAB_IMAGES, 1)[0];

  if (!owned.has(won)) {
    collection.unshift(won);
    saveCrabCollection(collection);
  }

  renderCollection();
  return {
    fileName: won,
    isNew: !owned.has(won),
  };
}

function refreshBanks() {
  const nextBanks = buildBanks();
  Object.keys(banks).forEach((grade) => {
    banks[grade] = nextBanks[grade];
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function show(screen) {
  [startScreen, gameScreen, resultScreen].forEach((element) => element.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function startGame(grade) {
  startBgm();
  state.grade = grade;
  state.queue = sample(banks[grade], TOTAL_QUESTIONS);
  state.index = 0;
  state.locked = false;
  gradeLabel.textContent = `${grade}年`;
  show(gameScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = state.queue[state.index];
  state.locked = false;
  feedback.textContent = "";
  kanjiText.textContent = question.text;
  progressLabel.textContent = `${state.index + 1} / ${TOTAL_QUESTIONS}`;
  progressBar.style.width = `${((state.index + 1) / TOTAL_QUESTIONS) * 100}%`;

  const wrongChoices = sample(
    banks[state.grade].map((item) => item.reading).filter((reading) => reading !== question.reading),
    3
  );
  const options = shuffle([question.reading, ...wrongChoices]);

  choices.replaceChildren(
    ...options.map((option) => {
      const button = document.createElement("button");
      button.className = "choice-button";
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => answer(option, button));
      return button;
    })
  );
}

function answer(reading, button) {
  if (state.locked) return;
  const question = state.queue[state.index];
  const isCorrect = reading === question.reading;

  if (!isCorrect) {
    playWrongSound();
    button.classList.add("wrong");
    feedback.textContent = "ブッブー！もう一度！";
    recordWrongAnswer(question, reading);
    return;
  }

  state.locked = true;
  playCorrectSound();
  button.classList.add("correct");
  feedback.textContent = "ピンポン！正解！";

  window.setTimeout(() => {
    state.index += 1;
    if (state.index >= TOTAL_QUESTIONS) {
      const reward = awardCrab();
      show(resultScreen);
      celebrate(reward);
      return;
    }
    renderQuestion();
  }, 650);
}

function celebrate(reward) {
  playFanfare();
  renderReward(reward);
  celebration.replaceChildren();
  const colors = ["#f43f5e", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#14b8a6"];
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 80; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.85}s`;
    piece.style.animationDuration = `${1.6 + Math.random() * 1.25}s`;
    fragment.append(piece);
  }

  celebration.append(fragment);
}

function renderReward(reward) {
  rewardCard.replaceChildren();
  const title = document.createElement("div");
  title.className = "reward-copy";
  title.textContent = reward.isNew
    ? `新しいカニをゲット！ ${crabName(reward.fileName)}`
    : `全種類コンプリート済み！ 今回は ${crabName(reward.fileName)}`;

  const image = document.createElement("img");
  image.src = crabPath(reward.fileName);
  image.alt = crabName(reward.fileName);

  rewardCard.append(image, title);
}

function addCustomQuestion(event) {
  event.preventDefault();
  const grade = customGrade.value;
  const text = customKanji.value.trim();
  const reading = customReading.value.trim();

  if (!text || !reading) {
    addMessage.textContent = "漢字と読みを入力してください。";
    return;
  }

  const exists = banks[grade].some((item) => item.text === text && item.reading === reading);
  if (exists) {
    addMessage.textContent = "同じ問題はすでに登録されています。";
    return;
  }

  customBanks[grade].push({
    id: `custom-${grade}-${Date.now()}`,
    text,
    reading,
    custom: true,
  });
  saveCustomBanks();
  refreshBanks();
  addForm.reset();
  customGrade.value = grade;
  addMessage.textContent = `${grade}年生に「${text}」を追加しました。`;
}

function recordWrongAnswer(question, selectedReading) {
  const history = loadWrongHistory();
  const now = new Date();
  history.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    grade: state.grade,
    text: question.text,
    reading: question.reading,
    selectedReading,
    date: now.toLocaleString("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  saveWrongHistory(history);
  renderWrongHistory();
}

function renderWrongHistory() {
  const history = loadWrongHistory();
  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-history">まだ間違い履歴はありません。</p>';
    return;
  }

  historyList.replaceChildren(
    ...history.slice(0, 20).map((item) => {
      const row = document.createElement("div");
      row.className = "history-item";

      const grade = document.createElement("div");
      grade.className = "history-grade";
      grade.textContent = `${item.grade}年`;

      const main = document.createElement("div");
      main.className = "history-main";
      const text = document.createElement("strong");
      text.textContent = item.text;
      main.append(
        text,
        ` / 正解: ${item.reading}`,
        document.createElement("br"),
        `選んだ読み: ${item.selectedReading} ・ ${item.date}`
      );

      row.append(grade, main);
      return row;
    })
  );
}

function renderCollection() {
  const collection = loadCrabCollection();
  collectionCount.textContent = `${collection.length} / ${CRAB_IMAGES.length}`;

  if (collection.length === 0) {
    collectionGrid.innerHTML = '<p class="empty-collection">10問クリアすると、ここにカニが集まります。</p>';
    return;
  }

  collectionGrid.replaceChildren(
    ...collection.map((fileName) => {
      const card = document.createElement("div");
      card.className = "crab-card";

      const image = document.createElement("img");
      image.src = crabPath(fileName);
      image.alt = crabName(fileName);

      const name = document.createElement("div");
      name.className = "crab-name";
      name.textContent = crabName(fileName);

      card.append(image, name);
      return card;
    })
  );
}

function renderGrades() {
  const fragment = document.createDocumentFragment();
  for (let grade = 1; grade <= 6; grade += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "grade-button";
    button.textContent = `${grade}年生`;
    button.setAttribute("aria-label", `${grade}年生の問題を始める`);
    button.addEventListener("click", () => startGame(grade));
    fragment.append(button);
  }
  gradeGrid.append(fragment);
}

document.querySelector("#back-button").addEventListener("click", () => show(startScreen));
document.querySelector("#retry-button").addEventListener("click", () => startGame(state.grade));
document.querySelector("#change-grade-button").addEventListener("click", () => show(startScreen));
document.querySelector("#clear-history-button").addEventListener("click", () => {
  saveWrongHistory([]);
  renderWrongHistory();
});
document.querySelector("#clear-collection-button").addEventListener("click", () => {
  saveCrabCollection([]);
  renderCollection();
});
addForm.addEventListener("submit", addCustomQuestion);

renderGrades();
renderWrongHistory();
renderCollection();
