document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a'); // Sélectionne tous les liens dans la navbar

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            
            const targetId = this.getAttribute('href'); // Obtient l'id de la cible
            const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible
            
            // Défilement vers l'élément cible
            window.scrollTo({
                top: targetElement.offsetTop, // Position en haut de l'élément
                behavior: 'smooth' // Comportement de défilement
            });
        });
    });
});

document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

document.querySelector('.logo a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});