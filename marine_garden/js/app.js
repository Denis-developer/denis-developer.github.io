document.addEventListener('DOMContentLoaded', function () {

    // PRELOADER
    let preloader = document.querySelector('.preloader');
    setTimeout(function () {
        preloader.classList.add('is-loaded');
    }, 700);

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


    // ANIMATIONS PAGE
    const boxes = gsap.utils.toArray(".gs-anim");
    boxes.forEach((box) => {
        gsap.from(box, {
            yPercent: 20,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: box,
                start: "top 90%",
                end: "center 50%",
            },
        });
    });

    const tlProjectsOdd = gsap.utils.toArray(".gs-odd");
    tlProjectsOdd.forEach((elem) => {
        gsap.from(elem, {
            xPercent: -30,
            duration: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
            },
        });
    });

    const tlProjectsEven = gsap.utils.toArray(".gs-even");
    tlProjectsEven.forEach((elem) => {
        gsap.from(elem, {
            xPercent: 30,
            duration: 1.5,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
            },
        });
    });
    gsap.from(".brochure__img", {
        y: 400,
        x: -200,
        scrollTrigger: {
            trigger: ".brochure",
            start: "top 100%",
            end: "center 10%",
            scrub: 1,
        },
    });

    const tlBtn = gsap.utils.toArray(".btn");
    tlBtn.forEach((elem) => {
        gsap.from(elem, {

            scrollTrigger: {
                trigger: elem,
                onEnter: () => {
                    elem.classList.add("active");
                },
            },
        });
    });

    gsap.to(".gallery__wrapper", {
        scrollTrigger: {
            trigger: ".gallery__wrapper",
        },
        className: "gallery__wrapper active",
        delay: 1,
    });

    if (window.innerWidth >= 992) {
        var tlLocation = gsap.timeline({
            scrollTrigger: {
                trigger: ".location",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                pin: ".location__container",
            },
        });

        tlLocation.to(
            ".location-block_1",
            { yPercent: 100, duration: 1 },
            "<"
        );
        tlLocation.to(
            ".location-block_2",
            { yPercent: -100, duration: 1 },
            "<"
        );
        tlLocation.to(
            ".location-block_3",
            { yPercent: 100, duration: 1 },
            "<"
        );
        tlLocation.to(
            ".location-block_4",
            { yPercent: -100, duration: 1 },
            "<"
        );
    }
    

    // PARALLAX GALLERY
    if (window.innerWidth >= 992) {
        $('.gallery-block_1').parallax({ imageSrc: 'img/gallery/img-1.jpg' });
        $('.gallery-block_2').parallax({ imageSrc: 'img/gallery/img-2.jpg' });
        $('.gallery-block_3').parallax({ imageSrc: 'img/gallery/img-3.jpg' });
        $('.gallery-block_4').parallax({ imageSrc: 'img/gallery/img-4.jpg' });
        $('.gallery-block_5').parallax({ imageSrc: 'img/gallery/img-5.jpg' });
    }


    // Location skills
    function locationSkills() {
        let locationSkills = document.querySelectorAll('.location-skill');
        let total = 30;

        for (let i = 0; i < locationSkills.length; i++) {
            let locationSkillProgress = locationSkills[i].querySelector('.location-skill__progress');
            locationSkillProgress.style.width = locationSkillProgress.dataset.progress * 100 / total + "%";
        }
    }

    gsap.from(".location-skills", {
        scrollTrigger: {
            trigger: ".location-skills",
            start: "top 100%",
            end: "center 10%",
            scrub: 1,
            onEnter: locationSkills,
        },
    });

    // international tel input
    const inputTel = document.querySelectorAll("input[type='tel']");
    for (let i = 0; i < inputTel.length; i++) {
        window.intlTelInput(inputTel[i], {
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            initialCountry: 'ru',
            separateDialCode: true,
        });
    }

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

    // ДИНАМИЧЕСКИЙ АДАПТИВ
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

    applyDynamicAdaptivity(".header-menu", ".header .nav", ".header__wrapper", 1200, 0, 0);

    let brochureFrom = document.querySelector('.brochure-form__wrapper');
    brochureFrom.style.height = brochureFrom.offsetWidth + "px";

    window.addEventListener('resize', function (event) {
        brochureFrom.style.height = brochureFrom.offsetWidth + "px";
    });

    // BURGER MENU
    const menuBurger = document.querySelector('.header__hamburger');
    const menuMobile = document.querySelector('.header-menu');
    const menuMobileLinks = document.querySelectorAll('.nav-list__link');

    menuBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        document.documentElement.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        header.classList.toggle('active_2');
        menuMobile.classList.toggle('show');
    })

    for (let i = 0; i < menuMobileLinks.length; i++) {
        menuMobileLinks[i].addEventListener('click', function () {
            document.body.classList.remove('lock');
            document.documentElement.classList.remove('lock');
            menuBurger.classList.remove('active');
            header.classList.remove('active_2');
            menuMobile.classList.remove('show');
        })
    }

    // ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
    function smoothScrollToAnchor(anchor) {
        viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let offset = 86;
        // if (viewport_width < 577) {
        //     offset = 80;
        // }
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
            if (!this.classList.contains("popup-link")) {
                smoothScrollToAnchor(hash);
            }
        });
    }


    // Модальное окно
    const popupLinks = document.querySelectorAll('.popup-link'),
        body = document.querySelector('body');

    let unlock = true;

    const timeout = 800;

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
        body.classList.add('lock');
        document.documentElement.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnlock() {
        setTimeout(function () {
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

        (function () {
            // проверяем поддержку
            if (!Element.prototype.closest) {
                // реализуем
                Element.prototype.closest = function (css) {
                    var node = this;

                    while (node) {
                        if (node.matches(css)) return node;
                        else node = node.parentElement;
                    }
                    return null;
                };
            }
        })();

    (function () {
        // проверяем поддержку
        if (!Element.prototype.matches) {
            // определяем свойство
            Element.prototype.matches = Element.prototype.matchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector;
        }
    })();



})