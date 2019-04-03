function menu() {
    let btn = document.querySelector('.burger');
        menuItem = document.querySelector('.burger-menu');


    window.addEventListener('resize', () => {
        if (document.body.clientWidth < 768) {
            btn.addEventListener('click', function() {
                if (menuItem.classList.contains('active-y')) {
                    menuItem.classList.remove('active-y');
                } else {
                    menuItem.classList.add('active-y');
                }
            });
        } else {
            menuItem.style.display = 'none';
        }
    });
}

module.exports = menu;