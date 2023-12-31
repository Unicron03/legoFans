var playButtonStarWars = document.getElementById("playButtonStarWars");
var audioPlayerStarWars = document.getElementById("audioPlayerStarWars");

var playButtonMarvel = document.getElementById("playButtonMarvel");
var audioPlayerMarvel = document.getElementById("audioPlayerMarvel");

function playRandomPosition(audioPlayer, duration) {
    var randomPosition = Math.random() * duration;

    audioPlayer.currentTime = randomPosition;
    var playPromise = audioPlayer.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // La lecture a commencé !
        })
        .catch(error => {
            // La lecture a été empêchée
            console.log(error);
        });
    }
}

playButtonStarWars.addEventListener("click", function () {
    if (audioPlayerStarWars.paused) {
        playRandomPosition(audioPlayerStarWars, 666);
        audioPlayerMarvel.pause();
    } else {
        audioPlayerStarWars.pause();
    }
});

playButtonMarvel.addEventListener("click", function () {
    if (audioPlayerMarvel.paused) {
        playRandomPosition(audioPlayerMarvel, 1719);
        audioPlayerStarWars.pause();
    } else {
        audioPlayerMarvel.pause();
    }
});