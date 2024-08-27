document.addEventListener('DOMContentLoaded', () => {
    const usps = document.querySelectorAll('.usp');

    usps.forEach(usp => {
        usp.addEventListener('mouseover', () => {
            usp.style.transform = 'translateY(-10px)';
        });

        usp.addEventListener('mouseout', () => {
            usp.style.transform = 'translateY(0)';
        });
    });
});


window.addEventListener('scroll', function() {
    const parallaxSection = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;
    parallaxSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});


document.addEventListener("DOMContentLoaded", function () {
    // GSAP animations are initialized in the HTML section
    // Add additional JS logic here if necessary
});
