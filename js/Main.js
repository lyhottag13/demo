const line = document.getElementById("line");
const body = document.getElementById("body");
const lightbulb = document.getElementById("lightbulb");
const smile = document.getElementById("smile");
const lightswitch = document.getElementById("switch");
const BLACK = "rgb(26, 26, 26)";
const audio = {};
let isLightOn = true;


function preloadAudio(audioList) {
    audioList.forEach(element => {
        audio[element] = new Audio("resources/audio/" + element + ".mp3");
        audio[element].preload = "auto";
        audio[element].load();
    });
}

preloadAudio(["click", "imnotbutiwishiwas"]);

lightswitch.addEventListener("pointerdown", () => {
    playSFX("click");
    isLightOn = !isLightOn;
    line.style.filter = (isLightOn) ? "brightness(1)" : "brightness(0)";
    body.style.backgroundColor = (isLightOn) ? "white" : BLACK;
    lightbulb.style.filter = (isLightOn) ? "brightness(1)" : "brightness(0)";
    smile.style.filter = (isLightOn) ? "brightness(1)" : "brightness(0.05)";
    lightswitch.style.transform = (isLightOn) ? "rotate(0deg)" : "rotate(180deg)";
    if (!isLightOn) {
        playSFX("imnotbutiwishiwas");
    } else {
        stopSFX("imnotbutiwishiwas");
    }
})

function playSFX(name) {
    audio[name].play();
}
function stopSFX(name) {
    audio[name].pause();
    audio[name].currentTime = 0;
}