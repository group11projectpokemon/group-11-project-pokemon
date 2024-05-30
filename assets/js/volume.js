// play pokemon cry on click
$(document).on('click', '.slot', function() {
<<<<<<< HEAD
    let audioSrc = this.dataset.audio;
=======
    let audioSrc = this.dataset.cry;
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
    let audio = new Audio(audioSrc);
    // check the volumeControl value and apply it to the audio 
    audio.volume = $('#volumeControl').val();

    // play the audio
    audio.play();

    fetchChuckNorris(this.dataset.name);
});