document.addEventListener("DOMContentLoaded", function () {

  // new Accordion('.accordion-js', {
  //   duration: 400,
  //   openOnInit: [0]
  // });

  // Accordion

  $( function() {
    $( ".accordion-js" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: 0,
    });     
  });

  // Tubs

  setTabs('data-catalog-path', 'data-catalog-target');

  function setTabs (dataPath, dataTarget) {
    const btns = document.querySelectorAll(`.catalog__accordion-name[${dataPath}]`);
    const contents = document.querySelectorAll(`.catalog__tabs-content[${dataTarget}]`);

    btns.forEach((btn) => {
      btn.addEventListener('click',function (e) {
        const path = this.getAttribute(dataPath);
        const target = document.querySelector(`.catalog__tabs-content[${dataTarget}="${path}"]`);
        
        btns.forEach((currentBtn) => {
          currentBtn.classList.remove('catalog__accordion-name--active');

          this.classList.add('catalog__accordion-name--active');

          contents.forEach((content) => {
            content.classList.remove('catalog__tabs-content--active');
          });

          target.classList.add('catalog__tabs-content--active');
        });
      });
    });
  };
});

