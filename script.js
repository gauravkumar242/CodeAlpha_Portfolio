// ============================
// MOBILE MENU
// ============================

const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ============================
// CONTACT FORM
// ============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        `Thank you ${name}! Your message has been received.`
    );

    contactForm.reset();

});