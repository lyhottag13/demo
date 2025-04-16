const line = document.getElementById("line");
const body = document.getElementById("body");
const lightbulb = document.getElementById("lightbulb");
const smile = document.getElementById("smile");
const lightswitch = document.getElementById("switch");
const BLACK = "rgb(26, 26, 26)";

let isLightOn = true;

lightswitch.addEventListener("pointerdown", () => {
    
    isLightOn = !isLightOn;
    line.style.filter = (isLightOn) ? "brightness(1)" : "brightness(0)";
    body.style.backgroundColor = (isLightOn) ? "white" : BLACK;
    lightbulb.style.filter = (isLightOn) ? "brightness(1)" : "brightness(0)";
    smile.style.filter = (isLightOn) ? "brightness(1)" : "brightness(0.05)";
    lightswitch.style.transform = (isLightOn) ? "rotate(0deg)" : "rotate(180deg)";
})