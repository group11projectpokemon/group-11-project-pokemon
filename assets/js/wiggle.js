const box0 = document.querySelector('#slot0');
const box1 = document.querySelector('#slot1');
const box2 = document.querySelector('#slot2');
const box3 = document.querySelector('#slot3');

let direction = "right";

const wiggle = function() {
  if (direction == "right") {
    direction = "left"
    box0.style.rotate = "-10deg";
    box1.style.rotate = "6deg";
    box2.style.rotate = "0deg";
    box3.style.rotate = "-4deg";
  } else {
    direction = "right"
    box0.style.rotate = "-6deg";
    box1.style.rotate = "10deg";
    box2.style.rotate = "4deg";
    box3.style.rotate = "0deg";
  }
};

const playButton = document.getElementById('playButton');
let goStop = "stop";

playButton.addEventListener('click', function (){
  if (goStop == "stop") {
    goStop = "go";
    setInterval(wiggle, 1000);
    console.log("go");
  } else {
    direction = "right"
    goStop = "stop";
    clearInterval(wiggle);
    console.log("stop");
  }
});