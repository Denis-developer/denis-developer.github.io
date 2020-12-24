
    (function () {

  // Максимальное количество видов (моделей, разновидностей, цветов и т.п.) товара в одном заказе
  var maxKinds = 1;

  // Максимальное количество товара одного вида в заказе
  var maxItems = 1;

  // Список имён "покупателей". В зависимости от оффера можно делать упор на те или иные национальности ;-)
  var names = {
    men: [
    'Антон ','Денис ','Тимофей ','Ярослав ','Сергей','Роман ','Алексей ','Илья ','Андрей','Владимир ','Матвей ','Егор','Михаил','Никита','Кирилл','Иван','Владимир','Дмитрий'    
    ],
    women: [
    'Анастасия','Алена','Алиса','Арина','Вероника','Александра','Кристина','Валерия','Ксения','Екатерина','Елизавета','Полина','Виктория','Анна','Мария','Дарья','Анастасия','София '    
    ]
};

  // Список товаров
  var goods = ['32 см со штативом 250 см', '26 см со штативом 250 см', '16 см со штативом 250 см', '16 см со штативом 110 см'];

  // 

  // Единица измерения товара
  var measure = 'шт.';

  // Цвет текста (и иконок) попапов
  var textColor = '#ffffff';

  // Цвет фона попапов
  var backgroundColor = '#da29a6';

  // Скругление углов попапов
  var borderRadius = '4px';

  var html = '' +
  '<div class="notification notification--top-right js-orders">' +
  '  <div class="notification__icon">' +
  '    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="50px" height="50px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">' +
  '      <g>' +
  '        <path d="M990,249.3c0-15-12.5-27.6-27.6-27.6c-4,0-8,0-12,0c0,0-0.1,0-0.1,0c-33.7,0-67.5,0-101.2,0c-83.7,0-167.4,0-251.1,0c-85.1,0-170.3,0-255.4,0c-35.6,0-71.2,0-106.8,0c-9.5-32.7-18.9-65.3-28.4-98c-2.2-7.5-4.3-15-6.5-22.4c-3.4-11.8-14.2-20.3-26.6-20.3c-45.6,0-91.1,0-136.7,0c-15,0-27.6,12.5-27.6,27.6c0,15,12.5,27.6,27.6,27.6c38.7,0,77.3,0,116,0c10.2,35,20.3,70.1,30.5,105.1c16.6,57.3,33.2,114.5,49.8,171.8c0.3,3.9,1.4,7.5,3.1,10.8c6.9,23.6,13.7,47.3,20.6,70.9c19.1,66,38.3,131.9,57.4,197.9c2.2,7.5,4.3,15,6.5,22.4c3.4,11.8,14.2,20.3,26.6,20.3c49.6,0,99.2,0,148.8,0c87.6,0,175.3,0,262.9,0c35.9,0,71.9,0,107.8,0c15,0,27.6-12.5,27.6-27.6c0-15-12.5-27.6-27.6-27.6c-49.6,0-99.2,0-148.8,0c-87.6,0-175.3,0-262.9,0c-29,0-58.1,0-87.1,0c-7.5-25.8-15-51.6-22.5-77.5c36.2,0,72.3,0,108.5,0c88.4,0,176.8,0,265.1,0c40.7,0,81.4,0,122.1,0c0,0,0.1,0,0.1,0c3.4,0,6.9,0,10.3,0c15,0,27.6-12.5,27.6-27.6c0-5.6-1.7-10.9-4.7-15.2c17.7-52.2,35.3-104.4,53-156.7c14.4-42.7,28.9-85.4,43.3-128.1C982.2,271.4,990,261.1,990,249.3z M912.9,276.9c-12,35.5-24,71.1-36.1,106.6c-37.8,0-75.5,0-113.3,0c-0.4,0-0.8,0-1.2,0c4.5-35.5,9-71.1,13.5-106.6c19.9,0,39.8,0,59.7,0C861.3,276.9,887.1,276.9,912.9,276.9z M741.5,547.6c4.6-36.3,9.2-72.6,13.8-109c34.3,0,68.6,0,102.9,0c-12.3,36.3-24.6,72.6-36.8,109C794.7,547.6,768.1,547.6,741.5,547.6z M610.6,547.6c0-36.3,0-72.6,0-109c14.6,0,29.1,0,43.7,0c15.3,0,30.5,0,45.8,0c-0.1,0.7-0.2,1.4-0.3,2.1c-4.5,35.6-9,71.2-13.6,106.8C661.1,547.6,635.8,547.6,610.6,547.6z M479.8,547.6c-4.6-36.3-9.2-72.6-13.8-109c29.8,0,59.7,0,89.5,0c0,1.5,0,2.9,0,4.4c0,34.9,0,69.7,0,104.6C530.2,547.6,505,547.6,479.8,547.6z M298.7,438.7c30.7,0,61.4,0,92,0c6.7,0,13.4,0,20.1,0c0.1,0.7,0.2,1.4,0.3,2.1c4.5,35.6,9,71.2,13.6,106.8c-31.4,0-62.9,0-94.3,0C319.8,511.3,309.2,475,298.7,438.7z M610.6,276.9c36.7,0,73.4,0,110,0c-4.5,35.5-9,71.1-13.5,106.6c-32.2,0-64.3,0-96.5,0c0-0.7,0-1.4,0-2.1C610.6,346.6,610.6,311.7,610.6,276.9z M555.5,383.5c-18.5,0-37,0-55.5,0c-13.6,0-27.3,0-40.9,0c-4.5-35.5-9-71.1-13.5-106.6c36.7,0,73.4,0,110,0C555.5,312.4,555.5,348,555.5,383.5z M329,276.9c20.4,0,40.8,0,61.2,0c4.5,35.5,9,71.1,13.5,106.6c-38.2,0-76.4,0-114.7,0c-2.1,0-4.3,0-6.4,0c-6-20.6-12-41.2-17.9-61.8c-4.3-14.9-8.7-29.9-13-44.8C277.5,276.9,303.3,276.9,329,276.9z"></path>' +
  '        <path d="M516.1,841.7c-2.4-39.4-34.1-70.1-74-70.9c-40.9-0.8-73.3,34.5-74.1,74.1c-0.8,40.9,34.5,73.3,74.1,74.1c39.8,0.8,71.5-32.6,74-70.9c0.1-1,0.2-2.1,0.1-3.2C516.2,843.8,516.2,842.7,516.1,841.7z"></path><path d="M847.1,841.7c-2.4-39.4-34.1-70.1-74-70.9c-40.9-0.8-73.3,34.5-74.1,74.1c-0.8,40.9,34.5,73.3,74.1,74.1c39.8,0.8,71.5-32.6,74-70.9c0.1-1,0.2-2.1,0.1-3.2C847.2,843.8,847.2,842.7,847.1,841.7z"/>' +
  '      </g>' +
  '    </svg>' +
  '  </div>' +
  '  <div class="notification__text">' +
  '    Светлана из г. Минск сделала заказ:<br/>' +
  '    Rolls-Royce Phantom - 2шт.<br/>' +
  '    Lamborghini Diablo - 5шт.<br/>' +
  '  </div>' +
  '</div>' +
  '<div class="notification notification--bottom-left js-delivery">' +
  '  <span class="notification__close" title="Закрыть"><svg xmlns="http://www.w3.org/2000/svg" width="11px" height="11px" viewBox="0 0 36 36"><path fill="'+(textColor ? textColor : 'rgba(0, 0, 0, .8)')+'" d="M22.238 18.004l9.883-9.883c1.172-1.171 1.172-3.071 0-4.243-1.172-1.171-3.07-1.171-4.242 0l-9.883 9.883-9.883-9.882c-1.171-1.172-3.071-1.172-4.243 0-1.171 1.171-1.171 3.071 0 4.243l9.883 9.882-9.907 9.907c-1.171 1.171-1.171 3.071 0 4.242.585.586 1.354.879 2.121.879s1.536-.293 2.122-.879l9.906-9.906 9.882 9.882c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879c1.172-1.171 1.172-3.071 0-4.242l-9.881-9.883z"/></svg></span>' +
  '  <span class="notification__text">' +
  '    Действует быстрая доставка в<br>' +
  '    г. <span class="js-geo"> Москва</span>' +
  '  </span>' +
  '</div>' +
  '';

  var css = '' +
  '.notification {' +
  '  z-index: 999999;' +
  '  background-color:' + (backgroundColor ? backgroundColor : 'whitesmoke') +';' +
  '  padding: 1rem 1.5rem;' +
  '  -webkit-box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, .2);' +
  '  -moz-box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, .2);' +
  '  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, .2);' +
  '  transition: opacity .3s ease-in;' +
  '  justify-content: space-between;' +
  '  display: none;' +
  '  opacity: 0;' +
  '}' +
  '@media all and (max-width: 600px) {' +
  '  .notification {' +
  '    width: 100%;' +
  '  }' +
  '}' +
  '@media all and (min-width: 601px) {' +
  '  .notification {' +
  '    -webkit-border-radius: ' + (borderRadius ? borderRadius : '2px') +';' +
  '    -moz-border-radius: ' + (borderRadius ? borderRadius : '2px') +';' +
  '    border-radius: ' + (borderRadius ? borderRadius : '2px') +';' +
  '  }' +
  '}' +
  '.notification--bottom-left {' +
  '  position: fixed;' +
  '  bottom: 0;' +
  '}' +
  '@media all and (min-width: 601px) {' +
  '  .notification--bottom-left {' +
  '    bottom: 20px;' +
  '    left: 20px;' +
  '  }' +
  '}' +
  '.notification--top-right {' +
  '  position: fixed;' +
  '  top: 81px;' +
  '}' +
  '@media all and (min-width: 601px) {' +
  '  .notification--top-right {' +
  '    top: 81px;' +
  '    right: 20px;' +
  '  }' +
  '}' +
  '.notification__icon {' +
  '  margin: auto 1rem auto 0;' +
  '  fill: ' + (textColor ? textColor : 'rgba(0, 0, 0, .8)') + ';' +
  '}' +
  '@media all and (max-width: 600px) {' +
  '  .notification__icon {' +
  '    order: 50;' +
  '  }' +
  '}' +
  '.notification__text {' +
  '  color: ' + (textColor ? textColor : 'rgba(0, 0, 0, .8)') + ';' +
  '  text-shadow: none;' +
  '  font-size: 13px;' +
  '  line-height: 1.5;' +
  '  text-align: left;' +
  '  margin: auto 0;' +
  '}' +
  '.notification__text span {' +
  '  font-size: 13px;' +
  '  color: ' + (textColor ? textColor : 'rgba(0, 0, 0, .8)') + ';' +
  '}' +
  '.notification__close {' +
  '  order: 99;' +
  '  margin: -0.6rem -1rem 0 .6rem;' +
  '  font-size: .75rem;' +
  '  cursor: pointer;' +
  '  color: ' + (textColor ? textColor : 'rgba(0, 0, 0, .8)') + ';' +
  '}' +
  '';

  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
  var markup = document.createElement("div");
  markup.innerHTML = html;
  document.body.appendChild(markup);

  var cities = ['Абакан', 'Абан', 'Абатский', 'Абрамовский маяк', 'Агата', 'Агаякан', 'Агзу', 'Агинское', 'Агинское',
  'Айхал', 'Акша', 'Белая глина', 'Белгород', 'Белово', 'Белогорка', 'Белогорск', 'Белозерск', 'Белый Яр', 'Белый',
  'Бродокалмак', 'Брохово', 'Брянск', 'Бугрино', 'Бугульма', 'Бугуруслан', 'Буденновск', 'Бузулук', 'Буйнакск',
  'Волгоград', 'Волжская ГМО', 'Волово', 'Вологда', 'Волоколамск', 'Волосово', 'Волчиха', 'Воньеган', 'Воркута',
  'Ворогово', 'Воронеж', 'Геленджик', 'Георгиевка', 'Гигант', 'Гижига', 'Глазов', 'Глубинное', 'Джалинда', 'Джана',
  'Джарджан', 'Заметчино', 'Зареченск', 'Заринск', 'Зашеек', 'Заярск', 'Звериноголовское', 'Здвинск', 'Зерноград', 'Зея',
  'Корф', 'Коса', 'Кослан', 'Кострома', 'Котельнич', 'Коткино', 'Котлас', 'Кочево', 'Коченёво', 'Кочки', 'Кочубей', 'Кош-Агач',
  'Мариинск', 'Марково', 'Марресаля', 'Маслянино', 'Матвеев Курган', 'Махачкала', 'Мача', 'Маячный', 'Невинномыск', 'Невьянск',
  'Оймякон', 'Октябрьская', 'Октябрьское', 'Окунев Нос', 'Ола', 'Олекминск', 'Оленек', 'Остров Спафарьева', 'Остров Харлов',
  'Понил', 'Поныри', 'Поронайск', 'Посевная', 'Поспелиха', 'Посьет', 'Пошехонье-Володарск', 'Поярково', 'Псков', 'Пугачев',
  'Саргатское', 'Саров', 'Сарыг-Сеп', 'Саскылах', 'Сасово', 'Светлоград', 'Светлолобово', 'Светлый', 'Свиягино', 'Свободный',
  'Солекуль', 'Солнечная', 'Соловьевск', 'Солонешное', 'Сопочная карга', 'Сортавала', 'Сосновка', 'Сосновка', 'Сочи (Адлер)',
  'Таганрог', 'Таежная', 'Тазовский', 'Тайга', 'Тайгонос', 'Таймылыр', 'Тайшет', 'Таксимо', 'Талая', 'Талон', 'Тальменка',
  'Убинское', 'Угино', 'Углегорск', 'Угловское', 'Угут', 'Удское', 'Уега', 'Ужаниха', 'Ужур', 'Улан-Удэ', 'Улеты',
  'Усть-Кокса', 'Усть-Кулом', 'Усть-Кут', 'Усть-Лабинск', 'Усть-Мая', 'Усть-Миль', 'Усть-Мома', 'Усть-Нюкжа',
  'Хороль', 'Хоседа-Хард', 'Хуларин', 'Хулугли', 'Цакир', 'Целина', 'Целинное', 'Целинное', 'Центральный рудник', 'Цимлянск',
  'Циммермановка', 'Чернушка', 'Чернышевский', 'Черняево', 'Черняховск', 'Черский', 'Чертково', 'Черусти', 'Чистоозерное',
  'Шелопугино', 'Шенкурск', 'Шербакуль', 'Шереметьево', 'Шилка', 'Шимановск', 'Шира', 'Шойна', 'Шумиха', 'Шумиха',
  'Юста', 'Юшкозеро', 'Ягодное', 'Яйлю', 'Яковлевка', 'Якутск', 'Якша', 'Ялуторовск', 'Ямкун', 'Янаул', 'Янискоски',
  'Янов Стан', 'Янск', 'Ярольин', 'Ярославль', 'Ярцево', 'Яшкуль', 'Яя', 'Москва', ' Санкт-Петербург'
  ];
  var showsCounter = 0;
  var userGeo;
  var script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/2.0-stable/?load=package.map&amp;lang=ru-RU';
  if (script.addEventListener) {
    script.addEventListener("load", detectGeo, false);
}
else if (script.readyState) {
    script.onreadystatechange = detectGeo;
}
document.head.appendChild(script);
function detectGeo() {
    ymaps.ready(function () {
      userGeo = ymaps.geolocation.city;
      if (userGeo) {
        var notification = document.querySelector('.js-delivery');
        notification.querySelector('.notification__close').addEventListener('click', function () {
          notification.style.display = 'none';
      }, false);
        for (var i = 0, elements = document.querySelectorAll('.js-geo'); i < elements.length; i++) {
          elements[i].innerHTML = ymaps.geolocation.city;
      }
      notification.style.display = 'flex';
      window.setTimeout(function () {
          notification.style.opacity = 1;
      }, 50);
  }
});
}
function newOrder() {
    var gender = Object.keys(names)[Math.floor(Math.random() * Object.keys(names).length)];
    var name = names[gender][Math.floor(Math.random() * names[gender].length)];
    var city = cities[Math.floor(Math.random() * cities.length)];
    if ((showsCounter === 1 || showsCounter === 3 || showsCounter === 7) && userGeo) {
      city = userGeo;
  }
  var goodsInOrder = Math.floor(Math.random() * maxKinds) + 1;
  var order = [];
  var bought = [];

  var prices = [
  6999,3499,799,1980,2490,1380,2760,2799    
];
var price_count_from = 1;
var price_count_to = 3;

for (var i = 0; i < goodsInOrder; i++) {
  var goodIndex = Math.floor(Math.random() * goods.length);
  if (bought.indexOf(goodIndex) !== -1) continue;
  var good = goods[goodIndex];
  var goodCount = Math.floor(Math.random() * maxItems) + 1;
  order.push(good + ' - ' + goodCount + ' ' + measure);
  bought.push(goodIndex);
}

var rand = price_count_from - 0.5 + Math.random() * (price_count_to - price_count_from + 1)
rand = Math.round(rand);

var sumN = 0;
for (var i = 0; i < rand; i++){
   var rand = Math.floor(Math.random() * prices.length);
   sumN += prices[rand];

}

var popupText = name + ' из г.' + city + (gender === 'men' ? ' сделал' : ' сделала') + ' заказ <br/>на сумму '+ sumN + ' руб. ';

return popupText;
}
var notification = document.querySelector('.js-orders');
function showNotification() {
    showsCounter++;
    notification.querySelector('.notification__text').innerHTML = newOrder();
    notification.style.display = 'flex';
    window.setTimeout(function () {
      notification.style.opacity = 1;
  }, 50);
    window.setTimeout(function () {
      notification.style.opacity = 0;
      window.setTimeout(function () {
        notification.style.display = 'none';
    }, 1000);
  }, 7 * 1000);
}
function startLoop() {
    showNotification();
    let max = 40;
    let min = 30;
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    window.setTimeout(startLoop, rand*1000);
}
window.setTimeout(startLoop, 10 * 1000);
})();