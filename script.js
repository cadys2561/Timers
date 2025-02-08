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

