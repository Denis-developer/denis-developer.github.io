document.addEventListener('DOMContentLoaded', function () {

    const popupLink = document.querySelector('.popup__link');
    const popup = document.querySelector('.popup');
    const popupClose = document.querySelector('.popup__close');

    popupLink.addEventListener('click', function () {
        popup.classList.add('show');
        document.body.classList.add('lock');
        document.documentElement.classList.add('lock');
    });

    popupClose.addEventListener('click', function () {
        popup.classList.remove('show');
        document.body.classList.remove('lock');
        document.documentElement.classList.remove('lock');
    });

})