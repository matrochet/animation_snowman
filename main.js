let panneau = document.querySelector(".panneau");
let sound = document.querySelector("audio");
let isRunning = false;
let snowAnimation = document.querySelector(".snowman");

panneau.addEventListener("click", function () {
  if (isRunning) {
    sound.pause();
    isRunning = false;
    snowAnimation.classList.remove("animationPlayStateRunning");
    snowAnimation.classList.add("animationPlayStatePaused");
  } else {
    sound.play();
    isRunning = true;
    snowAnimation.classList.remove("animationPlayStatePaused");
    snowAnimation.classList.add("animationPlayStateRunning");
  }
});
