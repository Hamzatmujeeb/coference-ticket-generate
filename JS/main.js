document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.upload-form'); // Target the form
    
    // Handle file upload validation
    document.querySelector("#avatar-upload").addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            if (file.size > 500 * 1024) { // Check file size exceeds 500KB
                alert("File size exceeds the maximum allowed size of 500KB.");
                event.target.value = ""; // Clear the file input
            } else {
                alert("File uploaded successfully!");
            }
        }
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        // Validate form inputs
        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const githubUsername = document.getElementById("github-username").value;

        if (fullName && email && githubUsername) {
            // Navigate to the ticket page
            window.location.href = "ticket.html"; // Replace with the correct URL to your ticket page
        } else {
            alert("Please fill out all the required fields.");
        }
    });
});
