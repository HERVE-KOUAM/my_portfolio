// Importez GSAP (via CDN ou npm)
import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js";

// Liste des textes à afficher
const texts = [
  "Développeur Frontend",
  "Système Nuagique",
  "Administration Système"
];

const textElement = document.getElementById("text");
let textIndex = 0;

// Fonction pour animer le texte comme un effet de saisie
function typeText(text, callback) {
  const chars = text.split(""); // Divise le texte en caractères
  textElement.textContent = ""; // Réinitialise le contenu
  chars.forEach((char, i) => {
    gsap.to({}, {
      duration: 0.05 * i, // Délai progressif pour chaque caractère
      onComplete: () => {
        textElement.textContent += char; // Ajoute le caractère
        if (i === chars.length - 1 && callback) {
          callback(); // Appelle la fonction suivante une fois terminé
        }
      }
    });
  });
}

// Fonction pour effacer le texte
function eraseText(callback) {
  const chars = textElement.textContent.split("");
  chars.forEach((_, i) => {
    gsap.to({}, {
      duration: 0.05 * i,
      onComplete: () => {
        textElement.textContent = textElement.textContent.slice(0, -1); // Supprime un caractère
        if (i === chars.length - 1 && callback) {
          callback(); // Appelle la fonction suivante une fois terminé
        }
      }
    });
  });
}

// Fonction principale pour gérer la séquence
function cycleTexts() {
  typeText(texts[textIndex], () => {
    setTimeout(() => {
      eraseText(() => {
        textIndex = (textIndex + 1) % texts.length; // Passe au texte suivant
        cycleTexts(); // Relance la séquence
      });
    }, 1000); // Temps d'attente avant d'effacer
  });
}

// Démarre l'animation
cycleTexts();
