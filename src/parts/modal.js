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
    modalDesign.addEventListener('click', (event) => {
        if (event.target == modalDesign) {
            closeModal(modalDesign);
        }
    });

    //modal consultation
    let btnConsultation = document.querySelectorAll('.button-consultation'),
        modalConsultation = document.querySelector('.popup-consultation'),
        closeConsultation =document.getElementById('close2');

    btnConsultation.forEach((item) => {
        item.addEventListener('click', () => openModal(modalConsultation));
    });

    closeConsultation.addEventListener('click', () => closeModal(modalConsultation));
    modalConsultation.addEventListener('click', (event) => {
        if (event.target == modalConsultation) {
            closeModal(modalConsultation);
        }
    });

    //gift
    let btnGift = document.querySelector('.fixed-gift'),
        modalGift = document.querySelector('.popup-gift'),
        closeGift = document.getElementById('close3');

    btnGift.addEventListener('click', () => openModal(modalGift));

    closeGift.addEventListener('click', () => {
        closeModal(modalGift);
        btnGift.style.display = 'none';
    });

    modalGift.addEventListener('click', (event) => {
        if (event.target == modalGift) {
            closeModal(modalGift);
            btnGift.style.display = 'none';
        }    
    });

    //gift scroll down
    function checkScroll() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
            ),
            b = window.pageYOffset, 
            dif = scrollHeight - b;

        if (dif < 1000) {
            openModal(modalGift);
            clearInterval(timer);
        }
    }    
    let timer = setInterval(checkScroll, 1000);
    
    // modal after 60sec
    let sec = 0;
    function sixtySec() {
        if (sec == 60 && modalDesign.style.display == '' && modalConsultation.style.display == '' 
            && modalGift.style.display == '') {
            openModal(modalConsultation);
            clearInterval(time);
        } 
        sec++;
    }
    let time = setInterval(sixtySec, 1000);

}

module.exports = modal;