document.addEventListener('DOMContentLoaded', function () {

    // Ссылка на верх
    const linkTop = document.querySelector(".linkTop");

    function toggleLinkTop() {
        if (window.scrollY >= window.innerHeight) {
            linkTop.classList.add("active");
        } else {
            linkTop.classList.remove("active");
        }
    }

    toggleLinkTop();

    window.addEventListener("scroll", toggleLinkTop);

    // BURGER MENU
    const burger = document.querySelector('.header__burger');
    const menuMobile = document.querySelector('.header-mobileMenu');

    burger.addEventListener('click', function (e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        document.body.classList.toggle('lock');
        document.documentElement.classList.toggle('lock');
        burger.classList.toggle('active');
        menuMobile.classList.toggle('show');
    })

    // Динамический адаптив. Перенос меню в мобильное меню.
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

    applyDynamicAdaptivity(".header-mobileMenu", ".header-nav", ".header .container", 768, 0, 1);

    // Плавный скролл к якорям
    function smoothScrollToAnchor(anchor) {
        viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let offset = 0;

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