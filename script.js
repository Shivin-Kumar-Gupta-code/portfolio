// Menu Toggle Functionality
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark"); // Toggle menu icon
  navbar.classList.toggle("active"); // Toggle navbar visibility
};

// Sticky Header on Scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// ScrollReveal Animations
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .services-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".about-img, .home-content h1", { origin: "left" });
ScrollReveal().reveal(".about-content, .home-content p", { origin: "right" });

// Typed.js Animation
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Frontend Developer", "Backend Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });
});

// Initialize ScrollReveal for "Read More" Animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "20px",
  duration: 1000,
  delay: 200,
  reset: false,
});

// Functionality for "Read More" in About Me Section
document.querySelector(".about .btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default link behavior
  const aboutContent = document.querySelector(".about-content p");
  const additionalContent = `
    <br><br>
    As a web developer, I have extensive experience in building responsive and dynamic web applications. 
    My skills include proficiency in HTML, CSS, JavaScript, React, and Node.js. I am also well-versed in 
    version control systems like Git and GitHub, ensuring seamless collaboration and code management. 
    My passion lies in creating user-friendly interfaces and optimizing backend systems for scalability 
    and performance. I am constantly learning and adapting to new technologies to stay ahead in the ever-evolving 
    field of web development.
  `;
  aboutContent.innerHTML += additionalContent; // Append additional content
  sr.reveal(aboutContent, { origin: "bottom" }); // Add scroll reveal animation
  this.style.display = "none"; // Hide the "Read More" button after clicking
});

// Functionality for "Read More" in Services Section
document.querySelectorAll(".services .btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const serviceBox = this.closest(".services-box");
    const serviceContent = serviceBox.querySelector("p");
    let additionalContent = "";

    // Add specific content based on the service
    if (serviceBox.querySelector("h3").textContent === "Web Developer") {
      additionalContent = `
        <br><br>
        I specialize in creating responsive and visually appealing websites using modern technologies like 
        React, Angular, and Vue.js. My expertise includes optimizing websites for performance, accessibility, 
        and SEO. I also ensure seamless integration with backend systems and APIs for a smooth user experience.
      `;
    } else if (
      serviceBox.querySelector("h3").textContent === "Java Expert & Educator"
    ) {
      additionalContent = `
        <br><br>
        With years of experience in Java development, I offer comprehensive training and mentorship in Java 
        programming, object-oriented design, and frameworks like Spring and Hibernate. I also provide guidance 
        on best practices for writing clean, maintainable, and efficient code.
      `;
    } else if (serviceBox.querySelector("h3").textContent === "GitHub-Savvy") {
      additionalContent = `
        <br><br>
        I provide advanced Git and GitHub solutions, including repository setup, branch management, and 
        collaboration workflows. I also offer training on using GitHub Actions for CI/CD pipelines and 
        automating development processes.
      `;
    }

    serviceContent.innerHTML += additionalContent; // Append additional content
    sr.reveal(serviceContent, { origin: "bottom" }); // Add scroll reveal animation
    this.style.display = "none"; // Hide the "Read More" button after clicking
  });
});
