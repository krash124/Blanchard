document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll('.menu__simplebar').forEach(dropdown => {
    new SimpleBar(dropdown, {
      autoHide: false,
    })
  })

})
