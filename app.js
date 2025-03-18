// G
const mobileMenuToggle = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar__links");

// Navbar Menu Toggle
mobileMenuToggle.addEventListener("click", () => {
  const isExpanded = mobileMenuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
  mobileMenuToggle.setAttribute("aria-expanded", isExpanded);
  console.log(isExpanded);
});

// Close menu when clicking a menu link
document.addEventListener("click", (event) => {
  if (
    !mobileMenuToggle.contains(event.target) &&
    !navbar.contains(event.target)
  ) {
    navbar.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  }
});

// Close menu when clicking a menu link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  });
});

// Copy Right Year Automatic Update
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

// Animation - Got From ChatGPT
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".skills__category");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  elements.forEach((el) => observer.observe(el));
});

// function aboutMe() {
//   alert(
//     "Hello, World! I'm Dieudonne Kolony, a self-taught full-stack web developer transforming ideas into visually stunning, interactive experiences. With a Civil Engineering degree from Cape Peninsula University of Technology, I merge precision with creativity to craft seamless, responsive websites that leave a lasting impression. Every project is a new challenge, a fresh canvas, and an opportunity to push boundaries. Let's bring bold ideas to life—one pixel at a time!"
//   );
// }
