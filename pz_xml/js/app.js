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

// DYNAMIC ADAPTIVE

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

applyDynamicAdaptivity(".header-popup", ".header-menu", ".header .container", 992, 0, 1);
applyDynamicAdaptivity(".header-popup", ".header__btn", ".header .container", 992, 0, 2);

// SWIPER SLIDER

swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.service-slider__btn_next',
        prevEl: '.service-slider__btn_prev',
    },
    breakpoints: {
        500: {
            slidesPerView: 'auto',
            spaceBetween: 50
        }
    }
});

// BURGER MENU

const menuBurger = document.querySelector('.header__burger');
const menuMobile = document.querySelector('.header-popup');
const menuMobileLinks = document.querySelectorAll('.header-menu__link');

menuBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    document.documentElement.classList.toggle('lock');
    menuBurger.classList.toggle('active');
    menuMobile.classList.toggle('show');
})

for (let i = 0; i < menuMobileLinks.length; i++) {
    menuMobileLinks[i].addEventListener('click', function () {
        document.body.classList.remove('lock');
        document.documentElement.classList.remove('lock');
        menuBurger.classList.remove('active');
        menuMobile.classList.remove('show');
    })
}

menuMobile.style.paddingTop = document.querySelector('.header').offsetHeight + 'px';

// Window resize change items

let headerLogo = document.querySelector('.header__logo');

if (viewport_width < 500) {
    headerLogo.src = "img/logo_short.svg";
}

window.addEventListener('resize', () => {

    viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // Change header logo on mobile
    if (viewport_width < 500) {
        headerLogo.src = "img/logo_short.svg";
    } else {
        headerLogo.src = "img/logo.svg";
    }

    // Menu
    if (viewport_width > 992) {
        document.body.classList.remove('lock');
        document.documentElement.classList.remove('lock');
        menuBurger.classList.remove('active');
        menuMobile.classList.remove('show');
    }

    menuMobile.style.paddingTop = document.querySelector('.header').offsetHeight + 'px';
})