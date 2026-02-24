document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CONTACT FORM VALIDATION
    ========================== */

    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = emailInput.value.trim();

            // Email validation pattern
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Empty check
            if (email === "") {
                message.style.color = "red";
                message.textContent = "Please enter your email!";
                return;
            }

            // Invalid email check
            if (!emailPattern.test(email)) {
                message.style.color = "red";
                message.textContent = "Please enter a valid email!";
                return;
            }

            // Success message
            message.style.color = "green";
            message.textContent = "Message Successfully Done!";

            // Clear form after 2 seconds
            setTimeout(function () {
                form.reset();
                message.textContent = "";
            }, 2000);
        });
    }

    const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");
});

});