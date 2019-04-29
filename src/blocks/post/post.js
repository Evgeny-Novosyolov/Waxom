/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {


  'use strict';
  (function () {
    let sliderIndex = 1,
      sliderIndexTwo = 2,
      sliderIndexThree = 3,
      slidesItem = document.querySelectorAll('.post__item'),
      // slidesitem = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.post__button--prev'),
      next = document.querySelector('.post__button--next');


    showSlides(sliderIndex);

    function showSlides(n) {
      if (n > slidesItem.length) {
        sliderIndex = 1;
      }
      if (n < 1) {
        sliderIndex = slidesItem.length;
      }
      slidesItem.forEach((item) => item.classList.remove('post__item--left'));
      slidesItem[sliderIndex - 1].classList.add('post__item--left');
    }


    showSlidesTwo(sliderIndexTwo);

    function showSlidesTwo(n) {
      if (n > slidesItem.length) {
        sliderIndexTwo = 1;
      }
      if (n < 1) {
        sliderIndexTwo = slidesItem.length;
      }
      slidesItem.forEach((item) => item.classList.remove('post__item--center'));
      slidesItem[sliderIndexTwo - 1].classList.add('post__item--center');
      //   function showitem() {
      //   for (let i = 0; i < slidesItem.length; i++) {
      //     if (slidesItem[i].classList.contains('post__item--open')){
      //      slidesitem.forEach((item) => item.classList.remove('post__item--openn'));
      //      slidesitem[i].classList.add('slider-item--open');
      //     }
      //   }

      // }
      // showitem();       
    }


    showSlidesThree(sliderIndexThree);

    function showSlidesThree(n) {
      if (n > slidesItem.length) {
        sliderIndexThree = 1;
      }
      if (n < 1) {
        sliderIndexThree = slidesItem.length;
      }
      slidesItem.forEach((item) => item.classList.remove('post__item--right'));
      slidesItem[sliderIndexThree - 1].classList.add('post__item--right');
    }






    function plusSlides(n) {
      showSlides(sliderIndex += n);
      showSlidesTwo(sliderIndexTwo += n);
      showSlidesThree(sliderIndexThree += n);
    }

    function currentSlide(n) {
      showSlides(sliderIndex = n);
      showSlidesTwo(sliderIndexTwo = n);
      showSlidesThree(sliderIndexThree = n);
    }

    prev.addEventListener('click', function () {
      plusSlides(-1);
    });

    next.addEventListener('click', function () {
      plusSlides(1);
    });
  }());


});