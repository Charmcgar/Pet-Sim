// Pet stats
let happiness = 100;
let hunger = 100;
let money = 0;
let food = 0; // Initialize food amount

// DOM elements
const happinessDisplay = document.getElementById('happiness');
const hungerDisplay = document.getElementById('hunger');
const moneyDisplay = document.getElementById('money');
const foodDisplay = document.getElementById('food'); // Add food display
const petImage = document.getElementById('pet-image');
const messageDiv = document.getElementById('message');

// Buttons
const feedBtn = document.getElementById('feed-btn');
const playBtn = document.getElementById('play-btn');
const cleanBtn = document.getElementById('clean-btn');

// Shop buttons
const buyBtns = document.querySelectorAll('.buy-btn');

// Update pet stats
function updateStats() {
  happinessDisplay.textContent = happiness;
  hungerDisplay.textContent = hunger;
  moneyDisplay.textContent = money;
  foodDisplay.textContent = food; // Update food display
  checkPetStatus();
}

// Check pet status and change image/message
function checkPetStatus() {
  if (happiness <= 0 || hunger <= 0) {
    petImage.src = 'assets/mad-cat.png';
    messageDiv.textContent = 'Your pet is sad! Take better care of it!';
  } else if (happiness >= 80 && hunger >= 80) {
    petImage.src = 'assets/happy-cat.png';
    messageDiv.textContent = 'Your pet is happy! Great job!';
  } else {
    petImage.src = 'assets/download.png';
    messageDiv.textContent = 'Your pet is doing okay.';
  }
}

// Event listeners for buttons
feedBtn.addEventListener('click', () => {
 
