document.addEventListener("DOMContentLoaded", function () {

  const swiperDevelopment = new Swiper ('.dev__swiper', {

    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    navigation: {
      nextEl: '.dev__swiper-next',
      prevEl: '.dev__swiper-prev',
    },

    a11y: false,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  })

  
})