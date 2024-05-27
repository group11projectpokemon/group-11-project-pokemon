// play pokemon cry on click
$(document).on('click', '.poke-img', function() {
    let audioSrc = this.dataset.audio;
    let audio = new Audio(audioSrc);

    // check the volumeControl value 
    audio.volume = $('#volumeControl').val();

    audio.play();
});