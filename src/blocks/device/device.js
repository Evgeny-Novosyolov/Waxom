/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {


  'use strict';
  
  (function () {
    let divTitle = document.querySelectorAll('.device-list__title'),
    divText = document.querySelectorAll('.device-list__text');


    function showDevice() {

      for (let i = 0; i < divTitle.length; i++) {
        divTitle[i].onclick = function () {
          divText.forEach((item) => item.classList.remove('device-list__text--open'));
          divText[i].classList.add('device-list__text--open');
        };
      }

    }
    showDevice();

  }());

});