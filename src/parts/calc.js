function calc() {

    let total = 0,
        size = document.getElementById('size'),
        material = document.getElementById('material'),
        options = document.getElementById('options'),
        sizeSum = 0,
        materialSum = 0,
        optionSum = 0,
        calcPrise = document.querySelector('.calc-price');
        

    size.addEventListener('change', function() {
        sizeSum = +this.options[this.selectedIndex].value;
        total = sizeSum + materialSum;
        if (sizeSum == 0 || materialSum == 0) {
            calcPrise.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else {
            calcPrise.textContent = total;
        }
    });
    
    material.addEventListener('change', function() {
        materialSum = +this.options[this.selectedIndex].value;
        total = sizeSum + materialSum;
        if (sizeSum == 0 || materialSum == 0) {
            calcPrise.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else {
            calcPrise.textContent = total;
        }
    });

    options.addEventListener('change', function() {
        
       
    });
    
}

module.exports = calc;