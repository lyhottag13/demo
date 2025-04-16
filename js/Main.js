const line = document.getElementById("line");
const body = document.getElementById("body");
const lightbulb = document.getElementById("lightbulb");
const smile = document.getElementById("smile");
const lightswitch = document.getElementById("switch");
const BLACK = "rgb(26, 26, 26)";

let lightsOn = true;

lightswitch.addEventListener("pointerdown", () => {
    
    lightsOn = !lightsOn;
    body.style.backgroundColor = (body.style.backgroundColor === BLACK) ? "white" : BLACK;
    lightbulb.style.filter = (lightbulb.style.filter === "brightness(0)") ? "brightness(1)" : "brightness(0)";
    smile.style.filter = (smile.style.filter === "brightness(0.05)") ? "brightness(1)" : "brightness(0.05)";
    lightswitch.style.transform = (lightsOn) ? "rotate(0deg)" : "rotate(180deg)";
})