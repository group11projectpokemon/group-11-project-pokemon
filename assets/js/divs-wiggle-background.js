// background image
let backgrounds = [
  './assets/images/campfire.webp',
  './assets/images/lounge2.png'
];
let currentBackground = 0;

// click event for toggle background button
$(`#toggleBackground`).click(function() {
  currentBackground++;
  if (currentBackground >= backgrounds.length) {
      currentBackground = 0;
  }
  $(`.camp-container > img`).attr(`src`, backgrounds[currentBackground]);
  // sets div locations and initial rotate
  moveDivs();

  setImage(JSON.parse(localStorage.getItem("poke0")));
  setImage(JSON.parse(localStorage.getItem("poke1")));
  setImage(JSON.parse(localStorage.getItem("poke2")));
  setImage(JSON.parse(localStorage.getItem("poke3")));
});

// declare initial rotate, which will be set by moveDivs and used by wiggle
let initialRotate0;
let initialRotate1;
let initialRotate2;
let initialRotate3;

// set css rotate of each slot to equal their initial rotate
function setInitialRotate() {
  $('#slot0').css('rotate', `${initialRotate0}deg`);
  $('#slot1').css('rotate', `${initialRotate1}deg`);
  $('#slot2').css('rotate', `${initialRotate2}deg`);
  $('#slot3').css('rotate', `${initialRotate3}deg`);
}

// set locations and rotate for camp background
function moveDivs0() {
  $('.slot').css("width", "22%")
  $('#slot0').css({"translate": "104% -194%"});
  $('#slot1').css({"translate": "250% -194%"});
  $('#slot2').css({"translate": "115% -135%"});
  $('#slot3').css({"translate": "240% -135%"});

  initialRotate0 = -6; // -6 to -10 center -8
  initialRotate1 = 10; // 10 to 6 center 8
  initialRotate2 = 4; // 4 to 0 center 2
  initialRotate3 = 0; // 2 to -4 center -2

  // have to set initial rotate each time the image changes
  setInitialRotate()
  // return values so wiggle can use it
  return(initialRotate0, initialRotate1, initialRotate2, initialRotate3);
}

// set locations and rotate for lounge background
function moveDivs1() {
  $('.slot').css("width", "20%")
  $('#slot0').css({"translate": "90% -160%"});
  $('#slot1').css({"translate": "165% -180%"});
  $('#slot2').css({"translate": "265% -180%"});
  $('#slot3').css({"translate": "340% -160%"});

  initialRotate0 = -12; // -12 to -16 center -14
  initialRotate1 = -12; // same
  initialRotate2 = 16; // 16 to 12 center 14
  initialRotate3 = 16; // same

  // have to set initial rotate each time the image changes
  setInitialRotate()
  // return values so wiggle can use it
  return(initialRotate0, initialRotate1, initialRotate2, initialRotate3);
}

// run the correct moveDivs function based on background image source
function moveDivs() {
  if ($(`.camp-container > img`).attr('src') == './assets/images/lounge2.png') {
      moveDivs1();
  } else if ($(`.camp-container > img`).attr('src') == './assets/images/campfire.webp') {
      moveDivs0();
  } else {
      console.log('moveDivs error')
  }
}


let direction = "right";

const wiggle = function() {
  if (direction == "right") {
    direction = "left";
    $('#slot0').css('rotate', `${initialRotate0}deg`);
    $('#slot1').css('rotate', `${initialRotate1}deg`);
    $('#slot2').css('rotate', `${initialRotate2}deg`);
    $('#slot3').css('rotate', `${initialRotate3}deg`);
  } else {
    direction = "right"
    $('#slot0').css('rotate', `${initialRotate0 - 4}deg`);
    $('#slot1').css('rotate', `${initialRotate1 - 4}deg`);
    $('#slot2').css('rotate', `${initialRotate2 - 4}deg`);
    $('#slot3').css('rotate', `${initialRotate3 - 4}deg`);
  }
};

const playButton = document.getElementById('playButton');
let goStop = "stop";
let wiggleTimer;

playButton.addEventListener('click', function (){
  if (goStop == "stop") {
    goStop = "go";
    wiggleTimer = setInterval(wiggle, 1000);
  } else {
    direction = "right"
    goStop = "stop";
    clearInterval(wiggleTimer);
  }
});

//moveDivs should be called when pokemon append because it gives them an initialRotate. For now I put it here, but there may be a better place
moveDivs();
setInitialRotate();