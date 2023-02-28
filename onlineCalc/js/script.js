document.addEventListener('DOMContentLoaded', function () {

    // Tabs
    const tabs = document.querySelectorAll('.tabs'),
        tabsTransition = 500;

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

    // Mobile tabs
    let mobileTabs = ["Потребительский", "Ипотечный", "Залоговый"],
        tabPrev = document.querySelector('.calc-tabs__prev'),
        tabNext = document.querySelector('.calc-tabs__next'),
        tabCurrent = document.querySelector('.calc-tabs__current'),
        tabsContent = document.querySelectorAll('.tabs__content'),
        tabsContentWrapper = document.querySelector('.tabs__wrapper'),
        tabIndex = 0;

    tabPrev.addEventListener('click', function () {
        if (tabIndex == 0) {
            tabIndex = 2;
        }
        else {
            tabIndex--;
        }
        tabCurrent.innerHTML = mobileTabs[tabIndex];

        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].style.opacity = '0';
            tabsContentWrapper.style.minHeight = tabsContent[tabIndex].clientHeight + "px";
            setTimeout(function () {
                tabsContent[i].classList.remove('active');
                tabsContent[tabIndex].classList.add('active');
            }, tabsTransition)
            setTimeout(function () {
                tabsContent[tabIndex].style.opacity = '1';
            }, tabsTransition + 10)
        }
    })

    tabNext.addEventListener('click', function () {
        if (tabIndex == 2) {
            tabIndex = 0;
        }
        else {
            tabIndex++;
        }
        tabCurrent.innerHTML = mobileTabs[tabIndex];

        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].style.opacity = '0';
            tabsContentWrapper.style.minHeight = tabsContent[tabIndex].clientHeight + "px";
            setTimeout(function () {
                tabsContent[i].classList.remove('active');
                tabsContent[tabIndex].classList.add('active');
            }, tabsTransition)
            setTimeout(function () {
                tabsContent[tabIndex].style.opacity = '1';
            }, tabsTransition + 10)
        }
    })


    // Select
    let select = function () {
        let selectHeader = document.querySelectorAll('.select-header'),
            selectItem = document.querySelectorAll('.select-body__item'),
            selectAll = document.querySelectorAll('.select'),
            selectAllArrow = document.querySelectorAll('.select-header__icon'),
            body = document.querySelector('body');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle);
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose);
        });

        function selectToggle() {
            let selectAttr = this.parentElement.getAttribute('data-select');

            for (let i = 0; i < selectAll.length; i++) {
                if (selectAttr == selectAll[i].getAttribute('data-select')) {
                    console.log('true');
                }
                else {
                    selectAll[i].classList.remove('is-active');
                    selectAll[i].querySelector('.select-header__icon').classList.remove('select-header__icon_active');
                }
            }

            this.parentElement.classList.toggle('is-active');
            this.querySelector('.select-header__icon').classList.toggle('select-header__icon_active');
            body.classList.toggle('lock');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = this.closest('.select').querySelector('.select-header__item'),
                selectArrow = this.closest('.select').querySelector('.select-header__icon');
            currentText.innerText = text;
            select.classList.remove('is-active');
            selectArrow.classList.remove('select-header__icon_active');
            body.classList.toggle('lock');
        }

        document.addEventListener('click', function (e) {
            let targetSelect = e.target.closest('.select');
            if (!targetSelect) {
                let selectAll = document.querySelectorAll('.select');
                let selectAllArrow = document.querySelectorAll('.select-header__icon');
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

    // Articles show/hide text
    const showFullText = document.querySelectorAll('.article__link');

    for (let i = 0; i < showFullText.length; i++) {
        showFullText[i].addEventListener('click', function (e) {
            e.preventDefault();
            const articleParent = showFullText[i].closest('article');

            if (articleParent.classList.contains('show')) {
                showFullText[i].innerHTML = "Подробнее";
            }
            else {
                showFullText[i].innerHTML = "Скрыть";
            }

            articleParent.classList.toggle('show');
        })
    }

    // Validate form
    const form = document.querySelectorAll('.form');

    for (let i = 0; i < form.length; i++) {
        const formUsername = form[i].querySelector('.main-form__input[name="username"]'),
            formTel = form[i].querySelector('.main-form__input[name="tel"]');

        let formSuccess = 0;
        let formInput = 0;

        form[i].addEventListener('submit', function (e) {
            e.preventDefault();
            formSuccess = 0;
            formInput = 0;
            validateInputs();
            if (formSuccess == formInput) {
                $.ajax({
                    type: "POST",
                    url: "mailer/smart.php",
                    data: $(this).serialize()
                }).done(function () {
                    $(this).find("input").val("");
                    $('form').trigger('reset');
                    $('form input').removeClass('success');
                    $('.main-form__message').addClass('active');
                });
                return false;
            }
        })

        const setError = (element) => {
            element.classList.add('error');
            element.classList.remove('success');
        }

        const setSuccess = (element) => {
            element.classList.add('success');
            element.classList.remove('error');
        }

        const isValidTel = tel => {
            const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            return re.test(String(tel).toLowerCase());
        }

        const isValidName = name => {
            // ^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$
            const re = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
            return re.test(String(name));
        }

        const validateInputs = () => {

            // Username validate
            if (formUsername) {
                formInput++;
                const usernameValue = formUsername.value.trim();
                if (usernameValue === "") {
                    setError(formUsername);
                }
                else if (!isValidName(usernameValue)) {
                    setError(formUsername);
                }
                else {
                    setSuccess(formUsername);
                    formSuccess++;
                }
            }

            // Telephone validate
            if (formTel) {
                formInput++;
                const telValue = formTel.value.trim();
                if (telValue === "") {
                    setError(formTel);
                }
                else if (!isValidTel(telValue)) {
                    setError(formTel);
                }
                else {
                    setSuccess(formTel);
                    formSuccess++;
                }
            }
        }
    }

    // Adaptove mobile select
    const allSelect = document.querySelectorAll('.select-body');

    const setHeight = function () {
        const currentHeight = window.innerHeight;
        for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].style.height = `${currentHeight}px`;

        }
    }

    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 576) {
        setHeight();
    }

    window.addEventListener('resize', function (event) {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width <= 576) {
            setHeight();
        }
        else {
            for (let i = 0; i < allSelect.length; i++) {
                allSelect[i].style.height = "auto";

            }
        }
    });

    // Dynamic adaptive
    const parent_original = document.querySelectorAll('.calc-account'),
        parent = document.querySelectorAll('.calc__title_mob'),
        item = document.querySelectorAll('.calc-estimation__title');

    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 992) {
        for (let i = 0; i < item.length; i++) {
            if (!item[i].classList.contains('done')) {
                parent[i].insertBefore(item[i], parent[i].children[0]);
                item[i].classList.add('done');
            }
        }
    }

    window.addEventListener('resize', function (event) {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width <= 992) {
            for (let i = 0; i < item.length; i++) {
                if (!item[i].classList.contains('done')) {
                    parent[i].insertBefore(item[i], parent[i].children[0]);
                    item[i].classList.add('done');
                }
            }
        }
        else {
            for (let i = 0; i < item.length; i++) {
                if (item[i].classList.contains('done')) {
                    parent_original[i].insertBefore(item[i], parent_original[i].children[0]);
                    item[i].classList.remove('done');
                }
            }

        }
    });

    // Input amount
    const calcInput = document.querySelectorAll('.calc-option__input input');

    for (let i = 0; i < calcInput.length; i++) {
        calcInput[i].addEventListener('keyup', function (e) {
            if (e.keyCode < 48 || e.keyCode > 57) {
                this.value = this.value.replace(/[^\d]/g, '');
                let outrez = (this.value + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                this.value = outrez;
            }
            else {
                let inputValue = this.value.replace(/ /g, '');
                let outrez = (inputValue + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                this.value = outrez;
            }

        })
    }


    // Calculation 
    function numberSpace(value) {
        let outrez = (value + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        return outrez;
    }

    let btnСonsumer = document.querySelector('.consumer .calc-option__btn');
    let btnMortgage = document.querySelector('.mortgage .calc-option__btn');
    let btnSecured = document.querySelector('.secured .calc-option__btn');

    btnСonsumer.addEventListener('click', function () {

        function calculateMonthlyPayment(loanAmount, loanTerm, interestRate) {
            const monthlyInterestRate = interestRate / 12; // Рассчитываем месячную процентную ставку
            const numberOfPayments = loanTerm * 12; // Рассчитываем общее количество платежей

            const monthlyPayment = (loanAmount * monthlyInterestRate) /
                (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)); // Рассчитываем ежемесячный платеж

            return monthlyPayment.toFixed(2); // Округляем до двух знаков после запятой
        }

        function calculateTotalInterest(loanAmount, loanTerm, interestRate) {
            const monthlyPayment = calculateMonthlyPayment(loanAmount, loanTerm, interestRate); // Рассчитываем ежемесячный платеж
            const numberOfPayments = loanTerm * 12; // Рассчитываем общее количество платежей

            const totalPayment = monthlyPayment * numberOfPayments; // Рассчитываем общую сумму выплат
            const totalInterest = totalPayment - loanAmount; // Рассчитываем общую сумму переплаты

            return totalInterest.toFixed(2); // Округляем до двух знаков после запятой
        }

        function calculateTotalPayments(loanAmount, loanTerm, interestRate) {
            const monthlyPayment = calculateMonthlyPayment(loanAmount, loanTerm, interestRate); // Рассчитываем ежемесячный платеж
            const numberOfPayments = loanTerm * 12; // Рассчитываем общее количество платежей

            const totalPayment = monthlyPayment * numberOfPayments; // Рассчитываем общую сумму выплат

            return totalPayment.toFixed(2); // Округляем до двух знаков после запятой
        }

        function calculateInterest(loanAmount, loanTerm, interestRate) {
            const totalPayments = calculateTotalPayments(loanAmount, loanTerm, interestRate); // Рассчитываем общую сумму выплат
            const totalInterest = totalPayments - loanAmount; // Вычитаем из общей суммы выплат исходную сумму кредита

            const interestPercentage = (totalInterest / loanAmount) * 100; // Рассчитываем процент переплаты

            return interestPercentage.toFixed(2); // Округляем до двух знаков после запятой
        }

        function calculateTotalCost(loanAmount, loanTerm, interestRate) {
            const totalPayments = calculateTotalPayments(loanAmount, loanTerm, interestRate); // Рассчитываем общую сумму выплат
            const totalInterest = totalPayments - loanAmount; // Вычитаем из общей суммы выплат исходную сумму кредита

            const totalCost = loanAmount + totalInterest; // Складываем исходную сумму кредита и сумму переплаты

            return totalCost.toFixed(2); // Округляем до двух знаков после запятой
        }

        const btnParent = this.closest('.calc-content'),
            inputAmount = +btnParent.querySelector('input').value.replace(/ /g, ''),
            inputTerm = +btnParent.querySelector('.term').innerText.replace(/ /g, '').replace(/[a-zа-яё]/gi, ''),
            inputRate = (+btnParent.querySelector('.rate').innerText) / 100,
            textAmout = btnParent.querySelector('.textAmount'),
            textOverpay = btnParent.querySelector('.textOverpay'),
            textTotalAmount = btnParent.querySelector('.textTotalAmount'),
            textPercentOverpay = btnParent.querySelector('.textPercentOverpay'),
            textFullCost = btnParent.querySelector('.textFullCost'),
            textMonthPayment = btnParent.querySelector('.calc-diagram__value');

        if (!inputAmount == "") {
            btnParent.classList.add('account');

            textAmout.innerHTML = numberSpace(inputAmount) + " ₽";
            textOverpay.innerHTML = numberSpace(calculateTotalInterest(inputAmount, inputTerm, inputRate)) + " ₽";
            textTotalAmount.innerHTML = numberSpace(calculateTotalPayments(inputAmount, inputTerm, inputRate)) + " ₽";
            textPercentOverpay.innerHTML = numberSpace(calculateInterest(inputAmount, inputTerm, inputRate)) + " %";
            textFullCost.innerHTML = numberSpace(calculateTotalCost(inputAmount, inputTerm, inputRate)) + " ₽";
            textMonthPayment.innerHTML = numberSpace(calculateMonthlyPayment(inputAmount, inputTerm, inputRate)) + " ₽";

            let percentDiagram = (calculateTotalInterest(inputAmount, inputTerm, inputRate) * 100 / calculateTotalPayments(inputAmount, inputTerm, inputRate)).toFixed(0);
            let calcDiagram = btnParent.querySelector('.calc-diagram'),
                calcProgressValue = 0,
                calcEndValue,
                speed = 40;
            calcEndValue = percentDiagram;
            let progress = setInterval(() => {
                calcProgressValue++;
                calcDiagram.style.background = `conic-gradient(
                    #005BA4 ${calcProgressValue * 3.6}deg,
                    #fff ${calcProgressValue * 3.6}deg
                )`
                if (calcProgressValue == calcEndValue) {
                    clearInterval(progress);
                }
            }, speed)
        }
    })


    btnMortgage.addEventListener('click', function () {

        function calculateMonthlyPaymentWithDownPayment(propertyValue, downPayment, loanTerm, interestRate) {
            let loanAmount = propertyValue * (1 - downPayment); // сумма кредита
            let monthlyInterestRate = interestRate / 12; // месячная процентная ставка
            let months = loanTerm * 12; // общее количество месяцев кредита

            // Вычисляем месячный аннуитетный платеж
            let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

            // Округляем до двух знаков после запятой и возвращаем результат
            return parseFloat(monthlyPayment.toFixed(2));
        }

        function calculateTotalInterestWithDownPayment(propertyValue, downPayment, loanTerm, interestRate) {
            let loanAmount = propertyValue * (1 - downPayment); // сумма кредита
            let monthlyInterestRate = interestRate / 12; // месячная процентная ставка
            let months = loanTerm * 12; // общее количество месяцев кредита

            // Вычисляем ежемесячный аннуитетный платеж
            let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

            // Вычисляем общую переплату по кредиту
            let totalOverpayment = monthlyPayment * months - loanAmount;

            // Округляем до двух знаков после запятой и возвращаем результат
            return parseFloat(totalOverpayment.toFixed(2));
        }

        function calculateTotalPaymentsWithDownPayment(propertyValue, downPayment, loanTerm, interestRate) {
            let loanAmount = propertyValue * (1 - downPayment); // сумма кредита
            let monthlyInterestRate = interestRate / 12; // месячная процентная ставка
            let months = loanTerm * 12; // общее количество месяцев кредита

            // Вычисляем ежемесячный аннуитетный платеж
            let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

            // Вычисляем общую сумму выплат
            let totalPayments = monthlyPayment * months;

            // Округляем до двух знаков после запятой и возвращаем результат
            return parseFloat(totalPayments.toFixed(2));
        }

        function calculateInterestOverpaymentWithDownPayment(propertyValue, downPayment, loanTerm, interestRate) {
            let loanAmount = propertyValue * (1 - downPayment); // сумма кредита
            let monthlyInterestRate = interestRate / 12; // месячная процентная ставка
            let months = loanTerm * 12; // общее количество месяцев кредита

            // Вычисляем ежемесячный аннуитетный платеж
            let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

            // Вычисляем общую сумму выплат
            let totalPayments = monthlyPayment * months;

            // Вычисляем процент переплаты
            let interestOverpayment = (totalPayments - loanAmount) / loanAmount * 100;

            // Округляем до двух знаков после запятой и возвращаем результат
            return parseFloat(interestOverpayment.toFixed(2));
        }

        function calculateTotalCostWithDownPayment(propertyValue, downPayment, loanTerm, interestRate) {
            let loanAmount = propertyValue * (1 - downPayment); // сумма кредита
            let monthlyInterestRate = interestRate / 12; // месячная процентная ставка
            let months = loanTerm * 12; // общее количество месяцев кредита

            // Вычисляем ежемесячный аннуитетный платеж
            let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

            // Вычисляем общую сумму выплат
            let totalPayments = monthlyPayment * months;

            // Вычисляем полную стоимость кредита
            let totalLoanCost = totalPayments + (propertyValue * downPayment);

            // Округляем до двух знаков после запятой и возвращаем результат
            return parseFloat(totalLoanCost.toFixed(2));
        }

        const btnParent = this.closest('.calc-content'),
            inputAmount = +btnParent.querySelector('input').value.replace(/ /g, ''),
            inputTerm = +btnParent.querySelector('.term').innerText.replace(/ /g, '').replace(/[a-zа-яё]/gi, ''),
            inputRate = (+btnParent.querySelector('.rate').innerText) / 100,
            inputInitialFee = (+btnParent.querySelector('.initialFee').innerText) / 100,
            textAmout = btnParent.querySelector('.textAmount'),
            textOverpay = btnParent.querySelector('.textOverpay'),
            textTotalAmount = btnParent.querySelector('.textTotalAmount'),
            textPercentOverpay = btnParent.querySelector('.textPercentOverpay'),
            textFullCost = btnParent.querySelector('.textFullCost'),
            textMonthPayment = btnParent.querySelector('.calc-diagram__value');

        if (!inputAmount == "") {
            btnParent.classList.add('account');

            textAmout.innerHTML = numberSpace(inputAmount) + " ₽";
            textOverpay.innerHTML = numberSpace(calculateTotalInterestWithDownPayment(inputAmount, inputInitialFee, inputTerm, inputRate)) + " ₽";
            textTotalAmount.innerHTML = numberSpace(calculateTotalPaymentsWithDownPayment(inputAmount, inputInitialFee, inputTerm, inputRate)) + " ₽";
            textPercentOverpay.innerHTML = numberSpace(calculateInterestOverpaymentWithDownPayment(inputAmount, inputInitialFee, inputTerm, inputRate)) + " %";
            textFullCost.innerHTML = numberSpace(calculateTotalCostWithDownPayment(inputAmount, inputInitialFee, inputTerm, inputRate)) + " ₽";
            textMonthPayment.innerHTML = numberSpace(calculateMonthlyPaymentWithDownPayment(inputAmount, inputInitialFee, inputTerm, inputRate)) + " ₽";

            let percentDiagram = (calculateTotalInterestWithDownPayment(inputAmount, inputInitialFee, inputTerm, inputRate) * 100 / calculateTotalPaymentsWithDownPayment(inputAmount, inputInitialFee, inputTerm, inputRate)).toFixed(0);
            let calcDiagram = btnParent.querySelector('.calc-diagram'),
                calcProgressValue = 0,
                calcEndValue,
                speed = 40;
            calcEndValue = percentDiagram;
            let progress = setInterval(() => {
                calcProgressValue++;
                calcDiagram.style.background = `conic-gradient(
                    #005BA4 ${calcProgressValue * 3.6}deg,
                    #fff ${calcProgressValue * 3.6}deg
                )`
                if (calcProgressValue == calcEndValue) {
                    clearInterval(progress);
                }
            }, speed)
        }

    })

    btnSecured.addEventListener('click', function () {

        // Функция для вычисления ежемесячного платежа
        function calculateMonthlyPayment(loanAmount, paymentType, loanTerm, interestRate) {
            const monthsInYear = 12;
            const totalPayments = loanTerm * monthsInYear;
            let monthlyPayment = 0;

            // Вычисляем месячную процентную ставку
            const monthlyInterestRate = interestRate / monthsInYear;

            if (paymentType === 'Аннуитетный') {
                // Вычисляем месячный платеж для аннуитетного платежа
                const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
                monthlyPayment = loanAmount / discountFactor;
            } else if (paymentType === 'Шаровый') {
                // Вычисляем месячный платеж для шарового платежа
                monthlyPayment = loanAmount / totalPayments;
                monthlyPayment += loanAmount * monthlyInterestRate;
            }

            // Округляем до двух знаков после запятой
            monthlyPayment = Math.round(monthlyPayment * 100) / 100;

            return monthlyPayment.toFixed(2);
        }


        function calculateTotalInterest2(loanAmount, paymentType, loanTerm, interestRate) {
            const monthsInYear = 12;
            const totalPayments = loanTerm * monthsInYear;
            let totalInterest = 0;

            // Вычисляем месячную процентную ставку
            const monthlyInterestRate = interestRate / monthsInYear;

            if (paymentType === 'Аннуитетный') {
                // Вычисляем месячный платеж для аннуитетного платежа
                const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
                const monthlyPayment = loanAmount / discountFactor;

                // Вычисляем общую переплату для аннуитетного платежа
                totalInterest = (monthlyPayment * totalPayments) - loanAmount;
            } else if (paymentType === 'Шаровый') {
                // Вычисляем месячный платеж для шарового платежа
                const monthlyPayment = loanAmount / totalPayments;
                let remainingLoanAmount = loanAmount;

                // Вычисляем общую переплату для шарового платежа
                for (let i = 0; i < totalPayments; i++) {
                    const monthlyInterest = remainingLoanAmount * monthlyInterestRate;
                    totalInterest += monthlyInterest;
                    remainingLoanAmount -= monthlyPayment;
                }
            }

            // Округляем до двух знаков после запятой
            totalInterest = Math.round(totalInterest * 100) / 100;

            return totalInterest;
        }


        function calculateTotalPayments(loanAmount, paymentType, loanTerm, interestRate) {
            const monthsInYear = 12;
            const totalPayments = loanTerm * monthsInYear;
            let totalAmount = 0;

            // Вычисляем месячную процентную ставку
            const monthlyInterestRate = interestRate / monthsInYear;

            if (paymentType === 'Аннуитетный') {
                // Вычисляем месячный платеж для аннуитетного платежа
                const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
                const monthlyPayment = loanAmount / discountFactor;

                // Вычисляем общую сумму выплат для аннуитетного платежа
                totalAmount = monthlyPayment * totalPayments;
            } else if (paymentType === 'Шаровый') {
                // Вычисляем месячный платеж для шарового платежа
                const monthlyPayment = loanAmount / totalPayments;
                let remainingLoanAmount = loanAmount;

                // Вычисляем общую сумму выплат для шарового платежа
                for (let i = 0; i < totalPayments; i++) {
                    const monthlyInterest = remainingLoanAmount * monthlyInterestRate;
                    const monthlyTotal = monthlyPayment + monthlyInterest;
                    totalAmount += monthlyTotal;
                    remainingLoanAmount -= monthlyPayment;
                }
            }

            // Округляем до двух знаков после запятой
            totalAmount = Math.round(totalAmount * 100) / 100;

            return totalAmount;
        }


        function calculateInterestOverPayment(loanAmount, paymentType, loanTerm, interestRate) {
            const totalPayments = calculateTotalPayments(loanAmount, paymentType, loanTerm, interestRate); // Рассчитываем общую сумму выплат
            const totalInterest = totalPayments - loanAmount; // Вычитаем из общей суммы выплат исходную сумму кредита

            const interestPercentage = (totalInterest / loanAmount) * 100; // Рассчитываем процент переплаты

            return interestPercentage.toFixed(2); // Округляем до двух знаков после запятой
        }



        function calculateTotalCost(totalLoanAmount, paymentType, loanTerm, interestRate) {
            let totalCost = 0;
            let monthlyInterestRate = interestRate / 12;

            if (paymentType === 'Аннуитетный') {
                let monthlyPayment = totalLoanAmount * monthlyInterestRate / (1 - (1 + monthlyInterestRate) ** (-loanTerm * 12));
                totalCost = monthlyPayment * loanTerm * 12;
            } else if (paymentType === 'Шаровый') {
                totalCost = totalLoanAmount + totalLoanAmount * interestRate * loanTerm;
            }

            return totalCost.toFixed(2);
        }


        const btnParent = this.closest('.calc-content'),
            inputAmount = +btnParent.querySelector('input').value.replace(/ /g, ''),
            inputTerm = +btnParent.querySelector('.term').innerText.replace(/ /g, '').replace(/[a-zа-яё]/gi, ''),
            inputRate = (+btnParent.querySelector('.rate').innerText) / 100,
            inputPaymentType = btnParent.querySelector('.paymentType').innerText,
            textAmout = btnParent.querySelector('.textAmount'),
            textOverpay = btnParent.querySelector('.textOverpay'),
            textTotalAmount = btnParent.querySelector('.textTotalAmount'),
            textPercentOverpay = btnParent.querySelector('.textPercentOverpay'),
            textFullCost = btnParent.querySelector('.textFullCost'),
            textMonthPayment = btnParent.querySelector('.calc-diagram__value');

        if (!inputAmount == "") {
            btnParent.classList.add('account');

            textAmout.innerHTML = numberSpace(inputAmount) + " ₽";
            textOverpay.innerHTML = numberSpace(calculateTotalInterest2(inputAmount, inputPaymentType, inputTerm, inputRate)) + " ₽";
            textTotalAmount.innerHTML = numberSpace(calculateTotalPayments(inputAmount, inputPaymentType, inputTerm, inputRate)) + " ₽";
            textPercentOverpay.innerHTML = numberSpace(calculateInterestOverPayment(inputAmount, inputPaymentType, inputTerm, inputRate)) + " %";
            textFullCost.innerHTML = numberSpace(calculateTotalCost(inputAmount, inputPaymentType, inputTerm, inputRate)) + " ₽";
            textMonthPayment.innerHTML = numberSpace(calculateMonthlyPayment(inputAmount, inputPaymentType, inputTerm, inputRate)) + " ₽";

            let percentDiagram = (calculateTotalInterest2(inputAmount, inputPaymentType, inputTerm, inputRate) * 100 / calculateTotalPayments(inputAmount, inputPaymentType, inputTerm, inputRate)).toFixed(0);
            let calcDiagram = btnParent.querySelector('.calc-diagram'),
                calcProgressValue = 0,
                calcEndValue,
                speed = 40;
            calcEndValue = percentDiagram;
            let progress = setInterval(() => {
                calcProgressValue++;
                calcDiagram.style.background = `conic-gradient(
                    #005BA4 ${calcProgressValue * 3.6}deg,
                    #fff ${calcProgressValue * 3.6}deg
                )`
                if (calcProgressValue == calcEndValue) {
                    clearInterval(progress);
                }
            }, speed)
        }

    })


});

