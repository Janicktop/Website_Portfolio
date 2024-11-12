document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.querySelector('.about-text');
    
    // Beispiel: Toggle hidden Klasse nach 5 Sekunden
    setTimeout(() => {
        aboutText.classList.add('hidden'); // Blendet den Text nach rechts aus
    }, 5000); // Warte 5 Sekunden, bevor die Animation ausgeführt wird
});
