import 'promise-polyfill/src/polyfill';
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', function() {

    "use strict";
    console.log('good');
    let modal = require('./parts/modal'),
        calc = require('./parts/calc');

    modal();
    calc();
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