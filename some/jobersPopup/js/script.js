document.addEventListener('DOMContentLoaded', function () {

    // RATING AND POPUP SEND
    const ratingItemsList = document.querySelectorAll('.popup-rating svg');
    const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
    const popupForm = document.querySelector('.popup-form');
    const popupFormBtn = document.querySelector('.popup-form__btn');
    const popupFormTextarea = document.querySelector('.popup-form__textarea');
    const popupContentBtn = document.querySelector('.popup-content__btn');


    ratingItemsArray.forEach(item =>
        item.addEventListener('click', () => {
            const { itemValue } = item.dataset;
            item.parentNode.dataset.totalValue = itemValue;
            popupContentBtn.classList.add('active');
        })
    )

    popupContentBtn.addEventListener('click', function() {
        popupForm.classList.add('active');
        popupContentBtn.classList.remove('active');
    })

    popupFormTextarea.addEventListener('focus', function() {
        popupFormTextarea.classList.remove('error');
    })

    popupFormBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (popupFormTextarea.value.length == "") {
            popupFormTextarea.classList.add('error');
        }
        else {
            formSend();
        }
    })

    function formSend() {
        const popupBtnClose = document.querySelector('.popup-content__btnclose');
        const popupRating = document.querySelector('.popup-rating');
        const popupTitle = document.querySelector('.popup-content__title');
        const popupContent = document.querySelector('.popup-content');

        popupFormTextarea.classList.remove('error');
        popupForm.classList.remove('active');
        popupBtnClose.classList.add('active');
        popupRating.classList.add('hidden');
        popupTitle.textContent = 'Благодарим Вас за обратную связь!';
        popupTitle.style.marginBottom = '50px';
        popupContent.classList.add('formSend');
    }


    // POPUP
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