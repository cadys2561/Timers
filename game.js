const player = document.getElementById("player");
const playArea = document.getElementById("play-area");
const ground = document.getElementById("ground");

let score = 0;

// Function to create and generate falling mushrooms 🍄
function createFallingObject() {
    const mushroom = document.createElement("div");
    mushroom.classList.add("falling-object");
    mushroom.innerText = "🍄"; // Mushroom emoji

    // Random horizontal position for each mushroom
    mushroom.style.left = Math.random() * (playArea.clientWidth - 30) + "px";
    mushroom.style.top = "0px"; // Start from the top
    playArea.appendChild(mushroom);

    let objectPosition = 0; // Starting position for falling object
    const fallInterval = setInterval(() => {
        objectPosition += 5; // Speed of falling

        // Move the falling mushroom downwards
        mushroom.style.top = objectPosition + "px";

        // Check if the mushroom reaches the player or the ground
        if (
            objectPosition >= playArea.clientHeight - player.offsetHeight - 10 && // Player collision
            mushroom.offsetLeft + mushroom.offsetWidth > player.offsetLeft &&
            mushroom.offsetLeft < player.offsetLeft + player.offsetWidth
        ) {
            score++;  // Increase score when the mushroom is caught
            document.getElementById("score").innerText = "Score: " + score; // Log the score in the console
            mushroom.remove(); // Remove mushroom from screen
            clearInterval(fallInterval);
        }

        // Check if the mushroom touches the ground
        if (objectPosition >= playArea.clientHeight - ground.offsetHeight) {
            mushroom.remove(); // Remove mushroom when it reaches the ground
            clearInterval(fallInterval);
        }
    }, 30); // Adjust this for faster/slower falling
}

// Move player (basket) with arrow keys
document.addEventListener("keydown", (event) => {
    const playerLeft = player.offsetLeft;
    const playerWidth = player.offsetWidth;

    if (event.key === "ArrowLeft" && playerLeft > 0) {
        player.style.left = playerLeft - 10 + "px";
    } else if (event.key === "ArrowRight" && playerLeft < playArea.clientWidth - playerWidth) {
        player.style.left = playerLeft + 10 + "px";
    }
});

// Create a new falling mushroom every 2 seconds
setInterval(createFallingObject, 2000);
