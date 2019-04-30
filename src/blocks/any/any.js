/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {


  'use strict';

  let textHidden = document.querySelector('.text-hidden'),
    buttonOpen = document.querySelector('.any-box__button'),
    btn = document.querySelectorAll('.button');


  buttonOpen.addEventListener('click', function () {
    if (textHidden.classList.contains("text-hidden")) {
      textHidden.classList.remove('text-hidden');
      textHidden.classList.add('text-hidden--open');
      buttonOpen.innerHTML = "Сlose";
    } else {
      textHidden.classList.remove('text-hidden--open');
      textHidden.classList.add('text-hidden');
      buttonOpen.innerHTML = "Read More";
    }

  });

});