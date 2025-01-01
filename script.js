function submitform(event){
    event.preventDefault();

let yourname = document.getElementById("yourname");
let yourmessage = document.getElementById("yourmessage");
let youremail = document.getElementById("youremail");

let name = document.getElementById("name").value;
let message = document.getElementById("message").value;
let email = document.getElementById("email").value;

yourname.textContent = "Name: " + name;
youremail.textContent = "Email: " + email;
yourmessage.textContent = "Message: " + message;
}
