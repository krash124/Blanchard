document.addEventListener("DOMContentLoaded", function () {

  setBurger ({
    btnClass: "header__top-burger",
    navClass: "header__nav-container",
    activeClass: "is-opened",
    hiddenClass: "is-closed",
    itemClass: "nav__item-link"
  });

  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const nav = document.querySelector(`.${params.navClass}`);
    const item = nav.querySelectorAll(`.${params.itemClass}`)
    
    btn.setAttribute('aria-expanded', false);
  
    nav.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });
  
    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);
  
      if (
        !nav.classList.contains(params.activeClass) &&
        !nav.classList.contains(params.hiddenClass)
      ) {
        nav.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', true);
      } else {
        nav.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.setAttribute('aria-expanded', false);
      }
    });

    item.forEach((link) => {
      link.addEventListener('click', function () {
        if (
          !nav.classList.contains(params.activeClass) &&
          !nav.classList.contains(params.hiddenClass)
        ) {
          nav.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
          btn.setAttribute('aria-expanded', true);
        } else {
          nav.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          btn.setAttribute('aria-expanded', false);
          btn.classList.toggle(params.activeClass);
        }
      })
    });
  }

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