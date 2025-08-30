console.log("Hello World!!");

greet();

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

    let email = document.getElementById("email-input").value;
    if (email === "") {
        alert("Email must be filled out");
    }

    let message = document.getElementById("message-input").value;
    if (message === "") {
        alert("Message must be filled out");
    }
        document.getElementById("myform").addEventListener("submit", function(e) {
      e.preventDefault(); // Mencegah form submit secara default
      var nama = document.getElementById("name-input").value;
      var email = document.getElementById("email-input").value;
      var pesan = document.getElementById("message-input").value;
      var hasil = "Nama Anda :" + nama + ", Email Anda: " + email + ", Pesan Anda: " + pesan;
      document.getElementById("hasilOutput").innerText = hasil; // Menampilkan hasil di elemen dengan id "hasilOutput"
    });
}

