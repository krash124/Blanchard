document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll('.gallery__simplebar').forEach(modal => {
    new SimpleBar(modal, {
      autoHide: false,
    })
  })

})