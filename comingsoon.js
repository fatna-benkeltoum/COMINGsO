// countdown.js

const launchDate = new Date("Dec 31, 2024 12:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerText = "Launched!";
    }
}, 1000);
