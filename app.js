const startButton = document.getElementById('startButton');
const checklistSection = document.getElementById('checklist-section');
const streakSection = document.getElementById('streak-section');
const updateButton = document.getElementById('updateButton');
const resetButton = document.getElementById('resetButton');
const progressFill = document.getElementById('progressFill');
const streakMessage = document.getElementById('streakMessage');
const quoteText = document.getElementById('quoteText');
let streakCount = 0;

// Show the checklist section when the user starts their journey
startButton.addEventListener('click', () => {
    checklistSection.classList.remove('hidden'); // Unhide the checklist section
    startButton.classList.add('hidden'); // Hide the start button
    streakSection.classList.remove('hidden'); // Unhide the streak section
});

// Update progress on checklist completion
updateButton.addEventListener('click', () => {
    const checkItems = document.querySelectorAll('.check-item');
    let completed = 0;

    checkItems.forEach(item => {
        if (item.checked) {
            completed++; // Increment if the checkbox is checked
        }
    });

    // Update the progress bar based on how many tasks are completed
    const percentage = (completed / checkItems.length) * 100;
    progressFill.style.width = `${percentage}%`;

    if (completed === checkItems.length) {
        streakCount++; // Increment streak count when all tasks are completed
        streakMessage.innerHTML = `You have completed <strong>${streakCount}</strong> days clean!`;
    }
});

// Reset streak
resetButton.addEventListener('click', () => {
    streakCount = 0; // Reset streak count
    progressFill.style.width = '0%'; // Reset the progress bar
    streakMessage.innerHTML = `You have completed <strong>${streakCount}</strong> days clean!`; // Reset message
});

// Random motivational quotes
const quotes = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams."
];

// Display a new random quote every 5 seconds
setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}, 5000);
