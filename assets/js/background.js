// background image
let backgrounds = [
    './assets/images/campfire.webp',
    // './assets/images/lounge.webp',
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
});


//TO DO:
//move divs
//change img source to front
//bring table and couch arms to front
//adjust rotate in the wiggle function... maybe make a separate function, on play button if currentBackground=0 wiggle0(), if currentBackground=1 wiggle1()

// move div locations on lounge background
function moveLounge() {
    console.log('move');
    $('.slot').css("width", "20%")
    $('#slot0').css({"translate": "90% -160%", "rotate": "-14deg"});
    $('#slot1').css({"translate": "165% -180%", "rotate": "-14deg"});
    $('#slot2').css({"translate": "265% -180%", "rotate": "14deg"});
    $('#slot3').css({"translate": "340% -160%", "rotate": "14deg"});
}

moveLounge();