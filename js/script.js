document.addEventListener("DOMContentLoaded", function () {

  // Menu Dropdown

  const btns = document.querySelectorAll(".menu__btn");
  const dropdowns = document.querySelectorAll(".dropdown");
  const activebtns = "menu__btn-active";
  const activedropdowns = "menu__dropdown-active";

  btns.forEach(item => {
    item.addEventListener("click", function () {
      let DropThis =
        this.parentElement.querySelector(".dropdown");
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activedropdowns)
        }
      });

      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activebtns)
        }
      });

      DropThis.classList.toggle(activedropdowns);
      this.classList.toggle(activebtns);

    })
  })

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.closest('.menu__item')) {
      document.querySelectorAll('.dropdown').forEach((el) => {
        el.classList.remove('menu__dropdown-active');
      });
      document.querySelectorAll('.menu__btn').forEach((el) => {
        el.classList.remove('menu__btn-active'); 
      })
    }
  })

  // SimpleBar 

  document.querySelectorAll(".menu__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
      autoHide: false,
    })
  })


  // Swiper Hero

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
