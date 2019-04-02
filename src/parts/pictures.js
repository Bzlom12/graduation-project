function pictures() {
    let block = document.querySelectorAll('.sizes-block'),
        // el = document.querySelector('.size-1'),
        size = document.querySelector('.sprice2'),
        startPrice = document.querySelector('.starting-price'),
        finalPrice = document.querySelector('.final-price');

        

        block[0].addEventListener("mouseover", function() {
            changeImgOn("img/sizes-1-1.png",".size-1","size1", 'sprice1', 'fprice1');
        });
        block[0].addEventListener("mouseout", function() {
            changeImgOff("img/sizes-1.png",".size-1","size1", 'sprice1', 'fprice1');
        });
    
        block[1].addEventListener("mouseover", function() {
            changeImgOn("img/sizes-2-1.png",".size-2","size2", 'sprice2', 'fprice2');
        });
        block[1].addEventListener("mouseover", function() {
            changeImgOff("img/sizes-2.png",".size-2","size2", 'sprice2', 'fprice2');
        });

        block[2].addEventListener("mouseover", function() {
            changeImgOn("img/sizes-3-1.png",".size-3","size3", 'sprice3', 'fprice3');
        });
        block[2].addEventListener("mouseover", function() {
            changeImgOff("img/sizes-3.png",".size-3","size3", 'sprice3', 'fprice3');
        });

        block[3].addEventListener("mouseover", function() {
            changeImgOn("img/sizes-4-1.png",".size-4","size4", 'sprice4', 'fprice4');
        });
        block[3].addEventListener("mouseover", function() {
            changeImgOff("img/sizes-4.png",".size-4","size4", 'sprice4', 'fprice4');
        });

    function changeImgOn(img, sel, selec1, selec2, selec3) {
    let el = document.querySelector(sel),
        el1 = document.getElementById(selec1),
        el2 = document.getElementById(selec2),
        el3 = document.getElementById(selec3);
        
        el.src = img;
        el1.style.display = 'none';
        el2.style.display = 'none';
        el3.style.display = 'none';
    }
    function changeImgOff(img, sel, selec1, selec2, selec3) {
    let el = document.querySelector(sel),
        el1 = document.getElementById(selec1),
        el2 = document.getElementById(selec2),
        el3 = document.getElementById(selec3);

        el.src = img;
        el1.style.display = 'block';
        el2.style.display = 'block';
        el3.style.display = 'block';
    }
    
    
            // .size.style.display = 'none';
            // .startPrice.style.display = 'none';
            // .finalPrice.style.display = 'none';
   

}

module.exports = pictures;