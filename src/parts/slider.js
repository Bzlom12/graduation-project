
function mainSlide() {
    let slideIndex = 1,
    slides = document.querySelectorAll('.main-slider-item');

    function showSlises(n) {
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
        slideIndex++;
    }
    showSlises(slideIndex);
    
    let nextSlide = setInterval(showSlises, 4000);
}

module.exports = mainSlide;