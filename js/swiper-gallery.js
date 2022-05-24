document.addEventListener("DOMContentLoaded", function () {
  const swiperGallery = new Swiper ('.gallery__swiper', {
    
    pagination: {
      el: ".gallery__swiper-number",
      type: "fraction"
    },

    navigation: {
      nextEl: '.gallery__swiper-next',
      prevEl: '.gallery__swiper-prev',
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
        spaceBetween: 30,
        slidesPerGroup: 2,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },
  })
})