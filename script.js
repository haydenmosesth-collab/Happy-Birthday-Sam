
function showSurprise() {
    document.querySelector(".memories").scrollIntoView({
        behavior: "smooth"
    });

    alert("Hey! Your birthday surprise is waiting below! ❤️");
}

function revealMessage() {
    const message = document.getElementById("secretMessage");

    message.innerHTML =
        "You are one of the most special people in my life! ❤️<br>" +
        "Never stop smiling. Keep chasing your dreams! ✨<br>" +
        "Happy Birthday! 🎂🎉";

    // Create a little celebration
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("span");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = "25px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const duration = 2000 + Math.random() * 2000;

        heart.animate([
            { transform: "translateY(0)" },
            { transform: "translateY(110vh)" }
        ], {
            duration: duration
        });

        setTimeout(() => heart.remove(), duration);
    }
}
