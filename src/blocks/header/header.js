/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {


  'use strict';

  (function () {

    let sliderIndex = 1,
      slides = document.querySelectorAll('.content-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.dots__list'),
      dots = document.querySelectorAll('.dot');

    showSlides(sliderIndex);

    function showSlides(n) {

      if (n > slides.length) {
        sliderIndex = 1;
      }

      if (n < 1) {
        sliderIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');
      // for (let i = 0; i < slider.length; i++){
      //   slider[i].style.display = 'none';
      // };

      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[sliderIndex - 1].style.display = 'block';
      dots[sliderIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
      showSlides(sliderIndex += n);
    }

    function currentSlide(n) {
      showSlides(sliderIndex = n);
    }

    prev.addEventListener('click', function () {
      plusSlides(-1);
    });

    next.addEventListener('click', function () {
      plusSlides(1);
    });

    dotsWrap.addEventListener('click', function () {
      for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
          currentSlide(i);
        };
      };
    });
  }());
});