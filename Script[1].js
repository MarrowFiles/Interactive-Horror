let player = {
  name: "",
  age: "",
  fear: ""
};

const textEl = document.getElementById("text");
const choicesEl = document.getElementById("choices");
const imageEl = document.getElementById("scene-image");

function startGame() {
  textEl.innerHTML = "What's your name?";
  choicesEl.innerHTML = `
    <input id="nameInput" placeholder="Your Name" />
    <button onclick="askAge()">Next</button>
  `;
}

function askAge() {
  player.name = document.getElementById("nameInput").value || "Unknown";
  textEl.innerHTML = `How old are you, ${player.name}?`;
  choicesEl.innerHTML = `
    <input id="ageInput" placeholder="Your Age" />
    <button onclick="askFear()">Next</button>
  `;
}

function askFear() {
  player.age = document.getElementById("ageInput").value || "??";
  textEl.innerHTML = `What do you fear the most, ${player.name}?`;
  choicesEl.innerHTML = `
    <input id="fearInput" placeholder="Clowns? Darkness? Death?" />
    <button onclick="startStory()">Start Story</button>
  `;
}

function startStory() {
  player.fear = document.getElementById("fearInput").value || "your past";

  textEl.innerHTML = `
    ${player.name}, age ${player.age}, wakes up in a dark room...<br><br>
    Their hands are stained with blood.<br>
    The body lies cold beside them.<br><br>
    A whisper echoes:<br>
    <em>"${player.name}... you did this. You must face your fear: ${player.fear}."</em>
  `;
  choicesEl.innerHTML = `
    <button onclick="choice1()">Cover the body</button>
    <button onclick="choice2()">Run into the dark</button>
  `;
}

function choice1() {
  imageEl.src = "assets/blood.jpg";
  textEl.innerHTML = `
    You cover the body, but the guilt crawls in.<br><br>
    The lights flicker. A scream — your own fear of ${player.fear} — rises behind you...
  `;
  document.getElementById("bg-sound").src = "assets/scream.mp3";
  choicesEl.innerHTML = `
    <button onclick="end1()">Hide</button>
    <button onclick="end2()">Face it</button>
  `;
}

function choice2() {
  imageEl.src = "assets/blood.jpg";
  textEl.innerHTML = `
    You run. But the darkness whispers your name:<br><br>
    <em>"${player.name}... murderer."</em><br>
    You stumble into a mirror — and see your victim staring back.
  `;
  choicesEl.innerHTML = `
    <button onclick="end2()">Break the mirror</button>
    <button onclick="end1()">Scream</button>
  `;
}

function end1() {
  textEl.innerHTML = `You scream. But no one hears. The fear of ${player.fear} becomes your prison.`;
  choicesEl.innerHTML = `<button onclick="startGame()">Play Again</button>`;
}

function end2() {
  textEl.innerHTML = `You stare into the darkness and accept what you've done. The fear fades. But the blood never washes off.`;
  choicesEl.innerHTML = `<button onclick="startGame()">Play Again</button>`;
}

startGame();

