document.addEventListener("DOMContentLoaded", function () {

  // Burger

  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.header__nav-container');
  const navLinck = document.querySelectorAll('.nav__item-link');
  const lockScroll = document.body;

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-opened');
    overlay.classList.toggle('is-opened');
    lockScroll.classList.toggle('lock')
  });

  navLinck.forEach(function(event) {
    event.addEventListener('click', function() {
      burger.classList.remove('is-opened');
      overlay.classList.remove('is-opened');
      lockScroll.classList.remove('lock')
    })
  });

  document.getElementById('burger-mobile').addEventListener('click', () => {
    document.getElementById('nav-btn').focus()
  })


  // Search

  setSearch ({
    openBtnClass: "header__btn-mobile",
    closeBtnClass: "mobile-form__btn-close",
    searchClass: "header__mobile-form",
    activeClass: "is-opened",
    hiddenClass: "is-closed"
  });

  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = document.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener('click', function (evt) {
      evt._isSearch = true;
    });

    openBtn.addEventListener('click', function (evt) {
      this.disabled = true;

      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });

    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }



})