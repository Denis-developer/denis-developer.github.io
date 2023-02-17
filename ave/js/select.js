let select = function () {
    let selectHeader = document.querySelectorAll('.select-header'),
        selectItem = document.querySelectorAll('.select-body__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle () {
        this.parentElement.classList.toggle('is-active');
        this.querySelector('.select-header__icon').classList.toggle('select-header__icon_active');
    }

    function selectChoose () {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = this.closest('.select').querySelector('.select-header__item'),
            selectArrow = this.closest('.select').querySelector('.select-header__icon');
        currentText.innerText = text;
        select.classList.remove('is-active');
        selectArrow.classList.remove('select-header__icon_active');
    }
}

select();