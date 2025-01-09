// Fonction pour basculer le menu hamburger
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  } else {
    console.error("Les éléments du menu ou de l'icône ne sont pas trouvés.");
  }
}

// Fonction pour gérer le surlignage des liens de navigation en fonction de la section visible
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 5;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href")?.includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

// Chargement dynamique du fichier HTML
fetch("Experience.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((data) => {
    const dynamicContent = document.getElementById("dynamic-content");
    if (dynamicContent) {
      dynamicContent.innerHTML = data;
    } else {
      console.error("L'élément avec l'ID 'dynamic-content' est introuvable.");
    }
  })
  .catch((error) => console.error("Erreur lors du chargement du fichier HTML :", error));
