AOS.init({
  duration: 800, // durasi animasi
  once: true, // animasi hanya sekali
});
new Typed("#typed", {
  strings: ["Junior Web Developer", "API Enthusiast", "Open Source Lover"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=muhammadalfariqo@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;

  window.open(gmailUrl, "_blank");
});

const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");
const tags = document.querySelectorAll(".tag");

function filterProjects(filter) {
  projects.forEach((project) => {
    const tags = project.dataset.tags.split(",");
    if (filter === "all" || tags.includes(filter)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Filter via button
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterProjects(btn.dataset.filter);
  });
});

// Filter via clicking tag inside project card
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    filterProjects(tag.innerText);
  });
});
