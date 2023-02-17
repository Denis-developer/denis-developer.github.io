"use strict"

document.addEventListener('DOMContentLoaded', function () {


    // Burger menu
    const menuBurger = document.querySelector('.header__hamburger');

    if (menuBurger) {
        const menuMobile = document.querySelector('.header__bottom_right');
        menuBurger.addEventListener('click', function (e) {
            document.body.classList.toggle('lock')
            menuBurger.classList.toggle('active');
            menuMobile.classList.toggle('active');
            window.scrollTo(0, 0);
        })
    }


    // Catalog preview front and back
    let catalogImg = document.querySelectorAll('.catalog-item__img');
    let catalogPreview = document.querySelectorAll('.catalog-preview__img');

    for (let i = 0; i < catalogPreview.length; i++) {
        catalogPreview[i].addEventListener('mouseover', function (e) {
            let srcImg = this.getAttribute('src');
            let attrImg = this.getAttribute('data-catalogImg');
            for (let i = 0; i < catalogImg.length; i++) {
                if (catalogImg[i].getAttribute('data-catalogImg') == attrImg) {
                    if (!(catalogImg[i].getAttribute('src') == srcImg)) {
                        catalogImg[i].style.opacity = "0";
                        setTimeout(() => catalogImg[i].setAttribute('src', srcImg), 500);
                        setTimeout(() => catalogImg[i].style.opacity = "1", 500);
                    }
                }
            }
        })
    }

})

const swiper = new Swiper('.product-slider', {
    loop: false,
    navigation: {
        nextEl: '.product-slider__next',
        prevEl: '.product-slider__prev',
    }
});

// Dynamic adaptive
const parent_original = document.querySelector('.product__wrapper'),
    parent = document.querySelector('.mobile-slider'),
    item = document.querySelector('.swiper');

if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768) {
    if (!item.classList.contains('done')) {
        parent.insertBefore(item, parent.children[2]);
        item.classList.add('done');
    }
}

window.addEventListener('resize', function (event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 768) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[2]);
            item.classList.add('done');
        }
    }
    else {
        if (item.classList.contains('done')) {
            parent_original.insertBefore(item, parent_original.children[0]);
            item.classList.remove('done');
        }
    }
});

