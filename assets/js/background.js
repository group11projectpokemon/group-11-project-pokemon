// background image
let backgrounds = [
    './assets/images/campfire.webp',
    './assets/images/lounge.webp'
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