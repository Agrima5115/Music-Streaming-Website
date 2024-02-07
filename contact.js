document.addEventListener("DOMContentLoaded", function() {
    let contactLink = document.querySelector('a[href="#CONTACT"]');
    
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Your code to handle navigating to the contact page goes here
        // For example, you can use window.location.href to redirect to the contact page
        window.location.href = "contact.html"; // Replace "contact.html" with the actual URL of your contact page
    });
});
