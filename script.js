// --- Balloon Pop Game ---
const balloonContainer = document.getElementById('balloon-container');

// Function to create a single balloon
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 90}%`;
    balloon.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration for a more natural look
    balloonContainer.appendChild(balloon);
    
    // Remove the balloon after it "floats away" to prevent clutter
    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

// Create a new balloon every 1.5 seconds
setInterval(createBalloon, 1500);

// Add click listener to pop balloons
balloonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('balloon')) {
        event.target.style.display = 'none';
        
        // Play a popping sound
        const popSound = new Audio('happy-birthday-401919.mp3'); 
        popSound.play();
    }
});

// --- Love Meter ---
const loveMeterBtn = document.getElementById('love-meter-btn');
const loveScoreDiv = document.getElementById('love-score');

loveMeterBtn.addEventListener('click', () => {
    // Generate a super high number for the love score
    const score = Math.floor(Math.random() * (1000 - 999)) + 999;
    loveScoreDiv.textContent = `Our love score is... ${score}%! ❤️❤️❤️`;
});

// --- Secret Message ---
const secretMessageDiv = document.getElementById('secret-message');
const shakeButton = document.getElementById('shake-button');

// Check if the device supports accelerometer for shaking
if ('DeviceMotionEvent' in window) {
    window.addEventListener('devicemotion', (event) => {
        const acceleration = event.accelerationIncludingGravity;
        const totalForce = Math.sqrt(
            acceleration.x ** 2 +
            acceleration.y ** 2 +
            acceleration.z ** 2
        );

        // A simple threshold to detect a "shake"
        if (totalForce > 20) {
            secretMessageDiv.textContent = 'You are the most amazing person I have ever met! Happy Birthday!';
            secretMessageDiv.style.color = '#e91e63';
        }
    });
} else {
    // If accelerometer isn't supported (e.g., on a desktop), show a button instead
    shakeButton.style.display = 'inline-block';
    shakeButton.addEventListener('click', () => {
        secretMessageDiv.textContent = 'You are the most amazing person I have ever met! Happy Birthday!';
        secretMessageDiv.style.color = '#e91e63';
    });
}
// --- Game 1: Click the Heart ---
const heartButton = document.getElementById('heart-button');
const clickCountSpan = document.getElementById('click-count');
let clickCount = 0;
let timeRemaining = 10;
let isGameActive = false;

heartButton.addEventListener('click', () => {
    if (!isGameActive) {
        isGameActive = true;
        let timer = setInterval(() => {
            timeRemaining--;
            if (timeRemaining <= 0) {
                clearInterval(timer);
                isGameActive = false;
                alert(`Time's up! You clicked ${clickCount} times!`);
                clickCount = 0;
                timeRemaining = 10;
                clickCountSpan.textContent = clickCount;
            }
        }, 1000);
    }
    clickCount++;
    clickCountSpan.textContent = clickCount;
});


// --- Game 3: Fortune Cookie ---
const cookieButton = document.getElementById('cookie-button');
const fortuneMessage = document.getElementById('fortune-message');
const fortunes = [
    "You will be showered with love and kisses today.",
    "Your future is filled with joy and laughter.",
    "Someone close to you has a special surprise in store.",
    "A wonderful adventure is about to begin for you."
];

cookieButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneMessage.textContent = fortunes[randomIndex];
});