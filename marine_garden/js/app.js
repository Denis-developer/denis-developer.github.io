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

    const header = document.querySelector(".header");
    let scrollPos = window.scrollY;

    if (scrollPos > 10) {
        header.classList.add('active');
    }

    document.addEventListener("scroll", function () {
        scrollPos = window.scrollY;
        if (scrollPos > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    });

    // ДИНАМИЧЕСКИЙ АДАПТИВ
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


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

    applyDynamicAdaptivity(".header-menu", ".header .nav", ".header__wrapper", 1200, 0, 0);

    // BURGER MENU
    const menuBurger = document.querySelector('.header__hamburger');
    const menuMobile = document.querySelector('.header-menu');
    const menuMobileLinks = document.querySelectorAll('.nav-list__link');

    menuBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        document.documentElement.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        header.classList.toggle('active_2');
        menuMobile.classList.toggle('show');
    })

    for (let i = 0; i < menuMobileLinks.length; i++) {
        menuMobileLinks[i].addEventListener('click', function () {
            console.log('432');
            document.body.classList.remove('lock');
            document.documentElement.classList.remove('lock');
            menuBurger.classList.remove('active');
            header.classList.remove('active_2');
            menuMobile.classList.remove('show');
        })
    }

    // ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
    function smoothScrollToAnchor(anchor) {
        viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let offset = 86;
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