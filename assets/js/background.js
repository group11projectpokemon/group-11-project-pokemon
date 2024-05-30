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
    moveDivs();
});


//TO DO:
//write div locations  DONE
//move divs on toggle  DONE
//change img source to front
//bring table and couch arms to front
//adjust rotate in the wiggle function... maybe make a separate function, on play button if currentBackground=0 wiggle0(), if currentBackground=1 wiggle1()

// move div locations on lounge background
function moveDivs1() {
    console.log('move 1');
    $('.slot').css("width", "20%")
    $('#slot0').css({"translate": "90% -160%", "rotate": "-14deg"});
    $('#slot1').css({"translate": "165% -180%", "rotate": "-14deg"});
    $('#slot2').css({"translate": "265% -180%", "rotate": "14deg"});
    $('#slot3').css({"translate": "340% -160%", "rotate": "14deg"});

    // this obs doesn't work cause it can't read pokeData from the pokemon.js
    // $('#slot2 img').attr('src', pokeData.imgSrc);
}

function moveDivs0() {
    console.log('move 0');
    $('.slot').css("width", "22%")
    $('#slot0').css({"translate": "104% -194%", "rotate": "-8deg"});
    $('#slot1').css({"translate": "250% -194%", "rotate": "8deg"});
    $('#slot2').css({"translate": "115% -135%", "rotate": "2deg"});
    $('#slot3').css({"translate": "240% -135%", "rotate": "-2deg"});
}

function moveDivs() {
    if ($(`.camp-container > img`).attr('src') == './assets/images/lounge2.png') {
        moveDivs1();
    } else if ($(`.camp-container > img`).attr('src') == './assets/images/campfire.webp') {
        moveDivs0();
    } else {
        console.log('moveDivs error')
    }
}

// $(`.camp-container > img`).attr(`src`, backgrounds[currentBackground]);