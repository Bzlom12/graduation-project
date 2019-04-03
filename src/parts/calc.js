function calc() {

    let total = 0,
        size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        btnCalc = document.querySelector('.button-calc'),
        sizeSum = 0,
        materialSum = 0,
        optionSum = 0,
        calcPrise = document.querySelector('.calc-price'),
        promocode = document.querySelector('.promocode'),
        value;
        
    btnCalc.addEventListener('click', function() {
        event.preventDefault();
    });
        
    size.addEventListener('change', function() {
        sizeSum = +this.options[this.selectedIndex].value;
        calcTotal(sizeSum, materialSum, optionSum, value);

    });
    
    material.addEventListener('change', function() {
        materialSum = +this.options[this.selectedIndex].value;
        calcTotal(sizeSum, materialSum, optionSum, value);
    });

    options.addEventListener('change', function() {
        optionSum = +this.options[this.selectedIndex].value;
        calcTotal(sizeSum, materialSum, optionSum, value);

    });

    promocode.addEventListener('change', function(e) {
        value = e.target.value;
        calcTotal(sizeSum, materialSum, optionSum, value);
    });

    let calcTotal = function(a, b, c, d) {
        let reg = /IWANTPOPART/i;
        total = a + b + c;
        if (a == 0 || b == 0) {
            calcPrise.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else if (a != 0 && b != 0 && value != undefined) {
            if (d.match(reg)) {
                total = total*0.7;
                calcPrise.textContent = total;
            } else {
                calcPrise.textContent = total;
            } 
        } else if (a != 0 && b != 0) {
            calcPrise.textContent = total;
        }
    };

}

module.exports = calc;