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


    // INPUT MASK
    let inputsTel = document.querySelectorAll("input[type='tel']");
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(inputsTel);


    // FORMS VALIDATION
    let form = document.querySelectorAll('form');

    for (let i = 0; i < form.length; i++) {

        let formName = form[i].querySelector('input[name="name"]');
        let formEmail = form[i].querySelector('input[name="email"]');
        let formTel = form[i].querySelector('input[name="tel"]');
        let formSuccess = 0;
        let formInput = 0;

        form[i].addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();
            formSuccess = 0;
            formInput = 0;
            validateInputs();

            let formData = new FormData(form[i]);

            if (formSuccess == formInput) {
                let response = await fetch('telegram.php', {
                    method: 'POST',
                    body: formData
                })
                if (response.ok) {
                    console.log('Ok');
                }
            }
        }

        const setError = (element) => {
            element.classList.add('error');
        }

        const setSuccess = (element) => {
            element.classList.remove('error');
        }

        const isValidName = name => {
            const re = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]*[a-zA-Zа-яА-ЯёЁ']?$/;
            return re.test(String(name));
        }

        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        const validateInputs = () => {

            // Name validate
            if (formName) {
                formInput++;
                if (!isValidName(formName.value.trim())) {
                    setError(formName);
                }
                else {
                    setSuccess(formName);
                    formSuccess++;
                }
            }

            // Phone validate
            if (formTel) {
                formInput++;
                let formTelValue = formTel.value.replace(/\D/g, '');
                if (formTelValue.length !== 11) {
                    setError(formTel);
                }
                else {
                    setSuccess(formTel);
                    formSuccess++;
                }
            }

            // Email validate
            if (formEmail) {
                formInput++;
                const emailValue = formEmail.value.trim();
                if (!isValidEmail(emailValue)) {
                    setError(formEmail);
                }
                else {
                    setSuccess(formEmail);
                    formSuccess++;
                }
            }
        }
    }



    // POPUPS
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
                e.preventDefault();
            })
        }
    }

    const popupCloseIcon = document.querySelectorAll('.popup-content__close');

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


    // SMOOTH SCROLL ANCHOR
    function smoothScrollToAnchor(anchor) {
        let offset = 0;
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
            smoothScrollToAnchor(hash);
        });
    }

})