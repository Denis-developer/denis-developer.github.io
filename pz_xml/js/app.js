window.addEventListener('DOMContentLoaded', () => {

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
    applyDynamicAdaptivity(".header-popup", ".header-user", ".header .container", 992, 0, 2);

    // SMOOTH SCROLL

    function smoothScrollToAnchor(anchor) {
        const target = document.querySelector(anchor);
        if (!target) return;

        const targetRect = target.getBoundingClientRect();
        const startPosition = window.scrollY;
        const targetPosition = startPosition + targetRect.top;
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
            smoothScrollToAnchor(hash);
        });
    }

    // SWIPER SLIDER

    swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.service-slider__btn_next',
            prevEl: '.service-slider__btn_prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 'auto'
            }
        }
    });

    const swiper2SlidesText = [
        'Цель разработки Портала - обеспечить эффективное взаимодействие между Заказчиком, Проектировщиком и Экспертизой',
        'Вся информация по объекту в одном месте в круглосуточном доступе',
        'Актуальный статус проверки разделов',
        'Контроль наличия замечаний и оперативности их устранения',
        'Возможность в любой момент скачать всю документацию по объекту, даже после завершения экспертизы'
    ];

    swiper2 = new Swiper('.swiper2', {
        slidesPerView: 1,
        autoHeight: true,
        effect: 'fade',
        navigation: {
            nextEl: '.service-slider2__btn_next',
            prevEl: '.service-slider2__btn_prev',
        },
        on: {
            slideChange: function (swiper) {
                document.querySelector('.service-slider2__num').textContent = `0${swiper.activeIndex + 1}`;
                document.querySelector('.service-slider2__text').textContent = swiper2SlidesText[swiper.activeIndex];
            }
        }
    });

    // FOOTER TEXT YEAR

    let now = new Date();
    document.querySelector('.footer__text span').textContent = now.getFullYear();

    // BURGER MENU

    const menuBurger = document.querySelector('.header__burger');
    const menuMobile = document.querySelector('.header-popup');
    const menuMobileLinks = document.querySelectorAll('.header-menu__link');
    const header = document.querySelector('.header');

    menuBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        document.documentElement.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        menuMobile.classList.toggle('show');
        header.classList.toggle('active');
    })

    for (let i = 0; i < menuMobileLinks.length; i++) {
        menuMobileLinks[i].addEventListener('click', function () {
            document.body.classList.remove('lock');
            document.documentElement.classList.remove('lock');
            menuBurger.classList.remove('active');
            menuMobile.classList.remove('show');
            header.classList.remove('active');
        })
    }

    menuMobile.style.paddingTop = document.querySelector('.header').offsetHeight + 'px';

    // Short user name and email 

    let userName = document.querySelector('.header-user__name'),
        userEmail = document.querySelector('.header-user__email');

    function shortString(string, length) {
        string.setAttribute('data-text', string.textContent);
        let newString = string.textContent.slice(0, length) + "...";
        string.textContent = newString;
    };

    // function restoreString(string) {
    //     string.setAttribute('data-text', string.textContent);
    //     string.textContent = string.getAttribute('data-text');
    // };

    if (viewport_width > 992) {
        if (userName && userEmail) {
            shortString(userName, 14);
            shortString(userEmail, 26);
        }
    }

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

        if (viewport_width > 992) {
            if (userName && userEmail) {
                shortString(userName, 14);
                shortString(userEmail, 26);
            }
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

    // FORM VALIDATE

    const validator1 = new window.JustValidate('#form1');

    validator1
        .addField('#email1', [
            {
                rule: 'required',
                errorMessage: 'Пожалуйста, укажите адрес почты'
            },
            {
                rule: 'required',
                errorMessage: 'Пожалуйста, укажите адрес почты'
            },
            {
                rule: 'email',
                errorMessage: 'Некорректный адрес'
            },
        ])
        .addField('#pass1', [
            {
                rule: 'required',
                errorMessage: 'Пожалуйста, укажите пароль'
            }
        ]);


    const validator2 = new window.JustValidate('#form2');

    validator2
        .addField('#username', [
            {
                rule: 'required',
                errorMessage: 'Пожалуйста, заполните данное поле'
            }
        ])
        .addField('#email2', [
            {
                rule: 'required',
                errorMessage: 'Пожалуйста, укажите адрес почты'
            },
            {
                rule: 'required',
                errorMessage: 'Пожалуйста, укажите адрес почты'
            },
            {
                rule: 'email',
                errorMessage: 'Некорректный адрес'
            },
        ])
        .addField('#pass2', [
            {
                rule: 'required',
                errorMessage: 'Пожалуйста, придумайте пароль'
            },
            {
                rule: 'password',
                errorMessage: 'Пароль должен содержать минимум восемь символов, хотя бы одну букву и одну цифру.'
            },
        ])
        .addField('#pass3', [
            {
                rule: 'required',
                errorMessage: 'Пароли должны быть одинаковыми'
            },
            {
                validator: (value, fields) => {
                    if (
                        fields['#pass2'] &&
                        fields['#pass2'].elem
                    ) {
                        const repeatPasswordValue =
                            fields['#pass2'].elem.value;

                        return value === repeatPasswordValue;
                    }

                    return true;
                },
                errorMessage: 'Пароли должны быть одинаковыми',
            },
        ])
        .addField(
            '#checkbox',
            [
                {
                    rule: 'required',
                    errorMessage: ' ',
                },
            ]
        );

    // BTN SEND LETTER AGAIN

    const btnSendAgain = document.querySelector('.popup__btn');
    let i = 15;
    let intervalId;

    btnSendAgain.addEventListener('click', () => {
        btnSendAgain.classList.add('wait');
        btnSendAgain.disabled = true;
        updateButtonText();
    });

    function updateButtonText() {
        if (i > 0) {
            btnSendAgain.textContent = `${i} секунд`;
            i--;
            intervalId = setTimeout(updateButtonText, 1000);
        } else {
            clearTimeout(intervalId);
            btnSendAgain.textContent = 'Отправить письмо еще раз';
            btnSendAgain.classList.remove('wait');
            btnSendAgain.disabled = false;
            i = 15;
        }
    }



    // OPEN LOGIN AND REGISTER MODAL

    let popupLoginBtns = document.querySelectorAll('.popup__open'),
        popupExitBtns = document.querySelectorAll('.close'),
        popupWrapper = document.querySelectorAll('.popup .popup__wrapper'),
        popup = document.querySelector('.popup');

    popupLoginBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (item.getAttribute('data-popupWrapper')) {
                popupWrapper.forEach(i => {
                    i.classList.remove('show');
                })
                switch (item.getAttribute('data-popupWrapper')) {
                    case '1':
                        document.querySelector('.popup__wrapper_log').classList.add('show');
                        break;
                    case '2':
                        document.querySelector('.popup__wrapper_reg').classList.add('show');
                        break;
                    case '3':
                        document.querySelector('.popup__wrapper_confirm').classList.add('show');
                        break;
                }
            }
            popup.classList.add('show');
            document.body.classList.toggle('lock');
            document.documentElement.classList.toggle('lock');
        })
    });

    popupExitBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.remove('show');
            document.body.classList.remove('lock');
            document.documentElement.classList.remove('lock');
        })
    });

});