function modal() {
    //modal design
    let buttonDesign = document.querySelectorAll('.button-design'),
        modalDesign = document.querySelector('.popup-design'),
        close = document.getElementById('close');

    function openModal(a) {
        a.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal(a) {
        a.style.display = 'none';
        document.body.style.overflow = ''; 
    }

    buttonDesign.forEach((item) => {
        item.addEventListener('click', () => {
            openModal(modalDesign);
        });
    });
 
    close.addEventListener('click', () =>  closeModal(modalDesign));
    modalDesign.addEventListener('click', () => closeModal(modalDesign));

    //modal consultation
    let btnConsultation = document.querySelectorAll('.button-consultation'),
        modalConsultation = document.querySelector('.popup-consultation'),
        closeConsultation =document.getElementById('close2');

    btnConsultation.forEach((item) => {
        item.addEventListener('click', () => openModal(modalConsultation));
    });

    closeConsultation.addEventListener('click', () => closeModal(modalConsultation));
    modalConsultation.addEventListener('click', () => closeModal(modalConsultation));

    //gift
    let btnGift = document.querySelector('.fixed-gift'),
        modalGift = document.querySelector('.popup-gift'),
        closeGift = document.getElementById('close3');

    btnGift.addEventListener('click', () => openModal(modalGift));

    closeGift.addEventListener('click', () => {
        closeModal(modalGift);
        btnGift.style.display = 'none';
    });
    modalGift.addEventListener('click', () => {
        closeModal(modalGift);
        btnGift.style.display = 'none';
    });

    //gift scroll down

    function checkScroll() {
        if (window.scrollY == 12138) {
            openModal(modalGift);
            clearInterval(timer);
        }
    }
    let timer = setInterval(checkScroll, 1000);
    
}

module.exports = modal;