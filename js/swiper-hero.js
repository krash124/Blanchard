document.addEventListener("DOMContentLoaded", function () {

  const swiper = new Swiper('.hero__swiper', {
    loop: true,
    speed: 10000,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  })


})