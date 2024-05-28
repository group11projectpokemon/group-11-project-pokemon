// play pokemon cry on click
$(document).on('click', '.slot', function() {
    let audioSrc = this.dataset.audio;
    let audio = new Audio(audioSrc);

    // check the volumeControl value and apply it to the audio 
    audio.volume = $('#volumeControl').val();

    audio.play();
});