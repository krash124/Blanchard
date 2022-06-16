document.addEventListener("DOMContentLoaded", function () {

  // new Accordion('.accordion-js', {
  //   duration: 400,
  //   openOnInit: [0]
  // });



  $( function() {
    $( ".accordion-js" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: 0,
    });     
  });


})