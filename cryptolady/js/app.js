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


    // Header
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



    // INPUT MASK
    let inputsTel = document.querySelectorAll("input[type='tel']");

    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(inputsTel);


    // Sliders

    const swiper1 = new Swiper('.swiper1', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.case-slider .swiper-button-next',
            prevEl: '.case-slider .swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        },
    });

    const swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.case-slider2 .swiper-button-next',
            prevEl: '.case-slider2 .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
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
        autoplay: {
            delay: 6000,
        },

    });



    // Smooth Scroll

    function smoothScrollToAnchor(anchor) {
        let offset = header.offsetHeight;
        const target = document.querySelector(anchor);
        if (!target) return;

        const targetRect = target.getBoundingClientRect();
        const startPosition = window.scrollY;
        const targetPosition = startPosition + targetRect.top - offset; // Получаем абсолютное положение элемента
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
                history.replaceState(null, null, anchor);
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
            if (hash !== '#' && hash.length > 1 && !hash.includes("popup")) {
                smoothScrollToAnchor(hash);
            }
        });
    }




    // DynamicAdaptivity
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

    applyDynamicAdaptivity(".header-menu", ".header-nav", ".header .container", 768, 0, 2);



    // BURGER MENU
    const menuBurger = document.querySelector('.header__hamburger');
    const menuMobile = document.querySelector('.header-menu');
    const menuMobileLinks = document.querySelectorAll('.header-nav__link');

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



    // POPUP
    const popupLinks = document.querySelectorAll('.popup-link'),
        body = document.querySelector('body'),
        lockPadding = document.querySelectorAll('.lock-padding');

    let unlock = true;

    const timeout = 500;

    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener('click', function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const currentPopup = document.getElementById(popupName);
                popupOpen(currentPopup);
                if (popupName == "popup") {
                    currentPopup.querySelector('form').dataset.form = popupLink.dataset.price;
                }
                e.preventDefault();
            })
        }
    }

    const popupCloseIcon = document.querySelectorAll('.popup__close');

    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            })
        }
    }

    function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            }
            else {
                bodyLock();
            }
            currentPopup.classList.add('open');
            currentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup-content')) {
                    popupClose(e.target.closest('.popup'));
                }
            })
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnlock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - body.clientWidth + 'px';

        if (lockPadding, length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.getElementsByClassName.paddingRight = lockPaddingValue
            }
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');
        document.documentElement.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnlock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = '0px';
                }
            }
            body.style.paddingRight = "0px";
            body.classList.remove('lock');
            document.documentElement.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    })

    // Send form
    function noDigits(event) {
        if ("1234567890".indexOf(event.key) !== -1) {
            event.preventDefault();
        }
    }

    const textInputs = document.querySelectorAll('input[type="text"]');

    textInputs.forEach(input => {
        input.addEventListener('keypress', noDigits);
    });


    let forms = document.querySelectorAll('form');

    for (let i = 0; i < forms.length; i++) {

        forms[i].addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();

            // Получить значение поля ввода телефона
            let phoneInput = forms[i].querySelector('input[type="tel"]');
            let phoneValue = phoneInput.value;
            let numericValue = phoneValue.replace(/\D/g, '');

            // Проверить, что длина числового значения равна 11 (включая +7)
            if (numericValue.length !== 11) {
                return;
            }

            let formData = new FormData(forms[i]);

            let formTitle = forms[i].dataset.form;

            formData.append('formTitle', formTitle);


            let response = await fetch('telegram.php', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                forms[i].reset();
                let popupSuccess = document.querySelector('#popup3');
                popupSuccess.classList.add('open');
                if (forms[i].classList.contains('myform')) {
                    popupSuccess.querySelector('.popup-content__text').style.display = "none";
                }
                else {
                    popupSuccess.querySelector('.popup-content__text').style.display = "block";
                }
                setTimeout(function () {
                    let popups = document.querySelectorAll('.popup');
                    for (let y = 0; y < popups.length; y++) {
                        unlock = true;
                        popupClose(popups[y]);
                    }
                }, 5000);
            }
        }

    }

})