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

    // ANIMATIONS PAGE
    const boxes = gsap.utils.toArray(".gs-anim");
    boxes.forEach((box) => {
        gsap.from(box, {
            yPercent: 20,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: box,
                start: "top 90%",
                end: "center 50%",
            },
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".unlock__wrapper",
            start: "top 80%",
        }
    });

    const elements1 = gsap.utils.toArray(".unlock-block");

    elements1.forEach((element) => {
        tl1.from(element, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power1.out",
            delay: 0.1,
        });
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".analytics__wrapper",
            start: "top 80%",
        }
    });

    const elements2 = gsap.utils.toArray(".analytics-block");

    elements2.forEach((element) => {
        tl2.from(element, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power1.out",
            delay: 0.1,
        });
    });

    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".coverage__wrapper",
            start: "top 80%",
        }
    });

    const elements3 = gsap.utils.toArray(".coverage__img");

    elements3.forEach((element) => {
        tl3.from(element, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power1.out",
            delay: 0.1,
        });
    });

    gsap.from(".unlock__img", {
        y: 400,
        scrollTrigger: {
            trigger: ".unlock",
            start: "top 100%",
            end: "center 10%",
            scrub: 1,
        },
    });



    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let swiper;

    function initializeSwiper() {
        swiper = new Swiper('.swiper', {
            initialSlide: 1,
            slidesPerView: 'auto',
            centeredSlides: true,
            slideToClickedSlide: true,
            breakpoints: {
                320: {
                    direction: 'vertical',
                    spaceBetween: 0,
                    touchRatio: 0,
                    slideToClickedSlide: false,
                },
                576: {
                    spaceBetween: 40,
                    direction: 'horizontal',
                    touchRatio: 1,
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