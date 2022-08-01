document.addEventListener("DOMContentLoaded", function () {

  const swiperProjects = new Swiper ('.projects__swiper', {

    navigation: {
      nextEl: '.projects__swiper-next',
      prevEl: '.projects__swiper-prev',
    },

    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 50,
      },

      900: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    a11y: false,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    watchSlidesProgress: true, // added class swiper-slide-visible


    on: {
      init: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('swiper-slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('swiper-slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }
  })

})
