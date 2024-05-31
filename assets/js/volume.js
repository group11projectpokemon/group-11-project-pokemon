// play pokemon cry on click
$(document).on('click', '.slot', function() {
    let audioSrc = this.dataset.cry;
    let audio = new Audio(audioSrc);
    // check the volumeControl value and apply it to the audio 
    audio.volume = $('#volumeControl').val();

    // play the audio
    // audio.play(); moved this to the below if statement bc it would play the sound if u clicked a space that a pokemon WAS at but isnt anymore
    if(this.children[0].currentSrc){
        fetchChuckNorris(this.dataset.name);
        audio.play();
    }
});