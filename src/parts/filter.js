function filter() {
    let menuItem = document.querySelectorAll('.item'),
        image = document.querySelectorAll('.portfolio-block'),
        portfolioNO = document.querySelector('.portfolio-no');
    
    function check(a, b, c = 0) {
        if(!(a.classList.contains(b))){
            a.style.display = 'none';
        } else {
            a.style.display = 'block';
            portfolioNO.style.display = 'none';
        }
        if (!(a.classList.contains(b)) && c == 1) {
            a.style.display = 'none';
            portfolioNO.style.display = 'block';
        }
    }

    menuItem.forEach(function(item) {
        item.addEventListener('click', function(event) {
            for (let i = 0; i < menuItem.length; i++) {
                menuItem[i].classList.remove('active');
            }
            event.target.classList.add('active');
            if (event.target.classList.contains('lovers')){ 
                image.forEach(function(elem) {
                    check(elem, 'lovers');
                });
            } else if (event.target.classList.contains('girl')) {
                image.forEach(function(elem) {
                    check(elem, 'girl');
                }); 
            } else if (event.target.classList.contains('chef')) {
                image.forEach(function(elem) {
                    check(elem, 'chef');
                }); 
            } else if (event.target.classList.contains('grandmother')) {
                image.forEach(function(elem) {
                    check(elem, 'grandmother', 1);
                }); 
            } else if (event.target.classList.contains('granddad')) {
                image.forEach(function(elem) {
                    check(elem, "granddad", 1);
                }); 
            } else if (event.target.classList.contains('guy')) {
                image.forEach(function(elem) {
                    check(elem, 'guy');
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