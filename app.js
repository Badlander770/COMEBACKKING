// Motivation Quotes
const motivations = [
    "You are stronger than you think.",
    "One day at a time, one step at a time.",
    "Don't stop now, you're closer than you think.",
    "Every setback is a setup for a comeback.",
    "Push yourself because no one else is going to do it for you."
];

let currentMotivationIndex = 0;

function showMotivation() {
    const motivationDisplay = document.getElementById("motivationDisplay");
    motivationDisplay.textContent = motivations[currentMotivationIndex];
    currentMotivationIndex = (currentMotivationIndex + 1) % motivations.length;
}

// Change motivation every 10 seconds
setInterval(showMotivation, 10000);
showMotivation();  // Show the first quote immediately

// Adding Daily Checklist
const addChecklistButton = document.getElementById("addChecklistButton");
const checklistSection = document.getElementById("checklist");
const checklistInput = document.getElementById("checklistInput");

addChecklistButton.addEventListener("click", () => {
    if (checklistInput.value.trim() !== "") {
        const checklistItem = document.createElement("div");
        checklistItem.classList.add("checklist-item");
        checklistItem.innerHTML = `
            <input type="checkbox" class="check-item">
            <span>${checklistInput.value}</span>
        `;
        checklistSection.appendChild(checklistItem);
        checklistInput.value = ""; // Clear input
    }
});

// Start Button functionality
document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("checklist-section").classList.remove("hidden");
});

// Resetting streak button functionality
document.getElementById("resetButton").addEventListener("click", () => {
    // Reset logic for the streak
    document.getElementById("progressFill").style.width = "0%";
    document.getElementById("streakMessage").innerHTML = "You have completed <strong>0</strong> days clean!";
});

