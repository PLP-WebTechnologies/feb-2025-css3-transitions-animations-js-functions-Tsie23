// Function to save a preference in localStorage
function savePreference(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value)); // Convert value to string before storing
    } catch (error) {
        console.error("Error saving preference:", error);
    }
}

// Function to retrieve a saved preference from localStorage
function getPreference(key) {
    try {
        return JSON.parse(localStorage.getItem(key)); // Convert stored string back to original format
    } catch (error) {
        console.error("Error retrieving preference:", error);
        return null;
    }
}

// Function to update the displayed theme on the page
function updateThemeDisplay() {
    const themeDisplay = document.getElementById("theme-display");
    if (themeDisplay) {
        let savedTheme = getPreference("theme") || "None"; // Default value if not found
        themeDisplay.textContent = "Saved Theme: " + savedTheme; // Update UI
    } else {
        console.warn("Theme display element not found.");
    }
}

// Event listener for saving theme preference
const themeButton = document.getElementById("theme-button");
if (themeButton) {
    themeButton.addEventListener("click", function () {
        savePreference("theme", "dark"); // Store preference
        updateThemeDisplay(); // Refresh displayed theme
    });
} else {
    console.warn("Theme button element not found.");
}

// Event listener for animating the box
const animateButton = document.getElementById("animate-button");
if (animateButton) {
    animateButton.addEventListener("click", function () {
        const box = document.getElementById("animated-box");
        if (box) {
            box.style.animation = "bounce 1s ease-in-out"; // Apply bounce animation
            box.textContent = "Bouncing!"; // Add temporary text effect

            // Reset animation and clear text after animation ends
            setTimeout(() => {
                box.style.animation = ""; // Reset animation
                box.textContent = ""; // Clear text
            }, 1000);
        } else {
            console.warn("Animated box element not found.");
        }
    });
} else {
    console.warn("I'm Next button element not found.");
}

// Event listener for changing the heading text and color
const changeHeadingButton = document.getElementById("change-heading-button");
if (changeHeadingButton) {
    changeHeadingButton.addEventListener("click", function () {
        const heading = document.getElementById("main-heading");
        if (heading) {
            heading.textContent = "Hello, let's have some JS fun! Click the next button"; // Update text
            heading.style.color = "green"; // Change font color to green
        } else {
            console.warn("Main heading element not found.");
        }
    });
} else {
    console.warn("Change Heading button element not found.");
}

// Event listener for changing the background color of the box
animateButton.addEventListener("click", function () {
    const box = document.getElementById("animated-box");
    box.classList.add("bounce-effect"); // Add temporary effect
    setTimeout(() => {
        box.classList.remove("bounce-effect"); // Remove effect after animation
    }, 1000);
});

// Event listener for resetting the heading text and color
const resetHeadingButton = document.getElementById("reset-heading-button");
if (resetHeadingButton) {
    resetHeadingButton.addEventListener("click", function () {
        const heading = document.getElementById("main-heading");
        if (heading) {
            heading.textContent = "Interactive Animation"; // Reset text
            heading.style.color = "#2c3e50"; // Reset font color to default
        } else {
            console.warn("Main heading element not found.");
        }
    });
} else {
    console.warn("Reset Heading button element not found.");
}

// Call update function when the page loads to display saved theme
updateThemeDisplay();