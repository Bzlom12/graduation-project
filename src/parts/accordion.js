function accordion() {
    let title = document.querySelectorAll('.accordion-heading'),
        span = document.querySelectorAll('.accordion-block');
    
    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener('click', () => {
            title[i].classList.add('active');
            for (let j = 0; j < span.length; j++) {
                span[j].classList.remove('active-y');
                title[j].classList.remove('active');
            }
            title[i].classList.add('active');
            span[i].classList.add('active-y');
            console.log('da');
        });     
    }   
}

module.exports = accordion;