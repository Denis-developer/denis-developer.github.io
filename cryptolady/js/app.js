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

    // Промокод Begin
    var tickets = document.getElementById('ticket').querySelectorAll('.ticket-block');
    var ticket_prss = [];
    var curMaxAmount, curSaleAmount;
    for (let i = 0; i < tickets.length; i++) {
        ticket_prss.push(tickets[i].querySelector('.ticket-block__btn').dataset.amount);
        // console.log(tickets[i].querySelector('.ticket-block__btn').dataset.amount);
    }
    var afterparty_prss = document.querySelector('section.afterparty').querySelector('.afterparty__btn').dataset.amount;

    function rebuykets() {
        for (let i = 0; i < tickets.length; i++) {
            tickets[i].querySelector('.ticket-block__btn').dataset.amount = ticket_prss[i];
        }
        document.querySelector('section.afterparty').querySelector('.afterparty__btn').dataset.amount = afterparty_prss;
    }

    function addCommas(nStr) {
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }
    // Промокод End

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
                    // YooKassa Begin
                    rebuykets();
                    //currentPopup.querySelector('form').dataset.amount = popupLink.dataset.amount;
                    curMaxAmount = e.target.dataset.amount;
                    // console.log(curMaxAmount);
                    let price_card = curMaxAmount;
                    curSaleAmount = curMaxAmount;
                    document.getElementById('amount_card').innerHTML = addCommas(price_card);
                    document.getElementById('price_card').style.color = "";
                    document.getElementById('price_sale').style.display = "";
                    document.getElementById('promo_redx').style.display = "";
                    document.getElementById('promo_check').style.display = "";
                    document.getElementById('promocode_input').style.borderColor = "";
                    // YooKassa End
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

    // Промокод Begin
    let input_promocode = document.getElementById('promocode_input');
    let promocode_icon = document.getElementById('promocode_check');
    let promo_redx = document.getElementById('promo_redx');
    let promo_check = document.getElementById('promo_check');
    let user_promocode;
    input_promocode.addEventListener("input", function (e) {
        if (e.target.value != "") {
            promocode_icon.style.display = "flex";
            promo_redx.style.display = "";
            promo_check.style.display = "";
            input_promocode.style.borderColor = "";
        }
        else {
            promocode_icon.style.display = "";
            promo_redx.style.display = "";
            promo_check.style.display = "";
            input_promocode.style.borderColor = "";
        }
        user_promocode = e.target.value;
    });



    promocode_icon.addEventListener('click', promocodeSend);

    async function promocodeSend(e) {
        if (input_promocode.value != "") {
            let formData = new FormData();
            formData.append('promocode', user_promocode);
            let response = await fetch('promocodes.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                response.json().then(function (json) {
                    // console.log(json);
                    let sale = json.sale;
                    // console.log(sale);
                    if (sale != 0) {
                        // console.log("Скидка" + sale + "%");
                        input_promocode.style.borderColor = "#ADD243";
                        promo_check.style.display = "block";
                        promocode_icon.style.display = "";
                        // let curForm = input_promocode.closest('form');
                        // let maxAmount = curForm.dataset.amount;
                        curSaleAmount = curMaxAmount - (curMaxAmount / 100 * sale);
                        document.getElementById('price_card').style.color = "#54AE32";
                        document.getElementById('amount_card').innerHTML = addCommas(curSaleAmount);
                        document.getElementById('sale_percent').innerHTML = sale;
                        document.getElementById('price_sale').style.display = "inline";
                    }
                    else {
                        // console.log("Промокод неверный"); 
                        curSaleAmount = curMaxAmount;
                        input_promocode.style.borderColor = "#FF00004D";
                        promo_redx.style.display = "block";
                        promocode_icon.style.display = "";
                    }
                });
            }
        }
    }

    // Промокод End

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
            if (phoneInput) {
                let phoneValue = phoneInput.value;
                let numericValue = phoneValue.replace(/\D/g, '');
                // Проверить, что длина числового значения равна 11 (включая +7)
                if (numericValue.length !== 11) {
                    return;
                }
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
                // YooKassa Begin
                // расскомментил попап
                let popupSuccess = document.querySelector('#popup3');
                popupSuccess.classList.add('open');
                if (forms[i].classList.contains('myform')) {
                    popupSuccess.querySelector('.popup-content__text').style.display = "none";
                }
                else {
                    popupSuccess.querySelector('.popup-content__text').style.display = "block";
                }
                ym(95234894,'reachGoal','send_information');
                setTimeout(function () {
                    let popups = document.querySelectorAll('.popup');
                    for (let y = 0; y < popups.length; y++) {
                        unlock = true;
                        popupClose(popups[y]);
                    }
                }, 5000);
                // YooKassa End
            }
            // YooKassa Begin
            /*if(formTitle == 'Билет standard' || formTitle == 'Билет business' || formTitle == 'Билет vip' || formTitle == 'Билет afterparty') {
                // console.log('Перенаправляем на ЮКасса для оплаты');
                // let formAmount = forms[i].dataset.amount;
                formData.append('formAmount', curSaleAmount);

                let responseYooKassa = await fetch('yookassa.php', {
                    method: 'POST',
                    body: formData
                })
                if (responseYooKassa.ok) {
                    responseYooKassa.text().then(function (text) {
                        let proto = text.slice(0, 4);
                        if (proto == 'http')
                            location.href = text;
                        else
                            console.log(text);
                    });
                }
            }*/
            // else
            //     console.log('Форма без оплаты');
            // YooKassa End
        }

    }

})