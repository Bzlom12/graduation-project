function accordion() {
    let title = document.querySelectorAll('.accordion-heading'),
        span = document.querySelectorAll('.accordion-block');

    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener('click', function() {
            if (!(this.classList.contains('active-y'))) {
                for (let i = 0; i < title.length; i++) {
                    title[i].classList.remove('active-y');
                }
                this.classList.add('active-y');
            }
        });
    }
    


}

module.exports = accordion;