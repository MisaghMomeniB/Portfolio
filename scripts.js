document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); /* Prevents the form from submitting the traditional way */
    
    const name = document.getElementById("name").value; /* Gets the value of the name input field */
    const email = document.getElementById("email").value; /* Gets the value of the email input field */
    const message = document.getElementById("message").value; /* Gets the value of the message textarea */
    
    if (name && email && message) { /* Checks if all fields are filled */
        alert("Thank you for your message, " + name + "!"); /* Displays a thank you message */
    } else {
        alert("Please fill in all fields."); /* Displays an alert if any field is empty */
    }
});
