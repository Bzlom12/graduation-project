function menu() {
    let btn = document.querySelector('.burger');
        menuItem = document.querySelector('.burger-menu');

    window.addEventListener('resize', () => {
        if (document.body.clientWidth < 768) {
            btn.addEventListener('click', function() {
                menuItem.style.display = 'block';
            });
        } else {
            menuItem.style.display = 'none';
        }
    });
}

module.exports = menu;