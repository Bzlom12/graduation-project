function block() {
    let btn = document.getElementsByClassName('button-transparent')[0],
        element = document.querySelectorAll('.styles-block');
       
    btn.addEventListener('click', function() {
        btn.style.display = 'none';
    });



}

module.exports = block;