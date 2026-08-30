const correctPassword = "H@rika0826";

const passwordScreen = document.getElementById("passwordScreen");
const scannerScreen = document.getElementById("scannerScreen");

const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const passwordStatus = document.getElementById("passwordStatus");

const progress = document.getElementById("progress");
const status = document.getElementById("status");
const openButton = document.getElementById("openButton");

let value = 0;
let scanner;


// PASSWORD CHECK

passwordButton.addEventListener("click", () => {

    if (passwordInput.value === correctPassword) {

        passwordStatus.textContent = "✓ ACCESS ACCEPTED ❤️";

        passwordScreen.style.display = "none";
        scannerScreen.style.display = "block";

        startScanner();

    } else {

        passwordStatus.textContent = "✕ WRONG PASSWORD";

        passwordInput.value = "";

    }

});


// ALLOW ENTER KEY

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        passwordButton.click();
    }

});


// SCANNER

function startScanner() {

    value = 0;

    scanner = setInterval(() => {

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

}


// OPEN LETTER

openButton.addEventListener("click", () => {

    window.location.href = "letter.html";

});