// Pet stats
let happiness = 100;
let hunger = 100;
let money = 0;

// DOM elements
const happinessDisplay = document.getElementById('happiness');
const hungerDisplay = document.getElementById('hunger');
const moneyDisplay = document.getElementById('money');
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
  if (hunger < 100) {
    hunger += 10;
    money -= 2;
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
  money += 1;
  updateStats();
});

// Event listeners for shop buttons
buyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.getAttribute('data-item');
    const price = parseInt(btn.getAttribute('data-price'));

    if (money >= price) {
      money -= price;
      if (item === '+food') {
        hunger += 20;
        if (hunger > 100) hunger = 100;
      } else if (item === 'toy') {
        happiness += 20;
        if (happiness > 100) happiness = 100;
      }
      updateStats();
    } else {
      messageDiv.textContent = "You don't have enough money!";
    }
  });
});

// Pet stats degrade over time
setInterval(() => {
  happiness -= 2;
  hunger -= 3;
  if (happiness < 0) happiness = 0;
  if (hunger < 0) hunger = 0;
  updateStats();
}, 5000);

// Initial stats update
updateStats();
