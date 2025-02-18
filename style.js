// Pet stats
let happiness = 100;
let hunger = 100;

// DOM elements
const happinessDisplay = document.getElementById('happiness');
const hungerDisplay = document.getElementById('hunger');
const petImage = document.getElementById('pet-image');
const messageDiv = document.getElementById('message');

// Buttons
const feedBtn = document.getElementById('feed-btn');
const playBtn = document.getElementById('play-btn');
const cleanBtn = document.getElementById('clean-btn');

// Update pet stats
function updateStats() {
  happinessDisplay.textContent = happiness;
  hungerDisplay.textContent = hunger;
  checkPetStatus();
}

// Check pet status and change image/message
function checkPetStatus() {
  if (happiness <= 0 || hunger <= 0) {
    petImage.src = 'assets/pet-sad.png';
    messageDiv.textContent = 'Your pet is sad! Take better care of it!';
  } else if (happiness >= 80 && hunger >= 80) {
    petImage.src = 'assets/pet-happy.png';
    messageDiv.textContent = 'Your pet is happy! Great job!';
  } else {
    petImage.src = 'assets/download.png';
    messageDiv.textContent = 'Your pet is doing okay.';
  }
}

// Event listeners for buttons
feedBtn.addEventListener('click', () => {
  if (hunger < 100) {
    hunger += 10;
    updateStats();
  }
});

playBtn.addEventListener('click', () => {
  if (happiness < 100) {
    happiness += 10;
    updateStats();
  }
});

cleanBtn.addEventListener('click', () => {
  if (happiness < 100) {
    happiness += 5;
    updateStats();
  }
});

// Pet stats degrade over time
setInterval(() => {
  happiness -= 2;
  hunger -= 3;
  money += 100;
  if (happiness < 0) happiness = 0;
  if (hunger < 0) hunger = 0;
  updateStats();
}, 5000);

// Initial stats update
updateStats();
