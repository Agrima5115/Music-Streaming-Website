document.addEventListener("DOMContentLoaded", function() {
    let musicLink = document.querySelector('a[href="#MUSIC"]');
    
    musicLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Your code to handle navigating to the music page goes here
        window.location.href = "music.html"; // Replace "music.html" with the actual URL of your music page
    });
});
