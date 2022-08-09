document.addEventListener("DOMContentLoaded", function () {

  type = "text/javascript" >
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [55.75913354267484,37.60104558465566],
      zoom: 15,
      controls: ['geolocationControl', 'zoomControl'],
    },
    {
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      zoomControlSize: "small",
      zoomControlPosition: { top: "120px", right: "20px" }
    });

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
      [55.75846806898367,37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/map-marker.svg",
        iconImageSize: [20, 20],
        // iconImageOffset: [-20, -40],
        
      },
      {
        preset: "islands#yellowStretchyIcon",
        // Отключаем кнопку закрытия балуна.
        balloonCloseButton: false,
         // Балун будем открывать и закрывать кликом по иконке метки.
        hideIconOnBalloonOpen: false
      }
    );
    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();

  }



})
