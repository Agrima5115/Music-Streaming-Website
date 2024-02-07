document.addEventListener("DOMContentLoaded", function() {
    let musicLink = document.querySelector('a[href="#MUSIC"]');
    
    musicLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Your code to handle navigating to the music page goes here
        window.location.href = "music.html"; // Replace "music.html" with the actual URL of your music page
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // List of songs
    let songs_list = [
        {
            name : 'Counting Stars',
            image : 'images/counting_stars.jpeg',
            song : 'counting_stars.mp3',
            singer : 'One Republic'
        },
        {
            name : 'Night Changes',
            image : 'images/night_changes.jpg',
            song : 'night_changes.mp3',
            singer : 'One Direction'
        },
        {
            name : 'Blinding Lights',
            image : 'images/blinding_lights.jpeg',
            song : 'blinding_lights.mp3',
            singer : 'The Weeknd'
        },
        {
            name : 'Wildest Dreams',
            image : 'images/wildest_dreams_taylor.jfif',
            song : 'Taylor-Swift-Wildest-Dreams.mp3',
            singer : 'Taylor Swift'
        }
    ];

    // Get the parent element to append the song list
    let songListContainer = document.getElementById('song-list');

    // Loop through the songs list and create HTML elements for each song
    songs_list.forEach(function(song) {
        // Create a div for each song
        let songDiv = document.createElement('div');
        songDiv.classList.add('song-item');

        // Create an image element for the song cover
        let coverImg = document.createElement('img');
        coverImg.src = song.image;
        coverImg.alt = song.name + ' Cover';
        songDiv.appendChild(coverImg);

        // Create a paragraph for the song name
        let songName = document.createElement('p');
        songName.textContent = song.name;
        songDiv.appendChild(songName);

        // Create a paragraph for the song singer
        let songSinger = document.createElement('p');
        songSinger.textContent = 'Singer: ' + song.singer;
        songDiv.appendChild(songSinger);

        // Create an audio element for the song
        let audioPlayer = document.createElement('audio');
        audioPlayer.src = 'music/' + song.song;
        audioPlayer.controls = true;
        songDiv.appendChild(audioPlayer);

        // Append the song div to the container
        songListContainer.appendChild(songDiv);
    });
});

