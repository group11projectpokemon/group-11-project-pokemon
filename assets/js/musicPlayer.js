$(document).ready(function() {
    let tracks = [
        './assets/music/music01.mp3',
        './assets/music/music02.mp3',
        './assets/music/music03.mp3'
    ];
    let currentTrack = 0;

    // 01 Pokemon B2W2 - Bicycle LoFi Remix.mp3
    // 02 Pokemon B2/W2 - Pinwheel/Dreamyard Forest LoFi Remix
    // 03 Pokemon B2/W2 - Skyarrow Bridge LoFi Remix

// default audio track
    let audio = new Audio(tracks[currentTrack]);

// click event for play button to toggle play/pause
    $('#playButton').click(function() {
        if (audio.paused) {
            audio.play();
            // $('#playButton').html('Pause');
            $('#play-pause-icon').attr("src", "./assets/images/pause.png")
        } else {
            audio.pause();
            // $('#playButton').html('Play');
            $('#play-pause-icon').attr("src", "./assets/images/play.png")
        }
    });

// click event for next button
    $('#nextButton').click(function() {
        currentTrack++;
        if (currentTrack >= tracks.length) {
            currentTrack = 0;
        }
        audio.src = tracks[currentTrack];
        audio.play();
    });

// control volume
    $('#volumeControl').change(function() {
        audio.volume = $(this).val();
    });
    
// loop audio
    audio.addEventListener('ended', function() {
        currentTrack++;
        if (currentTrack >= tracks.length) {
            currentTrack = 0;
        }
        audio.src = tracks[currentTrack];
        audio.play();
    });

});
