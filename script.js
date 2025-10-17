const urlApi = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");

function getAdvice() {
    fetch(urlApi)
        .then((response) => response.json())
        .then((data) => {
            adviceId.textContent = '#' + data.slip.id;
            adviceText.textContent = `"${data.slip.advice}"`;
        });
};

getAdvice();

adviceBtn.addEventListener("click", () => {
    getAdvice();
});