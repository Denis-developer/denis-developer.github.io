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

applyDynamicAdaptivity(".header-mobileMenu", ".header-nav", ".header .container", 768, 0, 2);