document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelectorAll('.gallery__slide');
  const modalOverlay = document.querySelector('.gallery__modals-overlay');
  const modalWindow = document.querySelectorAll('.gallery__modals-window');
  const modalCloseBtn = document.querySelectorAll('.gallery-btn-exit');

  // const $scrollableElement = document.querySelector('.gallery__modals-descr');
  

  btn.forEach(el => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modalWindow.forEach(el => {
        el.classList.remove('gallery__modals-window--visible')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modals-window--visible');
      modalOverlay.classList.add('gallery__modals-overlay--visible');
      // scrollLock.disablePageScroll();
      document.body.style.overflow = 'hidden';
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('gallery__modals-overlay--visible');
      modalWindow.forEach(el => {
        el.classList.remove('gallery__modals-window--visible');
        // scrollLock.enablePageScroll();
        document.body.style.overflow = 'auto';
      });
    };
  });

  // Button

  modalCloseBtn.forEach(function(close) {
    close.addEventListener('click', function() {

      modalWindow.forEach(el => {
        el.classList.remove('gallery__modals-window--visible');
        document.body.style.overflow = 'auto';
      });

      modalOverlay.classList.remove('gallery__modals-overlay--visible');
      // scrollLock.enablePageScroll();
    });
  });

  // Filters

  function checked() {
    const check = document.querySelector('.check-input');
    if (!check.checked) check.checked = true;
  }
  checked();

});
