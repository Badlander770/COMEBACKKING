// DOM elements
const startButton = document.getElementById("startButton");
const checklistItems = document.querySelectorAll(".check-item");
const progressFill = document.getElementById("progressFill");
const streakMessage = document.getElementById("streakMessage");
const updateButton = document.getElementById("updateButton");
const resetButton = document.getElementById("resetButton");
const checklistSection = document.getElementById("checklist-section");

// Load streak data from localStorage
let streak = localStorage.getItem("streak") ? parseInt(localStorage.getItem("streak")) : 0;
updateStreak();

// Start button functionality
startButton.addEventListener("click", () => {
    startButton.classList.add("hidden");
    checklistSection.classList.remove("hidden");
});

// Update progress when the checklist is updated
updateButton.addEventListener("click", () => {
    const completed = Array.from(checklistItems).filter(item => item.checked).length;
    const total = checklistItems.length;
    const progress = (completed / total) * 100;

    // Update progress bar
    progressFill.style.width = `${progress}%`;

    // Update streak if all tasks are done
    if (completed === total) {
        streak += 1;
        localStorage.setItem("streak", streak);
        streakMessage.innerHTML = `You have completed <strong>${streak}</strong> days clean!`;
    }
});

// Reset streak button
resetButton.addEventListener("click", () => {
    streak = 0;
    localStorage.setItem("streak", streak);
    streakMessage.innerHTML = `You have completed <strong>${streak}</strong> days clean!`;
    progressFill.style.width = "0%";
});

// Update streak on load
function updateStreak() {
    streakMessage.innerHTML = `You have completed <strong>${streak}</strong> days clean!`;
}
