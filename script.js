document.addEventListener("DOMContentLoaded", function () {
  // Form validation
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name && email && message) {
      alert("Thank you for your message!");
      contactForm.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
});
