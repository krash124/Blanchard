document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelectorAll('.gallery__slide');
  const modalOverlay = document.querySelector('.gallery__modals-overlay');
  const modalWindow = document.querySelectorAll('.gallery__modals-window');

  btn.forEach(el => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');

      modalWindow.forEach(el => {
        el.classList.remove('gallery__modals-window--visible')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modals-window--visible');
      modalOverlay.classList.add('gallery__modals-overlay--visible');
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('gallery__modals-overlay--visible');
      modalWindow.forEach(el => {
        el.classList.remove('gallery__modals-window--visible');
      });
    }
  });

  // Button

  document.querySelector('.gallery-btn-exit').addEventListener('click', function() {
    document.querySelector('.gallery__modals-overlay').classList.remove('gallery__modals-overlay--visible');
    document.querySelector('.gallery__modals-window').classList.remove('gallery__modals-window--visible');
  })

  

})
