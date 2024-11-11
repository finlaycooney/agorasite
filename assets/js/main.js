document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for main content
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        opacity += 0.01;
        mainContent.style.opacity = opacity;
    }, 20);

    // Optional: Add interactive elements
    const asciiArt = document.querySelector('.ascii-art');
    asciiArt.addEventListener('mouseover', () => {
        asciiArt.style.transform = 'scale(1.02)';
    });

    asciiArt.addEventListener('mouseout', () => {
        asciiArt.style.transform = 'scale(1)';
    });
});