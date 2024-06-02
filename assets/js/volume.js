// play pokemon cry on click
$(document).on('click', '.slot', function() {
    let audioSrc = this.dataset.cry;
    let audio = new Audio(audioSrc);
    // check the volumeControl value and apply it to the audio 
    audio.volume = $('#volumeControl').val();

    // play the audio
    // check if there is a source to play
    if(this.children[0].currentSrc){
        fetchChuckNorris(this.dataset.name);
        audio.play();
    }
});