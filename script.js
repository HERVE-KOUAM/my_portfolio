function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section[id]");
  let navLinks = document.querySelectorAll(".nav-links");
  let currentSection = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 5) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
