document.addEventListener('DOMContentLoaded', function () {

    // aside accordions 
    const accordions = document.querySelectorAll('.accordion');


    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function () {
            const accordionContent = accordions[i].nextElementSibling;
            const accordionIcon = accordions[i].querySelector('img');
            if (accordionContent.style.maxHeight == "") {
                if (accordionContent.classList.contains('options-list')) {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 20 + "px";
                    accordionContent.style.paddingBottom = "20px";
                    accordionIcon.style.transform = 'rotate(180deg)';
                }
                else {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 16 + "px";
                    accordionContent.style.paddingBottom = "16px";
                    accordionIcon.style.transform = 'rotate(0deg)';
                }

            }
            else {
                if (accordionContent.classList.contains('options-list')) {
                    accordionContent.style.maxHeight = null;
                    accordionContent.style.paddingBottom = "0px";
                    accordionIcon.style.transform = 'rotate(0deg)';
                }
                else {
                    accordionContent.style.maxHeight = null;
                    accordionContent.style.paddingBottom = "0px";
                    accordionIcon.style.transform = 'rotate(-90deg)';
                }

            }
        })
    }

    // aside checkbox tooltip

    const signTooltip = document.querySelectorAll('.options-list__label span');
    const tooltip = document.querySelectorAll('.options__tooltip');

    for (let i = 0; i < signTooltip.length; i++) {
        signTooltip[i].addEventListener('mouseover', function () {
            tooltip[i].style.maxHeight = tooltip[i].scrollHeight + 30 + "px";
            tooltip[i].style.padding = "10px 14px";
            tooltip[i].style.marginBottom = "10px";
        })
        signTooltip[i].addEventListener('mouseleave', function () {
            tooltip[i].style.maxHeight = null;
            tooltip[i].style.padding = "0px";
            tooltip[i].style.marginBottom = "0px";
        })
    }

    // catalog tabs

    const tabs = document.querySelectorAll('.tabs'),
        tabsTransition = 600;

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i].querySelectorAll('.tab'),
            tabsParent = tabs[i].closest('.tabs__parrent'),
            tabsContent = tabsParent.querySelectorAll('.tabs__content'),
            tabsContentWrapper = tabsParent.querySelector('.tabs__wrapper');

        for (let z = 0; z < tab.length; z++) {
            tab[z].addEventListener('click', function () {

                for (let y = 0; y < tab.length; y++) {
                    tab[y].classList.remove('active');
                    tab[z].classList.add('active');
                    tabsContent[y].style.opacity = '0';
                    tabsContentWrapper.style.minHeight = tabsContent[z].clientHeight + "px";
                    setTimeout(function () {
                        tabsContent[y].classList.remove('active');
                        tabsContent[z].classList.add('active');
                    }, tabsTransition)
                    setTimeout(function () {
                        tabsContent[z].style.opacity = '1';
                    }, tabsTransition + 10)
                }

            })
        }

    }

    // Burger menu
    const menuBurger = document.querySelector('.header__hamburger');
    const menuMobile = document.querySelector('.header .nav');

    menuBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock')
        menuBurger.classList.toggle('active');
        menuMobile.classList.toggle('active');
        window.scrollTo(0, 0);
    })

    // Filter
    const filterBtn = document.querySelector('.catalog__filter');
    const filterClose = document.querySelector('.options__close');

    if (filterBtn) {
        const filter = document.querySelector('.options');
        filterBtn.addEventListener('click', function (e) {
            document.body.classList.toggle('lock')
            filter.classList.toggle('active');
        })
        filterClose.addEventListener('click', function (e) {
            document.body.classList.toggle('lock')
            filter.classList.toggle('active');
        })
    }

    // Select
    let select = function () {
        let selectHeader = document.querySelectorAll('.select-header'),
            selectItem = document.querySelectorAll('.select-body__item'),
            selectAll = document.querySelectorAll('.select'),
            selectAllArrow = document.querySelectorAll('.select-header__icon');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle);
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose);
        });

        function selectToggle() {
            selectHeader[0].classList.remove('error');
            let selectAttr = this.parentElement.getAttribute('data-select');

            for (let i = 0; i < selectAll.length; i++) {
                if (!(selectAttr == selectAll[i].getAttribute('data-select'))) {
                    selectAll[i].classList.remove('is-active');
                    selectAll[i].querySelector('.select-header__icon').classList.remove('select-header__icon_active');
                }
            }

            this.parentElement.classList.toggle('is-active');
            this.querySelector('.select-header__icon').classList.toggle('select-header__icon_active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = this.closest('.select').querySelector('.select-header__item'),
                selectArrow = this.closest('.select').querySelector('.select-header__icon');
            currentText.innerText = text;
            select.classList.remove('is-active');
            selectArrow.classList.remove('select-header__icon_active');
        }

        document.addEventListener('click', function (e) {
            let targetSelect = e.target.closest('.select');
            if (!targetSelect) {
                for (let i = 0; i < selectAll.length; i++) {
                    selectAll[i].classList.remove('is-active');
                }
                for (let i = 0; i < selectAllArrow.length; i++) {
                    selectAllArrow[i].classList.remove('select-header__icon_active');
                }
            }
        })
    }

    select();

    // Dynamic Adaptive
    const parent_original = document.querySelectorAll('.reviews-block'),
        parent = document.querySelectorAll('.reviews__content'),
        item = document.querySelectorAll('.reviews-service');

    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewport_width <= 576 && item[0] && !item[0].classList.contains('done')) {
        for (let i = 0; i < parent.length; i++) {
            parent[i].insertBefore(item[i], parent[i].children[1]);
            item[i].classList.add('done');
        }
    }


    window.addEventListener('resize', function (event) {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width <= 576) {
            if (item[0] && !item[0].classList.contains('done')) {
                for (let i = 0; i < parent.length; i++) {
                    parent[i].insertBefore(item[i], parent[i].children[1]);
                    item[i].classList.add('done');
                }
            }
        }
        else {
            if (item[0] && item[0].classList.contains('done')) {
                for (let i = 0; i < parent.length; i++) {
                    parent_original[i].insertBefore(item[i], parent_original[i].children[1]);
                    item[i].classList.remove('done');
                }
            }
        }
    });


    const form = document.querySelectorAll('.form');

    for (let i = 0; i < form.length; i++) {
        const formEmail = form[i].querySelector('.input[name="email"]'),
            formSelect = form[i].querySelector('.select-header__item'),
            formRating = form[i].querySelector('.addReview-rating__items'),
            formText = form[i].querySelectorAll('.text-validate'),
            formName = form[i].querySelectorAll('.name-validate');

        let formSuccess = 0;
        let formInput = 0;

        form[i].addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();
            formSuccess = 0;
            formInput = 0;
            validateInputs();
            let recaptcha = grecaptcha.getResponse();

            if (formSuccess == formInput) {

                if (recaptcha.length === 0) {
                    alert("Пожалуйста, подтвердите, что вы не робот.");
                }
                else {
                    
                }
            }
        }

        const setError = (element) => {
            element.classList.add('error');
            element.classList.remove('success');
        }

        const setSuccess = (element) => {
            element.classList.add('success');
            element.classList.remove('error');
        }

        const isValidName = name => {
            const re = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
            return re.test(String(name));
        }

        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        const validateInputs = () => {

            // Название сервиса
            if (formSelect) {
                formInput++;
                if (formSelect.innerHTML == "") {
                    setError(formSelect.closest('.select-header'));
                }
                else {
                    setSuccess(formSelect.closest('.select-header'));
                    formSuccess++;
                }
            }

            // Общая оценка
            if (formRating) {
                formInput++;
                if (formRating.getAttribute('data-total-value') == "0") {
                }
                else {
                    formSuccess++;
                }
            }

            // Username validate
            if (formName) {
                for (let i = 0; i < formName.length; i++) {
                    formInput++;
                    const nameValue = formName[i].value.trim();
                    if (nameValue === "") {
                        setError(formName[i]);
                    }
                    else if (!isValidName(nameValue)) {
                        setError(formName[i]);
                    }
                    else {
                        setSuccess(formName[i]);
                        formSuccess++;
                    }
                }
            }

            // Email validate
            if (formEmail) {
                formInput++;
                const emailValue = formEmail.value.trim();
                if (emailValue === "") {
                    setError(formEmail);
                }
                else if (!isValidEmail(emailValue)) {
                    setError(formEmail);
                }
                else {
                    setSuccess(formEmail);
                    formSuccess++;
                }
            }

            // Text validate
            if (formText) {
                for (let i = 0; i < formText.length; i++) {
                    formInput++;
                    if (formText[i].value.length < 2) {
                        setError(formText[i]);
                    }
                    else {
                        setSuccess(formText[i]);
                        formSuccess++;
                    }
                }
            }
        }
    }

    // SWIPER SLIDER
    if (document.querySelector('.swiper')) {
        const swiper2 = new Swiper('.swiper_2', {
            loop: false,
            spaceBetween: 14,
            slidesPerView: 4,
        });

        const swiper1 = new Swiper('.swiper_1', {
            loop: false,
            navigation: {
                nextEl: '.service-slider__next',
                prevEl: '.service-slider__prev',
            },
            thumbs: {
                swiper: swiper2,
            }
        });
    }

    // SmoothScroll anchor
    let linkNav = document.querySelectorAll('[href^="#"]'),
        V = 0.5;
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) {
            e.preventDefault();
            let w = window.pageYOffset,
                hash = this.href.replace(/[^#]*(.*)/, '$1');
            t = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }
        }, false);
    }

    // RATING
    const ratingItemsList = document.querySelectorAll('.addReview-rating__items svg');
    const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

    ratingItemsArray.forEach(item =>
        item.addEventListener('click', () => {
            const { itemValue } = item.dataset;
            item.parentNode.dataset.totalValue = itemValue;
        })
    )

})