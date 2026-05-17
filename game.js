const COLS = 10;
const ROWS = 20;
const BLOCK = 30;
const NEXT_BLOCK = 24;

const SHAPES = {
  I: [[1, 1, 1, 1]],
  J: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
};

const COLORS = {
  I: "#22d3ee",
  J: "#60a5fa",
  L: "#f59e0b",
  O: "#facc15",
  S: "#34d399",
  T: "#c084fc",
  Z: "#fb7185",
};

const SCORES = [0, 100, 300, 500, 800];

const boardCanvas = document.getElementById("board");
const boardCtx = boardCanvas.getContext("2d");
const nextCanvas = document.getElementById("next");
const nextCtx = nextCanvas.getContext("2d");
const scoreEl = document.getElementById("score");
const linesEl = document.getElementById("lines");
const levelEl = document.getElementById("level");
const overlay = document.getElementById("overlay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");

let grid;
let active;
let nextPiece;
let score;
let lines;
let level;
let dropCounter;
let lastTime;
let running = false;
let paused = false;
let animationId = 0;

function createGrid() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function randomPiece() {
  const types = Object.keys(SHAPES);
  const type = types[Math.floor(Math.random() * types.length)];
  return {
    type,
    shape: SHAPES[type].map((row) => [...row]),
    x: Math.floor(COLS / 2) - Math.ceil(SHAPES[type][0].length / 2),
    y: 0,
  };
}

function resetGame() {
  grid = createGrid();
  active = randomPiece();
  nextPiece = randomPiece();
  score = 0;
  lines = 0;
  level = 1;
  dropCounter = 0;
  lastTime = 0;
  running = true;
  paused = false;
  overlay.classList.add("hidden");
  pauseBtn.textContent = "Pause";
  pauseBtn.classList.remove("paused");
  updateStats();
  draw();
}

function collide(piece, offsetX = 0, offsetY = 0, shape = piece.shape) {
  for (let y = 0; y < shape.length; y += 1) {
    for (let x = 0; x < shape[y].length; x += 1) {
      if (!shape[y][x]) continue;
      const boardX = piece.x + x + offsetX;
      const boardY = piece.y + y + offsetY;
      if (boardX < 0 || boardX >= COLS || boardY >= ROWS) return true;
      if (boardY >= 0 && grid[boardY][boardX]) return true;
    }
  }
  return false;
}

function mergePiece() {
  active.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value && active.y + y >= 0) {
        grid[active.y + y][active.x + x] = active.type;
      }
    });
  });
}

function clearLines() {
  let cleared = 0;
  for (let y = ROWS - 1; y >= 0; y -= 1) {
    if (grid[y].every(Boolean)) {
      grid.splice(y, 1);
      grid.unshift(Array(COLS).fill(null));
      cleared += 1;
      y += 1;
    }
  }

  if (cleared > 0) {
    lines += cleared;
    level = Math.floor(lines / 10) + 1;
    score += SCORES[cleared] * level;
    updateStats();
  }
}

function spawnPiece() {
  active = nextPiece;
  active.x = Math.floor(COLS / 2) - Math.ceil(active.shape[0].length / 2);
  active.y = 0;
  nextPiece = randomPiece();
  if (collide(active)) endGame();
}

function endGame() {
  running = false;
  paused = false;
  cancelAnimationFrame(animationId);
  overlay.classList.remove("hidden");
  overlay.querySelector("h1").textContent = "Game Over";
  startBtn.textContent = "Restart";
}

function move(dx) {
  if (!running || paused) return;
  if (!collide(active, dx, 0)) active.x += dx;
  draw();
}

function softDrop() {
  if (!running || paused) return;
  if (!collide(active, 0, 1)) {
    active.y += 1;
    score += 1;
    updateStats();
  } else {
    lockPiece();
  }
  dropCounter = 0;
  draw();
}

function hardDrop() {
  if (!running || paused) return;
  let distance = 0;
  while (!collide(active, 0, 1)) {
    active.y += 1;
    distance += 1;
  }
  score += distance * 2;
  lockPiece();
  updateStats();
  draw();
}

function lockPiece() {
  mergePiece();
  clearLines();
  spawnPiece();
}

function rotate(matrix) {
  return matrix[0].map((_, index) => matrix.map((row) => row[index]).reverse());
}

function rotateActive() {
  if (!running || paused) return;
  const rotated = rotate(active.shape);
  const kicks = [0, -1, 1, -2, 2];
  for (const kick of kicks) {
    if (!collide(active, kick, 0, rotated)) {
      active.x += kick;
      active.shape = rotated;
      draw();
      return;
    }
  }
}

function update(time = 0) {
  if (!running) return;
  const delta = time - lastTime;
  lastTime = time;

  if (!paused) {
    dropCounter += delta;
    if (dropCounter > dropInterval()) softDrop();
    draw();
  }

  animationId = requestAnimationFrame(update);
}

function dropInterval() {
  return Math.max(90, 820 - (level - 1) * 62);
}

function updateStats() {
  scoreEl.textContent = score.toString();
  linesEl.textContent = lines.toString();
  levelEl.textContent = level.toString();
}

function drawBlock(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
  ctx.fillRect(x + 2, y + 2, size - 4, 4);
  ctx.strokeStyle = "rgba(0, 0, 0, 0.38)";
  ctx.lineWidth = 2;
  ctx.strokeRect(x + 1, y + 1, size - 2, size - 2);
}

function drawBoard() {
  boardCtx.fillStyle = "#090c12";
  boardCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
  boardCtx.strokeStyle = "#202838";
  boardCtx.lineWidth = 1;

  for (let x = 0; x <= COLS; x += 1) {
    boardCtx.beginPath();
    boardCtx.moveTo(x * BLOCK, 0);
    boardCtx.lineTo(x * BLOCK, ROWS * BLOCK);
    boardCtx.stroke();
  }

  for (let y = 0; y <= ROWS; y += 1) {
    boardCtx.beginPath();
    boardCtx.moveTo(0, y * BLOCK);
    boardCtx.lineTo(COLS * BLOCK, y * BLOCK);
    boardCtx.stroke();
  }

  grid.forEach((row, y) => {
    row.forEach((type, x) => {
      if (type) drawBlock(boardCtx, x * BLOCK, y * BLOCK, BLOCK, COLORS[type]);
    });
  });
}

function drawPiece(ctx, piece, blockSize, offsetX = 0, offsetY = 0) {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value) {
        drawBlock(
          ctx,
          (piece.x + x) * blockSize + offsetX,
          (piece.y + y) * blockSize + offsetY,
          blockSize,
          COLORS[piece.type],
        );
      }
    });
  });
}

function drawNext() {
  nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
  const width = nextPiece.shape[0].length * NEXT_BLOCK;
  const height = nextPiece.shape.length * NEXT_BLOCK;
  const previewPiece = { ...nextPiece, x: 0, y: 0 };
  drawPiece(
    nextCtx,
    previewPiece,
    NEXT_BLOCK,
    (nextCanvas.width - width) / 2,
    (nextCanvas.height - height) / 2,
  );
}

function draw() {
  drawBoard();
  drawPiece(boardCtx, active, BLOCK);
  drawNext();
}

function togglePause() {
  if (!running) return;
  paused = !paused;
  pauseBtn.textContent = paused ? "Resume" : "Pause";
  pauseBtn.classList.toggle("paused", paused);
}

startBtn.addEventListener("click", () => {
  cancelAnimationFrame(animationId);
  overlay.querySelector("h1").textContent = "Tetris";
  startBtn.textContent = "Start";
  resetGame();
  animationId = requestAnimationFrame(update);
});

pauseBtn.addEventListener("click", togglePause);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowDown") softDrop();
  if (event.key === "ArrowUp") rotateActive();
  if (event.code === "Space") {
    event.preventDefault();
    hardDrop();
  }
  if (event.key.toLowerCase() === "p") togglePause();
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "left") move(-1);
    if (action === "right") move(1);
    if (action === "rotate") rotateActive();
    if (action === "down") softDrop();
    if (action === "drop") hardDrop();
  });
});

grid = createGrid();
active = randomPiece();
nextPiece = randomPiece();
score = 0;
lines = 0;
level = 1;
updateStats();
draw();
