document.addEventListener("DOMContentLoaded", function() {
    let artistsLink = document.querySelector('a[href="#ARTISTS"]');
    
    artistsLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Your code to handle navigating to the artists page goes here
        window.location.href = "artists.html"; // Replace "artists.html" with the actual URL of your artists page
    });
});
