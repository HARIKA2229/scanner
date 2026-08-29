const progress = document.getElementById("progress");
const status = document.getElementById("status");
const openButton = document.getElementById("openButton");

let value = 0;

const scanner = setInterval(() => {

    value += 2;

    progress.style.width = value + "%";

    if (value < 30) {
        status.textContent = "Initializing Secret Scanner...";
    }
    else if (value < 60) {
        status.textContent = "Scanning memories...";
    }
    else if (value < 90) {
        status.textContent = "Analyzing special data...";
    }
    else {
        status.textContent = "Finalizing secret access...";
    }

    if (value >= 100) {

        clearInterval(scanner);

        status.textContent = "✓ ACCESS GRANTED ❤️";

        status.classList.add("access-granted");

        openButton.style.display = "inline-block";

    }

}, 100);


openButton.addEventListener("click", () => {

    window.location.href = "letter.html";

});