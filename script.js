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
      window.location.href = 'mailto:mohamedasad11914@gmail.com';
    }
  
    // Add event listeners to form and email button
    document.getElementById("contact-form").addEventListener("submit", submitForm);
    document.getElementById("email-button").addEventListener("click", emailMe);
  });
  