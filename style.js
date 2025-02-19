// Pet stats
let happiness = 100;
let hunger = 100;
let money = 10;
let food = 5; // Initialize food amount

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
    messageDiv.textContent = 'Your pet is miserable! Take better care of it you imbecile!';
    reload();
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
  if (food > 0) {
    hunger += 10;
    food -= 1;
    if (hunger > 100) hunger = 100;
    updateStats();
  } else {
    messageDiv.textContent = "You don't have enough food!";
  }
});

playBtn.addEventListener('click', () => {
  if (happiness < 100) {
    happiness += 10;
    updateStats();
  }
});

let canClean = true;
cleanBtn.addEventListener('click', () => {
  if (canClean) {
    money += 1;
    updateStats();
    canClean = false;
    setTimeout(() => {
      canClean = true;
    }, 10000);
    messageDiv.textContent = "HOLY, I SHAT MY SELF!";
  } else {
    messageDiv.textContent = "WAIT!! Im sharting myself!";
  }
});

// Event listeners for shop buttons
buyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.getAttribute('data-item');
    const price = parseInt(btn.getAttribute('data-price'));

    if (money >= price) {
      money -= price;
      if (item === '+food') {
        food += 5; // Add food when bought
        messageDiv.textContent = "You bought 5 units of food!";
      } else if (item === 'toy') {
        happiness += 20;
        if (happiness > 100) happiness = 100;
        messageDiv.textContent = "You bought a toy!";
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
  hunger -= 2;
  if (happiness < 0) happiness = 0;
  if (hunger < 0) hunger = 0;
  updateStats();
}, 5000);

// Initial stats update
updateStats();
