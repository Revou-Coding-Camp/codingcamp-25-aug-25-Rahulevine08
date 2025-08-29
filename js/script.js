console.log("Hello World!!");

// greet();

// Greet the user
function greet() {
    // Get the username from prompt
    let username = prompt("Enter your name: ");

    // Display the username in the Webpage
    document.getElementById("username").innerText = username;
}

// Validate the form
function validateForm() {
    // Get the name input value
    let name = document.getElementById("name-input").value;

    // Validate the name input
    if (name === "") {
        // Show an alert if the name is empty
        alert("Name must be filled out"); 
    } else {
        // Show a thank you message if the name is valid
        alert("Thank you, " + name + ", for your message!");
    }
}