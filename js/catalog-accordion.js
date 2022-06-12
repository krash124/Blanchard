document.addEventListener("DOMContentLoaded", function () {

  new Accordion('.accordion-js', {
    duration: 400,
    showMultiple: true,
    onOpen: function(currentElement) {
      console.log(currentElement);
    }
  });

})