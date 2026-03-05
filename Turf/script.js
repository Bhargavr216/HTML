const STORAGE_KEY = "turf-cricket-pulse";
const hasStorage = typeof localStorage !== "undefined";

const state = {
  runs: 0,
  wickets: 0,
  balls: 0,
  log: [],
  teams: [],
  matches: [],
  positions: {
    striker: "",
    nonStriker: "",
    bowler: "",
    incomingBatter: "",
    nextBowler: "",
    battingTeam: "",
    opponentTeam: "",
  },
};

const history = [];
let statusTimeout;

const runsEl = document.getElementById("runs");
const wicketsEl = document.getElementById("wickets");
const oversEl = document.getElementById("overs");
const ballsEl = document.getElementById("balls");
const logEl = document.getElementById("actionLog");
const tossResultEl = document.getElementById("tossResult");
const teamListEl = document.getElementById("teamList");
const matchCardsEl = document.getElementById("matchCards");
const teamSelectEl = document.getElementById("teamSelect");
const strikerSelect = document.getElementById("strikerSelect");
const nonStrikerSelect = document.getElementById("nonStrikerSelect");
const bowlerSelect = document.getElementById("bowlerSelect");
const incomingSelect = document.getElementById("incomingSelect");
const nextBowlerSelect = document.getElementById("nextBowlerSelect");
const battingTeamInput = document.getElementById("battingTeam");
const opponentTeamInput = document.getElementById("opponentTeam");
const teamSummaryEl = document.getElementById("teamSummary");
const heroBatNameEl = document.getElementById("heroBatName");
const heroOppNameEl = document.getElementById("heroOppName");
const statusEl = document.getElementById("statusMessage");
const undoBtn = document.getElementById("undoBtn");

const positionSelects = [
  { element: strikerSelect, key: "striker" },
  { element: nonStrikerSelect, key: "nonStriker" },
  { element: bowlerSelect, key: "bowler" },
  { element: incomingSelect, key: "incomingBatter" },
  { element: nextBowlerSelect, key: "nextBowler" },
];

const playerPositionKeys = [
  "striker",
  "nonStriker",
  "bowler",
  "incomingBatter",
  "nextBowler",
];

function createActionButton(label, extraClass, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `ghost-btn ${extraClass}`.trim();
  button.textContent = label;
  button.addEventListener("click", handler);
  return button;
}

function cleanupPlayerPositions(playerName) {
  if (!playerName) return;
  playerPositionKeys.forEach((key) => {
    if (state.positions[key] === playerName) {
      state.positions[key] = "";
    }
  });
}

function cleanupTeamPositions(teamName, players = []) {
  if (!teamName) return;
  if (state.positions.battingTeam === teamName) {
    state.positions.battingTeam = "";
  }
  if (state.positions.opponentTeam === teamName) {
    state.positions.opponentTeam = "";
  }
  players.forEach((player) => cleanupPlayerPositions(player));
}

function showStatus(message) {
  if (!statusEl) return;
  statusEl.textContent = message;
  clearTimeout(statusTimeout);
  statusTimeout = setTimeout(() => {
    statusEl.textContent = "";
  }, 3200);
}

function persistState() {
  if (!hasStorage) return;
  try {
    const payload = {
      runs: state.runs,
      wickets: state.wickets,
      balls: state.balls,
      log: state.log,
      teams: state.teams,
      matches: state.matches,
      positions: state.positions,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("Unable to persist Turf Cricket Pulse state", error);
  }
}

function loadState() {
  if (!hasStorage) return;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    state.runs = parsed.runs ?? state.runs;
    state.wickets = parsed.wickets ?? state.wickets;
    state.balls = parsed.balls ?? state.balls;
    state.log = Array.isArray(parsed.log) ? parsed.log : state.log;
    state.teams = Array.isArray(parsed.teams) ? parsed.teams : state.teams;
    state.matches = Array.isArray(parsed.matches) ? parsed.matches : state.matches;
    state.positions = {
      ...state.positions,
      ...(parsed.positions || {}),
    };
  } catch (error) {
    console.warn("Failed to restore saved score", error);
  }
}

function captureHistory() {
  history.push({
    runs: state.runs,
    wickets: state.wickets,
    balls: state.balls,
    log: [...state.log],
  });
  if (history.length > 25) {
    history.shift();
  }
}

function formatOvers(balls) {
  const completedOvers = Math.floor(balls / 6);
  const remainder = balls % 6;
  return `${completedOvers}.${remainder}`;
}

function pushLog(entry) {
  state.log.unshift(entry);
  state.log = state.log.slice(0, 25);
  renderLog();
  persistState();
}

function renderLog() {
  if (!logEl) return;
  logEl.innerHTML = "";
  state.log.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    logEl.appendChild(li);
  });
}

function updateScore() {
  runsEl.textContent = state.runs;
  wicketsEl.textContent = state.wickets;
  oversEl.textContent = formatOvers(state.balls);
  ballsEl.textContent = state.balls;
}

function incrementBall() {
  state.balls += 1;
  pushLog(`Ball ${state.balls}: ${state.runs} / ${state.wickets}`);
}

function handleAction(type, value) {
  if (type === "wicket") {
    if (!state.positions.incomingBatter) {
      showStatus("Select the incoming batter before logging a wicket.");
      return;
    }
    if (!state.positions.nextBowler) {
      showStatus("Select the incoming bowler before logging a wicket.");
      return;
    }
  }

  captureHistory();
  value = Number(value);

  if (type === "run") {
    state.runs += value;
    incrementBall();
    pushLog(`+${value} run${value > 1 ? "s" : ""}`);
  } else if (type === "wicket") {
    state.wickets += 1;
    incrementBall();
    pushLog("Wicket!");

    state.positions.striker = state.positions.incomingBatter;
    state.positions.incomingBatter = "";
    state.positions.bowler = state.positions.nextBowler;
    state.positions.nextBowler = "";
    updatePlayerDropdowns();
    showStatus("Wicket logged; incoming player and bowler rotated in.");
  } else if (type === "extra") {
    state.runs += value;
    pushLog(`Extra +${value}`);
  } else if (type === "ball") {
    incrementBall();
    pushLog("Dot ball");
  }

  updateScore();
  persistState();
}

function initActionButtons() {
  document.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      const value = btn.dataset.value;
      handleAction(action, value);
    });
  });
}

function handleManualForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const runs = Number(formData.get("runs") || 0);
  const note = formData.get("note").trim();
  if (!runs && !note) {
    return;
  }

  captureHistory();

  if (runs) {
    state.runs += runs;
  }
  incrementBall();
  const noteDetail = note ? ` · ${note}` : "";
  pushLog(`Manual ball: ${runs} run${runs !== 1 ? "s" : ""}${noteDetail}`);
  updateScore();
  event.target.reset();
  persistState();
}

function handleToss() {
  const result = Math.random() > 0.5 ? "Head" : "Tail";
  tossResultEl.textContent = `${result} wins the toss`;
  pushLog(`Toss: ${result}`);
}

function getAllPlayerOptions() {
  return state.teams.flatMap((team) =>
    team.players.map((playerName) => ({
      name: playerName,
      label: `${playerName} — ${team.name}`,
    }))
  );
}

function updatePlayerDropdowns() {
  const players = getAllPlayerOptions();

  positionSelects.forEach(({ element, key }) => {
    if (!element) return;
    element.innerHTML = "";
    if (!players.length) {
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.disabled = true;
      placeholder.selected = true;
      placeholder.hidden = true;
      placeholder.textContent = "Add players first";
      element.appendChild(placeholder);
      element.disabled = true;
      state.positions[key] = "";
      return;
    }

    element.disabled = false;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.hidden = true;
    placeholder.textContent = "Select player";
    element.appendChild(placeholder);

    players.forEach((player) => {
      const option = document.createElement("option");
      option.value = player.name;
      option.textContent = player.label;
      element.appendChild(option);
    });

    const savedValue = state.positions[key];
    if (savedValue && players.some((player) => player.name === savedValue)) {
      element.value = savedValue;
    } else {
      element.value = "";
      state.positions[key] = "";
    }
  });

  persistState();
}

function renderTeamSummary() {
  const { battingTeam, opponentTeam } = state.positions;
  const battingLabel = battingTeam || "Batting team";
  const opponentLabel = opponentTeam || "Opposition";
  if (heroBatNameEl) {
    heroBatNameEl.textContent = battingLabel;
  }
  if (heroOppNameEl) {
    heroOppNameEl.textContent = opponentLabel;
  }
  if (battingTeam || opponentTeam) {
    teamSummaryEl.textContent = `${battingLabel} vs ${opponentLabel}`;
  } else {
    teamSummaryEl.textContent =
      "Set the batting and opponent names to keep the match context on top.";
  }
}

function renderTeams() {
  teamListEl.innerHTML = "";
  teamSelectEl.innerHTML =
    '<option value="" disabled selected>Select team</option>';

  state.teams.forEach((team) => {
    const card = document.createElement("div");
    card.className = "team-card";
    const head = document.createElement("div");
    head.className = "team-card-head";
    const heading = document.createElement("h3");
    heading.textContent = team.name;
    const actions = document.createElement("div");
    actions.append(
      createActionButton("Rename", "ghost-small", () => editTeamName(team.name)),
      createActionButton("Remove", "ghost-small", () => removeTeam(team.name))
    );
    head.appendChild(heading);
    head.appendChild(actions);
    card.appendChild(head);

    if (team.players.length) {
      const list = document.createElement("ul");
      team.players.forEach((player) => {
        const li = document.createElement("li");
        const title = document.createElement("span");
        title.textContent = player;
        const playerActions = document.createElement("div");
        playerActions.className = "player-actions";
        playerActions.append(
          createActionButton(
            "Edit",
            "ghost-small",
            () => editPlayerName(team.name, player)
          ),
          createActionButton(
            "Remove",
            "ghost-small",
            () => removePlayer(team.name, player)
          )
        );
        li.appendChild(title);
        li.appendChild(playerActions);
        list.appendChild(li);
      });
      card.appendChild(list);
    } else {
      const p = document.createElement("p");
      p.textContent = "No players yet";
      card.appendChild(p);
    }

    teamListEl.appendChild(card);

    const option = document.createElement("option");
    option.value = team.name;
    option.textContent = team.name;
    teamSelectEl.appendChild(option);
  });

  updatePlayerDropdowns();
}

function handleTeamForm(event) {
  event.preventDefault();
  const name = event.target.teamName.value.trim();
  if (!name) return;
  if (state.teams.some((team) => team.name === name)) {
    pushLog(`Team "${name}" already exists`);
    return;
  }
  state.teams.push({ name, players: [] });
  event.target.reset();
  renderTeams();
  pushLog(`Team added: ${name}`);
  persistState();
}

function editTeamName(oldName) {
  const team = state.teams.find((t) => t.name === oldName);
  if (!team) return;
  const newName = prompt("Rename team", oldName)?.trim();
  if (!newName || newName === oldName) return;
  if (state.teams.some((t) => t.name === newName)) {
    showStatus("Team name already exists");
    return;
  }
  team.name = newName;
  if (state.positions.battingTeam === oldName) {
    state.positions.battingTeam = newName;
  }
  if (state.positions.opponentTeam === oldName) {
    state.positions.opponentTeam = newName;
  }
  renderTeamSummary();
  renderTeams();
  pushLog(`Team renamed to ${newName}`);
  persistState();
}

function removeTeam(teamName) {
  const team = state.teams.find((t) => t.name === teamName);
  if (!team) return;
  if (!confirm(`Remove ${teamName} and all its players?`)) return;
  cleanupTeamPositions(teamName, team.players);
  state.teams = state.teams.filter((t) => t.name !== teamName);
  renderTeamSummary();
  renderTeams();
  pushLog(`Team removed: ${teamName}`);
  persistState();
}

function editPlayerName(teamName, playerName) {
  const team = state.teams.find((t) => t.name === teamName);
  if (!team) return;
  const newName = prompt("Rename player", playerName)?.trim();
  if (!newName || newName === playerName) return;
  if (team.players.some((player) => player === newName)) {
    showStatus("Player already exists on this team");
    return;
  }
  team.players = team.players.map((player) =>
    player === playerName ? newName : player
  );
  playerPositionKeys.forEach((key) => {
    if (state.positions[key] === playerName) {
      state.positions[key] = newName;
    }
  });
  renderTeams();
  pushLog(`Player renamed: ${playerName} → ${newName}`);
  persistState();
}

function removePlayer(teamName, playerName) {
  const team = state.teams.find((t) => t.name === teamName);
  if (!team) return;
  if (!confirm(`Remove ${playerName} from ${teamName}?`)) return;
  team.players = team.players.filter((player) => player !== playerName);
  cleanupPlayerPositions(playerName);
  renderTeams();
  pushLog(`Player removed: ${playerName}`);
  persistState();
}

function handlePlayerForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const teamName = formData.get("team");
  const player = formData.get("playerName").trim();
  if (!teamName || !player) return;
  const team = state.teams.find((t) => t.name === teamName);
  if (!team) {
    pushLog("Pick a team first.");
    return;
  }
  team.players.push(player);
  event.target.reset();
  renderTeams();
  pushLog(`Player ${player} added to ${teamName}`);
  persistState();
}

function handleMatchForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const opponent = formData.get("opponent").trim();
  const format = formData.get("format").trim();
  const date = formData.get("date");
  if (!opponent || !format || !date) return;
  state.matches.unshift({ opponent, format, date });
  event.target.reset();
  renderMatches();
  pushLog(`Match vs ${opponent} (${format}) on ${date}`);
  persistState();
}

function formatMatchDate(date) {
  if (!date) return "";
  const d = new Date(`${date}T00:00:00`);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function renderMatches() {
  matchCardsEl.innerHTML = "";
  state.matches.forEach((match) => {
    const card = document.createElement("div");
    card.className = "match-card";
    const title = document.createElement("h4");
    title.textContent = `vs ${match.opponent}`;
    const detail = document.createElement("span");
    detail.textContent = `${match.format} · ${formatMatchDate(match.date)}`;
    card.appendChild(title);
    card.appendChild(detail);
    matchCardsEl.appendChild(card);
  });
}

function handleUndo() {
  if (!history.length) {
    showStatus("Nothing to undo");
    return;
  }
  const snapshot = history.pop();
  state.runs = snapshot.runs;
  state.wickets = snapshot.wickets;
  state.balls = snapshot.balls;
  state.log = [...snapshot.log];
  renderLog();
  updateScore();
  persistState();
  showStatus("Last scoring action reverted");
}

loadState();
battingTeamInput.value = state.positions.battingTeam;
opponentTeamInput.value = state.positions.opponentTeam;
renderTeamSummary();

renderTeams();
renderMatches();
renderLog();
updateScore();
initActionButtons();

document
  .getElementById("manualBall")
  .addEventListener("submit", handleManualForm);
document
  .getElementById("teamForm")
  .addEventListener("submit", handleTeamForm);
document
  .getElementById("playerForm")
  .addEventListener("submit", handlePlayerForm);
document
  .getElementById("matchForm")
  .addEventListener("submit", handleMatchForm);
document.getElementById("tossBtn").addEventListener("click", handleToss);
undoBtn?.addEventListener("click", handleUndo);

positionSelects.forEach(({ element, key }) => {
  if (!element) return;
  element.addEventListener("change", (event) => {
    state.positions[key] = event.target.value;
    persistState();
  });
});

battingTeamInput.addEventListener("input", (event) => {
  state.positions.battingTeam = event.target.value;
  renderTeamSummary();
  persistState();
});

opponentTeamInput.addEventListener("input", (event) => {
  state.positions.opponentTeam = event.target.value;
  renderTeamSummary();
  persistState();
});
