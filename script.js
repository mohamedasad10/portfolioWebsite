// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting traditionally
    // You can add your form submission logic here, for now, let's display an alert
    alert("Form submitted!\nName: " + document.getElementById("name").value +
          "\nEmail: " + document.getElementById("email").value +
          "\nMessage: " + document.getElementById("message").value);
  }

  // Function to handle email button click
  function emailMe() {
    // Get the values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Create the mailto URL with pre-filled values
    var mailtoUrl = 'mailto:mohamedasad11914@gmail.com?subject=Regarding%20Portfolio%20Contact&body=Name:%20' + encodeURIComponent(name) +
                     '%0AEmail:%20' + encodeURIComponent(email) +
                     '%0AMessage:%20' + encodeURIComponent(message);

    // Open the default email client with the pre-filled values
    window.location.href = mailtoUrl;
  }

  // Add event listeners to form and email button
  document.getElementById("contact-form").addEventListener("submit", submitForm);
  document.getElementById("email-button").addEventListener("click", emailMe);
});





  
