document.addEventListener('DOMContentLoaded', function () {

    // aside accordions 
    const accordions = document.querySelectorAll('.options__title:not(:first-child)');


    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function () {
            const accordionContent = accordions[i].nextElementSibling;
            const accordionIcon = accordions[i].querySelector('img');
            if (accordionContent.style.maxHeight == "") {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 20 + "px";
                accordionContent.style.paddingBottom = "20px";
                accordionIcon.style.transform = 'rotate(180deg)';
            }
            else {
                accordionContent.style.maxHeight = null;
                accordionContent.style.paddingBottom = "0px";
                accordionIcon.style.transform = 'rotate(0deg)';
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

    if (menuBurger) {
        const menuMobile = document.querySelector('.header .nav');
        menuBurger.addEventListener('click', function (e) {
            document.body.classList.toggle('lock')
            menuBurger.classList.toggle('active');
            menuMobile.classList.toggle('active');
            window.scrollTo(0, 0);
        })
    }

    // Filter
    const filterBtn = document.querySelector('.service__filter');
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

})