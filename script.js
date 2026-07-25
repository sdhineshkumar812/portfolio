// ========================================
// Typing Animation
// ========================================

const typed = new Typed(".typing", {
    strings: [
        "Full Stack Developer",
        "AI Engineer",
        "Java Developer",
        "Machine Learning Enthusiast"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


// ========================================
// Mobile Navigation Menu
// ========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ========================================
// Contact Form
// ========================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent normal form submission
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Email body
        const body =
            "Hello Dhinesh,\n\n" +
            message +
            "\n\n" +
            "Name: " + name +
            "\n" +
            "Email: " + email;

        // Create mailto URL
        const mailtoLink =
            "mailto:sdhineshkumar7576@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        // Open default email application
        window.location.href = mailtoLink;
    });
}