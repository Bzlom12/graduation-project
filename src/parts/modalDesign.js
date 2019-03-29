function modalDesign() {
    
    let button = document.querySelectorAll('.button-design'),
        modal = document.querySelector('.popup-design'),
        close = document.getElementById('close');


    button.forEach(function(item) {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; 
    }
    
    close.addEventListener('click', function() {
          closeModal();
    });
    modal.addEventListener('click', function() {
        closeModal();
    });
}

module.exports = modalDesign;