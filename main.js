let song_image = document.getElementById("cover_photo");
let song_title = document.getElementById("title");
let song_singer = document.getElementById("singer");
let song_play = document.getElementById("play");
let song_prev = document.getElementById("prev");
let song_next = document.getElementById("next");
let songs_list = [
    {
        name : 'Counting Stars',
        Image : 'images/counting_stars.jpeg',
        Song : 'music/counting_stars.mp3',
        Singer : 'One Republic'
    },
    {
        name : 'Night Changes',
        Image : 'images/night_changes.jpg',
        Song : 'music/night_changes.mp3',
        Singer : 'One Direction'
    },
    {
        name : 'Blinding Lights',
        Image : 'images/blinding_lights.jpeg',
        Song : 'music/blinding_lights.mp3',
        Singer : 'The Weeknd'
    },
    {
        name : 'Wildest Dreams',
        Image : 'images/wildest_dreams_taylor.jfif',
        Song : 'music/Taylor-Swift-Wildest-Dreams.mp3',
        Singer : 'Taylor Swift'
    }
]

let i = 0;
let flag = false;
var audio = new Audio(songs_list[i].Song);
function updatePlayer() {
    song_image.src = songs_list[i].Image;
    song_singer.innerHTML = songs_list[i].Singer;
    song_title.innerHTML = songs_list[i].name;
    audio = new Audio(songs_list[i].Song);
    if (flag === true) {
        audio.play();
    }
}
song_play.addEventListener("click", function () {
    if (flag === false) {
        audio.play();
        flag = true;
        song_play.innerHTML = '<i class="fas fa-pause fa-3x play-icon"></i>';
    } else {
        audio.pause();
        flag = false;
        song_play.innerHTML = '<i class="fas fa-play fa-3x play-icon"></i>';
    }
});
song_next.addEventListener("click", function () {
    audio.pause();
    flag = false;
    i = (i + 1) % songs_list.length;
    updatePlayer();
});
song_prev.addEventListener("click", function () {
    audio.pause();
    flag = false;
    i = (i - 1 + songs_list.length) % songs_list.length;
    updatePlayer();
});

updatePlayer();