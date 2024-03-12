// Проверка поддержки webp, добавление класса webp или no-webp для html
function isWebp() {
    function testWebP(callback) {
        // Проверка поддержки webp
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    // Добавление класаа
    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

isWebp();

swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    spaceBetween: 50,
    navigation: {
        nextEl: '.service-slider__btn_next',
        prevEl: '.service-slider__btn_prev',
    }
});