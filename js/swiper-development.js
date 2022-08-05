document.addEventListener("DOMContentLoaded", function () {

  const swiperDevelopment = new Swiper ('.dev__swiper', {

    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,

    pagination: {
      el: '.dev__swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2
      },

      900: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 2,
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

    // Отключение кнопок

    on: {
      init: function() {
        checkArrow();
      },
      resize: function () {
        checkArrow();
      }
    }

  });

  function checkArrow() {
    const swiperPrev = document.querySelector('.dev__swiper-prev');
    const swiperNext = document.querySelector('.dev__swiper-next');
    const pag = document.querySelector('.dev__swiper-pagination');
    if ( window.innerWidth > 1650  ) {
      console.log('Success', window.innerWidth);
      swiperPrev.style.display = 'block';
      swiperNext.style.display = 'block';
      pag.style.display = 'none'
    } else {
      swiperPrev.style.display = 'none';
      swiperNext.style.display = 'none';
      pag.style.display = 'block'
    }
  }

  
})