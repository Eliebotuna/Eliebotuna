
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const totalItems = items.length;
    const autoplayInterval = 3000; // Intervalle de défilement automatique (en ms)
    let autoplay;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Décale selon l'index actuel
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function goToNext() {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }

    function goToPrev() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    }

    // Navigation manuelle
    nextButton.addEventListener('click', () => {
        goToNext();
        resetAutoplay();
    });

    prevButton.addEventListener('click', () => {
        goToPrev();
        resetAutoplay();
    });

    // Autoplay
    function startAutoplay() {
        autoplay = setInterval(goToNext, autoplayInterval);
    }

    function resetAutoplay() {
        clearInterval(autoplay);
        startAutoplay();
    }

    // Initialisation
    startAutoplay();
