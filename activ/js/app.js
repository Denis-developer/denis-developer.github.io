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



    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let swiper;

    function initializeSwiper() {
        swiper = new Swiper('.swiper', {
            initialSlide: 1,
            slidesPerView: 'auto',
            centeredSlides: true,
            breakpoints: {
                576: {
                    spaceBetween: 40
                },
                992: {
                    spaceBetween: 80
                }
            }
        });
    }

    if (viewport_width > 576) {
        initializeSwiper();
    }

    window.addEventListener('resize', function (event) {
        viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width > 576 && !swiper) {
            initializeSwiper();
            console.log('tablet');
        }
        else if (viewport_width <= 576 && swiper) {
            swiper.destroy();
            swiper = null;
            console.log('mob');
        }
    });

})