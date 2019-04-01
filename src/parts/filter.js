function filter() {
    let menuItem = document.querySelectorAll('.item'),
        image = document.querySelectorAll('.portfolio-block'),
        portfolioNO = document.querySelector('.portfolio-no');
        
    menuItem.forEach(function(item) {
        item.addEventListener('click', function(event) {
            if (event.target.classList.contains('lovers')){
                image.forEach(function(elem) {
                    if (!(elem.classList.contains('lovers'))) {
                        elem.style.display = 'none';
                    } else {
                        elem.style.display = 'block';
                    }
                });
            } else if (event.target.classList.contains('girl')) {
                image.forEach(function(elem) {
                    if (!(elem.classList.contains('girl'))) {
                        elem.style.display = 'none';
                    } else {
                        elem.style.display = 'block';
                    }
                }); 
            } else if (event.target.classList.contains('chef')) {
                image.forEach(function(elem) {
                    if (!(elem.classList.contains('chef'))) {
                        elem.style.display = 'none';
                    } else {
                        elem.style.display = 'block';
                    }
                }); 
            } else if (event.target.classList.contains('grandmother')) {
                image.forEach(function(elem) {
                    if (!(elem.classList.contains('grandmother'))) {
                        elem.style.display = 'none';
                        portfolioNO.style.display = 'block';
                    }
                }); 
            } else if (event.target.classList.contains('granddad')) {
                image.forEach(function(elem) {
                    if (!(elem.classList.contains('grandmother'))) {
                        elem.style.display = 'none';
                        portfolioNO.style.display = 'block';
                    }
                }); 
            } else if (event.target.classList.contains('guy')) {
                image.forEach(function(elem) {
                    if (!(elem.classList.contains('guy'))) {
                        elem.style.display = 'none';
                    } else {
                        elem.style.display = 'block';
                    }
                }); 
            } else if (event.target.classList.contains('active')) {
                image.forEach(function(elem) {
                    elem.style.display = 'block';
                });
            }
        });
    });
}

module.exports = filter;