// Function to change background color
document.getElementById("changeColorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});

// Counter for button clicks
let clickCount = 0;
let coolButton = document.getElementById("coolButton");
coolButton.textContent = `Very Cool Button`;

coolButton.addEventListener("click", function () {
    clickCount++;
    coolButton.textContent = `Button clicks: ${clickCount}`;
});

// Function to get a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
