document.addEventListener("DOMContentLoaded", function () {

  new Accordion('.accordion-js', {
    duration: 400,
    openOnInit: [0]
  });

  // Accordion

  // $( function() {
  //   $( ".accordion-js" ).accordion({
  //     icons: false,
  //     heightStyle: "content",
  //     collapsible: true,
  //     active: 0,
  //   });     
  // });

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

  (() => {
    const MOBILE_WIDTH = 961;
  
    function getWindowWidth () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }
  
    function scrollToContent (link, isMobile) {
      if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
        return;
      }
  
      const href = link.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
  
      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
    }
  
    document.querySelectorAll('.catalog__accordion-name').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
  
          scrollToContent(this, true);
      });
    });
  })();


});

