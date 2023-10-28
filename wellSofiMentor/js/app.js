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

    applyDynamicAdaptivity(".header-menu", ".header-nav", ".header .container", 576, 0, 0);


    // SMOOTH SCROLL
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


    // BURGER MENU
    const menuBurger = document.querySelector('.header__burger');
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


    // SLIDER REVIEWS
    let swiper1 = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        breakpoints: {
            576: {
                spaceBetween: 20
            },
        }
    })
    let swiper2 = new Swiper('.swiper2', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        breakpoints: {
            576: {
                spaceBetween: 20
            },
        }
    })

    swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;


    // POPUP QUIZ
    const popupLinks = document.querySelectorAll('.popup-link'),
        body = document.querySelector('body'),
        lockPadding = document.querySelectorAll('.lock-padding');

    let unlock = true;

    const timeout = 800;

    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener('click', function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const currentPopup = document.getElementById(popupName);
                document.querySelector('.popup-content:first-child').style.display = "inline-block";
                document.querySelector('.popup-content:first-child').style.opacity = "1";
                document.querySelector('.popup-content:first-child').style.visibility = "visible";
                popupOpen(currentPopup);
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
            let popupContent = document.querySelectorAll('.popup-content');
            for (let z = 0; z < popupContent.length; z++) {
                correctAnswers = 0;
                popupContent[z].classList.remove('active');
                popupContent[z].style.opacity = "0";
                popupContent[z].style.visibility = "hidden";
                setTimeout(function () {
                    popupContent[z].style.display = "none";
                }, 600)
            }
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

    // Show/hide quiz block
    let quizBlock = document.querySelectorAll('.popup-content');
    let quizBlockAnswer = document.querySelectorAll('.popup-content__item');
    let quizQuizSuccess = document.querySelector('.main-quiz_success');
    let quizTransition = 600;
    let correctAnswers = 0;
    let totalQuestions = quizBlock.length;

    for (let i = 0; i < quizBlockAnswer.length; i++) {
        quizBlockAnswer[i].addEventListener('click', function () {

            const isCorrect = this.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                correctAnswers++;
            }

            console.log(i);
            console.log(correctAnswers);

            let quizParrent = this.closest('.popup-content');
            quizParrent.style.opacity = "0";
            quizParrent.style.visibility = "hidden";

            setTimeout(function () {
                quizParrent.style.display = "none";
            }, quizTransition)

            if (i < 27) {
                setTimeout(function () {
                    quizParrent.nextElementSibling.style.display = "block";
                }, quizTransition + 50)

                setTimeout(function () {
                    quizParrent.nextElementSibling.style.opacity = "1";
                    quizParrent.nextElementSibling.style.visibility = "visible";
                }, quizTransition + 100)
            }
            else {
                if (correctAnswers == 10) {
                    setTimeout(function () {
                        document.querySelector('.popup-result__good').style.display = "block";
                    }, quizTransition + 50)
                    setTimeout(function () {
                        document.querySelector('.popup-result__good').style.opacity = "1";
                        document.querySelector('.popup-result__good').style.visibility = "visible";
                    }, quizTransition + 100)
                }
                else {
                    setTimeout(function () {
                        document.querySelector('.popup-result__bad').style.display = "block";
                    }, quizTransition + 50)
                    setTimeout(function () {
                        document.querySelector('.popup-result__bad').style.opacity = "1";
                        document.querySelector('.popup-result__bad').style.visibility = "visible";
                    }, quizTransition + 100)
                }

            }


        })

    }

})