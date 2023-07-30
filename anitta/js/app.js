document.addEventListener('DOMContentLoaded', function () {
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


    const swiper = new Swiper('.swiper', {
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 'auto',
                spaceBetween: 12,
                centeredSlides: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 7,
                spaceBetween: 9,
                centeredSlides: false,
            }
        }
    });

    const swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1,
        autoHeight: true,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: swiper,
        },
        navigation: {
            nextEl: '.tattooStyles-slider2__next',
            prevEl: '.tattooStyles-slider2__prev',
        }
    });

    const swiper3 = new Swiper('.swiper3', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.promotion-slider__btn_next',
            prevEl: '.promotion-slider__btn_prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                spaceBetween: 17,
            },
            // when window width is >= 576px
            576: {
                spaceBetween: 30,
            }
        }
    });

    const tattoSlides = document.querySelectorAll('.tattooStyles-slider__slide');

    swiper.on('slideChange', function () {
        console.log('21');
        let activeIndex = swiper.activeIndex;
        for (let i = 0; i < tattoSlides.length; i++) {
            tattoSlides[i].classList.remove('swiper-slide-thumb-active');
        }
        swiper.slideTo(activeIndex);
        swiper2.slideTo(activeIndex);
        tattoSlides[activeIndex].classList.add('swiper-slide-thumb-active');
    });

        for (let i = 0; i < tattoSlides.length; i++) {
        tattoSlides[i].addEventListener('click', function() {
            swiper.slideTo(i);
            for (let y = 0; y < tattoSlides.length; y++) {
                tattoSlides[y].classList.remove('swiper-slide-thumb-active');
            }
            tattoSlides[i].classList.add('swiper-slide-thumb-active');
        })
    }

    // BURGER MENU
    const menuBurger = document.querySelector('.header__hamburger');
    const menuBurger2 = document.querySelector('.header__hamburger_2');
    const menuMobile = document.querySelector('.header-menu');
    const headerContainer = document.querySelector('.header .container');
    const menuMobileLinks = document.querySelectorAll('.nav-menu__link');
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    menuBurger2.addEventListener('click', function () {
        document.documentElement.scrollTop = 0;
        document.body.classList.toggle('lock')
        menuBurger.classList.toggle('active');
        menuMobile.classList.toggle('show');
    })

    menuBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        document.documentElement.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        headerContainer.classList.toggle('active');
        menuMobile.classList.toggle('show');
    })

    for (let i = 0; i < menuMobileLinks.length; i++) {
        menuMobileLinks[i].addEventListener('click', function () {
            document.body.classList.remove('lock');
            document.documentElement.classList.remove('lock');
            menuBurger.classList.remove('active');
            headerContainer.classList.remove('active');
            menuMobile.classList.remove('show');
        })
    }

    // ДИНАМИЧЕСКИЙ АДАПТИВ
    function applyDynamicAdaptivity(parent, item, parent_original, breakpoint, insertParent, insertPerentOrg) {
        const parent_originalEl = document.querySelectorAll(parent_original),
            parentEl = document.querySelectorAll(parent),
            itemEl = document.querySelectorAll(item);

        function moveItems() {
            for (let i = 0; i < parentEl.length; i++) {
                parentEl[i].insertBefore(itemEl[i], parentEl[i].children[insertParent]);
                itemEl[i].classList.add('done');
            }
        }

        function revertItems() {
            for (let i = 0; i < parentEl.length; i++) {
                parent_originalEl[i].insertBefore(itemEl[i], parent_originalEl[i].children[insertPerentOrg]);
                itemEl[i].classList.remove('done');
            }
        }

        if (viewport_width <= breakpoint) {
            if (itemEl[0] && !itemEl[0].classList.contains('done')) {
                moveItems();
            }
        } else {
            if (itemEl[0] && itemEl[0].classList.contains('done')) {
                revertItems();
            }
        }

        window.addEventListener('resize', function (event) {
            viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if (viewport_width <= breakpoint) {
                if (itemEl[0] && !itemEl[0].classList.contains('done')) {
                    moveItems();
                }
            } else {
                if (itemEl[0] && itemEl[0].classList.contains('done')) {
                    revertItems();
                }
            }
        });
    }

    applyDynamicAdaptivity(".header-menu", ".header .nav", ".header .container", 992, 0, 0);
    applyDynamicAdaptivity(".header-menu", ".intro__btn", ".intro__wrapper", 992, 1, 1);
    applyDynamicAdaptivity(".header-menu__wrapper", ".header__phone", ".header__wrapper", 992, 0, 0);
    applyDynamicAdaptivity(".intro", ".intro__linkdown", ".intro__container", 576, 0, 4);

    // ПЛАВНЫЙ СКРОЛЛ К ЯКОРЯМ
    function smoothScrollToAnchor(anchor) {
        viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let offset = 0;
        // if (viewport_width < 577) {
        //     offset = 80;
        // }
        const target = document.querySelector(anchor);
        if (!target) return;

        const targetPosition = target.offsetTop - offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;

        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            const easing = easeInOutQuad(percentage);
            window.scrollTo(0, startPosition + distance * easing);
            if (progress < duration) {
                requestAnimationFrame(step);
            } else {
                history.replaceState(null, null, anchor); // Заменяем URL без изменения положения на странице
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(step);
    }

    let linkNav = document.querySelectorAll('[href^="#"]');
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) {
            e.preventDefault();
            const hash = this.getAttribute('href');
            smoothScrollToAnchor(hash);
        });
    }



})