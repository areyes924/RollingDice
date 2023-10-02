const button = document.querySelector("button");

button.addEventListener("click", rollDie);

function rollDie() {
    const Die1 = Math.floor(Math.random() * (6) + 1);
    const Die2 = Math.floor(Math.random() * (6) + 1);
    const Die3= Die1 + Die2;
    // button.textContent = Die1 + " " + Die2 + " " + Die3;
    // button.textContent = `player 1: ${name}`;

    const changingText = document.getElementById("changingText");
    changingText.textContent = Die1 + " " + Die2 + " " + Die3;
}



