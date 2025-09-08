// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "✅ Thanks for reaching out!";
  this.reset();
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
function fadeInOnScroll() {
  faders.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 400 ? "flex" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
