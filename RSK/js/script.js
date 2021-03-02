window.addEventListener('DOMContentLoaded', function() {

  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  const swiper1 = new Swiper('.sertificates-container', {
    speed: 400,
    slidesPerView: 6,
    slidesPerGroup: 1,
    pagination: {
      el: '.sertificates-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      319: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      600: {
        slidesPerView: 3,
        slidesPerGroup: 2
      },
      820: {
        slidesPerView: 4,
        slidesPerGroup: 2
      },
      992: {
        slidesPerView: 5,
        slidesPerGroup: 1
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 1
      }
    }
  });

  //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.footer__wrapper').children('.map-loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;

  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;footer__map&#34;
  function init () {
    var myMapTemp = new ymaps.Map("footer__map", {
      center: [45.050004, 38.984368], // координаты центра на карте
      zoom: 17, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([45.050004, 38.984368], {
        balloonContent: "улица Коммунаров, 270",
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/footer/map-marker.png',
        // Размеры метки.
        iconImageSize: [50, 50],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");

    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;footer__wrapper&#34;
  var ymap = function() {
    $('.footer__wrapper').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

  	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true;

  		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');

  		// Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
             // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;footer__map&#34;
             ymaps.load(init);
          });
        }
      }
    );
  }

  $(function() {

    //Запускаем основную функцию
    ymap();

  });

});
