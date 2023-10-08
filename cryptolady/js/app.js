document.addEventListener('DOMContentLoaded', function () {

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

    const swiper1 = new Swiper('.swiper1', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.case-slider .swiper-button-next',
            prevEl: '.case-slider .swiper-button-prev',
        }
    });

    const swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.case-slider2 .swiper-button-next',
            prevEl: '.case-slider2 .swiper-button-prev',
        }
    });

    const swiper4 = new Swiper('.swiper4', {
        slidesPerView: 'auto',
        spaceBetween: 21,
    });

    const swiper3 = new Swiper('.swiper3', {
        slidesPerView: 1,
        spaceBetween: 20,
        thumbs: {
            swiper: swiper4,
        },
        
    });

})