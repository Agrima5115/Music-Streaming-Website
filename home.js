document.addEventListener("DOMContentLoaded", function() {
    let homeLink = document.querySelector('a[href="#HOME"]');
    
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Your code to handle navigating to the home page goes here
        window.location.href = "index.html"; // Replace "index.html" with the actual URL of your home page
    });
});
