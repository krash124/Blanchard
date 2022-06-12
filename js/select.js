document.addEventListener("DOMContentLoaded", function () {

  const element = document.querySelector('.select-js');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
  });

})
