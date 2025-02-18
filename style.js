// Constants
const MAX_STAT = 100;
const MIN_STAT = 0;
const FEED_INCREMENT = 10;
const PLAY_INCREMENT = 10;
const CLEAN_INCREMENT = 5;
const HAPPINESS_DECREMENT = 2;
const HUNGER_DECREMENT = 3;
const UPDATE_INTERVAL = 5000; // 5 seconds
const PET_IMAGES = {
  SAD: 'assets/pet-sad.png',
  HAPPY: 'assets/pet-happy.png',
  OKAY: 'assets/download.png'
};
const PET_MESSAGES = {
  SAD: 'Your pet is sad! Take better care of it!',
  HAPPY: 'Your pet is happy! Great job!',
  OKAY: 'Your pet is doing okay.'
};

// Pet stats
let happiness = MAX_STAT;
let hunger = MAX_STAT;

// DOM elements
const petImage = document.getElementById('pet-image');
const happinessDisplay = document.getElementById('happiness');
const hungerDisplay = document.getElementById('hunger');
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
  if (happiness <= MIN_STAT || hunger <= MIN_STAT) {
    petImage.src = PET_IMAGES.SAD;
    messageDiv.textContent = PET_MESSAGES.SAD;
  } else if (happiness >= 80 && hunger >= 80) {
    petImage.src = PET_IMAGES.HAPPY;
    messageDiv.textContent = PET_MESSAGES.HAPPY;
  } else {
    petImage.src = PET_IMAGES.OKAY;
    messageDiv.textContent = PET_MESSAGES.OKAY;
  }
}

// Helper function to update and cap stats
function updateStat(stat, increment) {
  stat += increment;
  return Math.min(stat, MAX_STAT);
}

// Feed the pet
feedBtn.addEventListener('click', () => {
  if (hunger < MAX_STAT) {
    hunger = updateStat(hunger, FEED_INCREMENT);
    updateStats();
  }
});

// Play with the pet
playBtn.addEventListener('click', () => {
  if (happiness < MAX_STAT) {
    happiness = updateStat(happiness, PLAY_INCREMENT);
    updateStats();
  }
});

// Clean the pet
cleanBtn.addEventListener('click', () => {
  if (happiness < MAX_STAT) {
    happiness = updateStat(happiness, CLEAN_INCREMENT);
    updateStats();
  }
});

// Pet stats degrade over time
setInterval(() => {
  console.log('Interval running'); // Debugging line
  happiness = Math.max(happiness - HAPPINESS_DECREMENT, MIN_STAT);
  hunger = Math.max(hunger - HUNGER_DECREMENT, MIN_STAT);
  updateStats();
}, UPDATE_INTERVAL);

// Initial stats update
updateStats();
