// HTML element'leri için değişken tanımalama
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var colorCodes = document.querySelector("#colorCodes");

// Renk değikliğini yapan genel bir fonksiyonu yazma
function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    colorCodes.textContent = body.style.background;
}

// Olay Dinleyicileri Ekleme
window.addEventListener("load",setGradient);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
