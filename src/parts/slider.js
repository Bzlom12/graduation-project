
function mainSlide() {
    //main slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.main-slider-item');

    function showSlides() {
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
        slideIndex++;
    }
    showSlides(slideIndex);
    
    let nextSlide = setInterval(showSlides, 5000);

    //slider Want also
    let slidesWantAlso = document.querySelectorAll('.feedback-slider-item'),
        next = document.getElementsByClassName('main-slider-btn')[1],
        prev = document.getElementsByClassName('main-slider-btn')[0],
        slideInd = 1;

    function sliderWantAlso(n) {
        if (n > slidesWantAlso.length || slideInd > slidesWantAlso.length) {
            slideInd = 1;
        }
        if (n < 1) {
            slideInd = slidesWantAlso.length;
        }
        slidesWantAlso.forEach((item) => item.style.display = 'none');
        slidesWantAlso[slideInd - 1].style.display = 'block';
        slideInd++;
        
    }
    sliderWantAlso(slideInd);
   
    function plusSlides(n) {
        sliderWantAlso(slideInd += n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });

    let nextSlide2 = setInterval(sliderWantAlso, 5000);
}

module.exports = mainSlide;