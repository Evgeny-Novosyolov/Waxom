/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {


  'use strict';


  (function () {

    let tab = document.querySelectorAll('.project__link'),
      filterOneAll = document.querySelectorAll('.project__block > div:not(.filterOne)'),
      filterOne = document.querySelectorAll('.filterOne'),
      filterTwoAll = document.querySelectorAll('.project__block > div:not(.filterTwo)'),
      filterTwo = document.querySelectorAll(' .project__block .filterTwo'),
      filterThreeAll = document.querySelectorAll(' .project__block > div:not(.filterThree)'),
      filterThree = document.querySelectorAll(' .project__block .filterThree'),
      filterFourthAll = document.querySelectorAll(' .project__block > div:not(.filterFourth)'),
      filterFourth = document.querySelectorAll('.project__block .filterFourth'),
      filterAll = document.querySelectorAll(' .project__block > div');

    tab[1].addEventListener('click', function () {
      let all = filterOneAll,
        elem = filterOne;
      if (elem[0].classList.contains('none')) {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));
         elem.forEach((item) => item.classList.add('element-animation'));
        
        let  funcOne = function() {
           elem.forEach((item) => item.classList.remove('element-animation'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcOne, 800);

      } else {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));

        let  funcTwo = function() {
          all.forEach((item) => item.classList.remove('zoomOutDown'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcTwo, 800);
      }

      function funcThree() {
        all.forEach((item) => item.classList.remove('zoomOutDown'));
      }
      setTimeout(funcThree, 800);
    });






    tab[2].addEventListener('click', function () {
      let all = filterTwoAll,
         elem = filterTwo;

      if (elem[0].classList.contains('none')) {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));
         elem.forEach((item) => item.classList.add('element-animation'));

        let funcOne = function() {
           elem.forEach((item) => item.classList.remove('element-animation'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcOne, 800);

      } else {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));

        let  funcTwo = function() {
          all.forEach((item) => item.classList.remove('zoomOutDown'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcTwo, 800);
      }

      function funcThree() {
        all.forEach((item) => item.classList.remove('zoomOutDown'));
      }
      setTimeout(funcThree, 800);
    });


    tab[3].addEventListener('click', function () {
      let all = filterThreeAll,
         elem = filterThree;

      if (elem[0].classList.contains('none')) {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));
         elem.forEach((item) => item.classList.add('element-animation'));

        let  funcOne = function() {
           elem.forEach((item) => item.classList.remove('element-animation'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcOne, 800);

      } else {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));

        let funcTwo = function() {
          all.forEach((item) => item.classList.remove('zoomOutDown'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcTwo, 800);
      }

      function funcThree() {
        all.forEach((item) => item.classList.remove('zoomOutDown'));
      }
      setTimeout(funcThree, 800);
    });

    tab[4].addEventListener('click', function () {
      let all = filterFourthAll,
         elem = filterFourth;

      if (elem[0].classList.contains('none')) {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));
         elem.forEach((item) => item.classList.add('element-animation'));

        let funcOne = function() {
           elem.forEach((item) => item.classList.remove('element-animation'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcOne, 800);

      } else {
        all.forEach((item) => item.classList.add('zoomOutDown'));
         elem.forEach((item) => item.classList.remove('none'));

        let funcTwo = function() {
          all.forEach((item) => item.classList.remove('zoomOutDown'));
          all.forEach((item) => item.classList.add('none'));
        };
        setTimeout(funcTwo, 800);
      }

      function funcThree() {
        all.forEach((item) => item.classList.remove('zoomOutDown'));
      }
      setTimeout(funcThree, 800);
    });

    tab[0].addEventListener('click', function () {
      filterAll.forEach((item) => item.classList.remove('none'));
      filterAll.forEach((item) => item.classList.add('element-animation'));

      function func() {
        filterAll.forEach((item) => item.classList.remove('element-animation'));
      }
      setTimeout(func, 800);
    });
  }());

});