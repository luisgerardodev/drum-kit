const buttons = document.querySelectorAll(".drum");
const crash = new Audio("./sounds/crash.mp3");
const kick = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");

const keys = ["w", "a", "s", "d", "j", "k", "l"];

const playDrum = (button) => {
  switch (button) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kick.play();
      break;
    default:
      break;
  }
};

// Button Press Animation

const buttonAnimation = (button) => {
  const buttonPressed = document.querySelector(`.${button}`);
  buttonPressed.classList.add("pressed");
  setTimeout(() => buttonPressed.classList.remove("pressed"), 100);
};

// *Event Listeners

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playDrum(e.target.innerHTML);
    buttonAnimation(e.target.innerHTML);
  });
});

document.addEventListener("keydown", (e) => {
  const keyPressed = e.key.toLowerCase();

  if (keys.includes(keyPressed)) {
    playDrum(keyPressed);
    buttonAnimation(keyPressed);
  }
});
