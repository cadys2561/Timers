if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker registered"));
}

let timerInterval;

function startTimer(minutes, product) {
    let done_sound = new Audio("sound_effects/ring.mp3");
    let timeLeft = minutes * 60;
    let mess = ["Vajíčko je hotové!", "Párek je hotový!", "Těstoviny jsou hotové!", "Brambory jsou hotové!", "Rýže je uvařena!"]
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById("timer").textContent = `Zbývá: ${min}:${sec < 10 ? "0" : ""}${sec}`;
        
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            done_sound.play();
            document.getElementById("timer").textContent = mess[product];
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
        "Kéž by jsi mohla mít tak úžasný den, jako jsi úžasná ty!",
        "Jen tak mimochodem. Miluji těěěě! 😘"
    ];

    const afternoon_greeting = [
        "Snad ses nám kjásně napapala ❤️",
        "Věřím, že máš úžasný den! 😊",
        "Odpočiň si po náročném odpoledni 💖",
        "Jsi moje nejvýjmečnější 🥰",
        "Doufám, že dnešek je úžasnější než včerejšek 💕",
        "Jen tak mimochodem. Miluji těěěě! 😘",
        "Kdyby se něco dělo, víš komu se ozvat 😘",
        "Sabinka se růmuje se slovem prcinka 🥰"
    ];

    const evening_greetings = [
        "Blíží se čas spánku ❤️",
        "Už jsi vše zvládla, moje šikulko, už jen odpočívej 😊",
        "Snad jsi měla dokonalý den aspoň z půlky jako jsi ty 💖",
        "Každý společně strávený den je dokonalý 🥰",
        "Celý den jsem na tebe myslel, můžu si dát už pauzu? 💕",
        "Jen tak mimochodem. Miluji těěěě! 😘",
        "Jsi ještě krásnější než jsi byla ráno, jde to vůbec překonat?"
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
        heart.style.bottom = 25 +"%";
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




    const bigHeart = document.getElementById("big-heart");

    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("small-heart", "floating-heart"); // Add animation class
    
        // Random position near the big heart
        heart.style.left = (bigHeart.offsetLeft + Math.random() * 50 - 15) + "px";
        heart.style.top = (bigHeart.offsetTop + Math.random() * 50 - 70) + "px";
    
        document.body.appendChild(heart);
    
        // Remove heart after animation ends
        setTimeout(() => heart.remove(), 5000);
    }
    
    const pop = new Audio("sound_effects/pop_1.mp3");

    // Click event for the big heart
    bigHeart.addEventListener("click", function () {
        pop.play();
        for (let i = 0; i < 2; i++) { // Create 5 floating hearts per click
            createFloatingHeart();
        }
    });
    

    
});
