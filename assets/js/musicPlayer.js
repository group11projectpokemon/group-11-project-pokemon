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

<<<<<<< HEAD
// default audio track
    let audio = new Audio(tracks[currentTrack]);

// click event for play button to toggle play/pause
=======
    // default audio track
    let audio = new Audio(tracks[currentTrack]);

    // click event for play button to toggle play/pause
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
    $('#playButton').click(function() {
        if (audio.paused) {
            audio.play();
            $('#play-pause-icon').attr("src", "./assets/images/pause.png")
            $('#play-pause-icon').attr("alt", "pause")
        } else {
            audio.pause();
            $('#play-pause-icon').attr("src", "./assets/images/play.png")
            $('#play-pause-icon').attr("alt", "play")
        }
    });

<<<<<<< HEAD
// click event for next button
=======
    // click event for next button
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
    $('#nextButton').click(function() {
        currentTrack++;
        if (currentTrack >= tracks.length) {
            currentTrack = 0;
        }
        audio.src = tracks[currentTrack];
        audio.play();
    });

<<<<<<< HEAD
// control volume
    $('#volumeControl').change(function() {
        audio.volume = $(this).val();
    });
    
// loop audio
=======
    // volume control
    $('#volumeControl').on('input', function() {
        audio.volume = $(this).val();
    });
    
    // loop audio
>>>>>>> 5367fe308634af20873209c98aba3d6645be8185
    audio.addEventListener('ended', function() {
        currentTrack++;
        if (currentTrack >= tracks.length) {
            currentTrack = 0;
        }
        audio.src = tracks[currentTrack];
        audio.play();
    });

});
