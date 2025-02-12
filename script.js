if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker registered"));
}

let timerInterval;

function startTimer(minutes) {
    let timeLeft = minutes * 60;
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById("timer").textContent = `Time left: ${min}:${sec < 10 ? "0" : ""}${sec}`;
        
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").textContent = "Egg is ready!";
        }
        timeLeft--;
    }, 1000);
}


document.addEventListener("DOMContentLoaded", function () {
    // Calculate how many days have passed since 28.4.2024
    const startDate = new Date("2024-04-28");
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("days-count").innerText = diffDays;

    // Display a greeting based on the time of the day
    const hours = today.getHours();

    const morning_greetings = [
        "Dobré ránko má lásko! ❤️",
        "Přeji ti krásný den plný úsměvu, radosti a štěstí 😊",
        "Koukám, že moje sluníčko už vyšlo 💖",
        "Každé ráno, které se usměješ udělá celý den úžasným 🥰",
        "Myslím na tebe už od půlnoci 💕",
        "Šíkpová růženka se probudila 🥰",
        "Koukejme kdo se nám uráčil se probudit",
        "",
        "Jen tak mimochodem. Miluji těěěě! 😘"
    ];

    const afternoon_greeting = [
        "Good morning, my love! ❤️",
        "Hope you have a wonderful day! 😊",
        "You're the best thing in my life! 💖",
        "Every day with you is special! 🥰",
        "Thinking of you always! 💕",
        "Jen tak mimochodem. Miluji těěěě! 😘"
    ];

    const evening_greetings = [
        "Good morning, my love! ❤️",
        "Hope you have a wonderful day! 😊",
        "You're the best thing in my life! 💖",
        "Every day with you is special! 🥰",
        "Thinking of you always! 💕",
        "Jen tak mimochodem. Miluji těěěě! 😘"
    ];

    // Pick a random greeting
    let greetingText
    if (hours < 12) {
        greetingText = morning_greetings[Math.floor(Math.random() * morning_greetings.length)];
    } else if (hours < 18) {
        greetingText = afternoon_greeting[Math.floor(Math.random() * afternoon_greeting.length)];
    } else {
        greetingText = evening_greetings[Math.floor(Math.random() * evening_greetings.length)];
    }
    document.getElementById("greeting").innerText = greetingText;


    // Function to create a heart at random positions
    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        
        // Position the heart randomly within the viewport
        heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        heart.style.animationDuration = (Math.random() * 6 + 2) + "s"; // Random float duration (5-7 sec)
        
        document.body.appendChild(heart);

        // Remove the heart after the animation completes
        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove after 5 seconds
    }

    // Create hearts every 100ms
    setInterval(createHeart, 100);

    
});
