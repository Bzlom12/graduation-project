function form() {
    let message = {
        loadind: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let sendForm = function (a) {
        let form = document.querySelector(a),
            input = form.getElementsByTagName("input"),
            statusMessage = document.createElement('div');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form),
                obj = {};
    
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj),
        request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.send(json);
        request.addEventListener('readystatechange', function() {
            function postData() {
                    let promise = new Promise(function(resolve, reject) { 
                        if (request.readyState < 4) {
                            resolve(message.loadind);    
                        } else if (request.readyState === 4 && request.status == 200) {
                                resolve(message.success);
                        } else {
                                reject();
                        }    
                    }); 
                    return promise;     
            }
            postData().then(function() {
                statusMessage.innerHTML = message.success;
            }).catch(function() {
                statusMessage.innerHTML = message.failure;
            }).then(clearInput);
        }); 
    });
 
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
    };     
    sendForm('.formDesine');
    sendForm('.formCons');
    sendForm('.mainForm');
    
    // check form
    function validForm(b, c) {
        let a = document.getElementById(b);
        let value = a.value;
        a.addEventListener("input", function(e) {
            let reg = c;     
            let value2 = e.target.value;   
                if (!value2.match(reg)) {
                    a.value = value2;
                    return false;
                } else {
                    a.value = value;
                    return false;
                }    
        });
    }

    validForm('phone', /[^\d\+]/g);
    validForm('phone2', /[^\d\+]/g);
    validForm('name', /[^а-я]/ig);
    validForm('comment', /[^а-я\s]/ig);
    validForm('comment3', /[^а-я\s]/ig);
    validForm('name2', /[^а-я]/ig);
    validForm('name3', /[^а-я]/ig);
    validForm('phone3', /[^\d\+]/g);

}

module.exports = form;