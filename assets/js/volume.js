// play pokemon cry on click
$(document).on('click', '.slot', function() {
    let audioSrc = this.dataset.cry;
    let audio = new Audio(audioSrc);
    // check the volumeControl value and apply it to the audio 
    audio.volume = $('#volumeControl').val();

    // play the audio
    audio.play();

    fetchChuckNorris(this.dataset.name);
});