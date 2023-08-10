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

    // Ссылка на верх
    const linkTop = document.querySelector(".linkTop");
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    if(viewport_width > 576) {
        window.addEventListener("scroll", function() {
            if (window.scrollY >= window.innerHeight) {
                linkTop.classList.add("active");
            } else {
                linkTop.classList.remove("active");
            }
        });
    }
    

    // Input mask
    $('input[type="tel"]').inputmask("+X (999) 999-9999", {
        definitions: {
            "X": {
                validator: "[7-8]",
            }
        },
        oncomplete: function () {
            $(this).val('+7' + $(this).val().substring(2));
        }
    });


    // Анимация
    const aboutBlock = gsap.utils.toArray(".about-block");
    aboutBlock.forEach((elem) => {
        gsap.from(elem, {
            yPercent: 100,
            duration: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
                start: 'top 140%',
            },
        });
    });

    const aboutListItem = gsap.utils.toArray(".about-block__item");
    aboutListItem.forEach((elem) => {
        gsap.from(elem, {
            duration: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
                start: 'top 140%',
            },
        });
    });

    const programPart = gsap.utils.toArray(".gs-anim");
    programPart.forEach((elem) => {
        gsap.from(elem, {
            duration: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
                start: 'top 60%',
            },
        });
    });

    const programParts = gsap.utils.toArray(".gs-title");
    programParts.forEach((elem) => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 60%',
                onEnter: () => {
                    let programPartss = document.querySelectorAll('.program-block__part');
                    for (let i = 0; i < programPartss.length; i++) {
                        programPartss[i].classList.remove("active");

                    }
                    elem.classList.add("active");
                },
                onLeave: () => {
                    elem.classList.remove("active");
                },
            },
        });
    });

    const boxToTop = gsap.utils.toArray(".gs-toTop");
    boxToTop.forEach((elem) => {
        gsap.from(elem, {
            yPercent: 100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
            },
        });
    });

    const boxToRight = gsap.utils.toArray(".gs-toRight");
    boxToRight.forEach((elem) => {
        gsap.from(elem, {
            xPercent: -100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
            },
        });
    });

    const boxToLeft = gsap.utils.toArray(".gs-toLeft");
    boxToLeft.forEach((elem) => {
        gsap.from(elem, {
            xPercent: 100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
            },
        });
    });

    // Аккордионы
    const accordions = document.querySelectorAll('.questions-accordion__title');


    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function () {
            this.classList.toggle('active');
            viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            const accordionContent = accordions[i].nextElementSibling;
            accordionContent.classList.toggle('show');
            if (accordionContent.style.maxHeight == "") {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 62 + "px";
            }
            else {
                accordionContent.style.maxHeight = null;
            }
        })
    }

    // Плавный скролл к якорям
    function smoothScrollToAnchor(anchor, offset = 0) {
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
            if (hash == "#about") {
                smoothScrollToAnchor(hash, 70);
            }
            else if (hash.includes("popup")) {
                return;
            }
            else {
                smoothScrollToAnchor(hash);
            }
        });
    }

    // Модальное окно
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
                if (!e.target.closest('.popup__content')) {
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


})