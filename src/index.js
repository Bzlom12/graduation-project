import 'promise-polyfill/src/polyfill';
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', function() {

    "use strict";
    let modal = require('./parts/modal.js'),
        calc = require('./parts/calc.js'),
        mainSlide = require('./parts/slider.js'),
        block = require('./parts/block.js'),
        form = require('./parts/form.js');

    modal();
    calc();
    mainSlide();
    block();
    form();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
}