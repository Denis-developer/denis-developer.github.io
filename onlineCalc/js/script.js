document.addEventListener('DOMContentLoaded', function () {

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

    let mobileTabs = ["Потребительский кредит", "Ипотечный калькулятор", "Залоговый калькулятор"],
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
            body = document.querySelector('body');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle);
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose);
        });

        function selectToggle() {
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
    }

    select();

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
                // form.submit();
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

    function calculateMonthlyPaymentWithDownPayment(loanAmount, loanTerm, interestRate, downPayment) {
        const monthlyInterestRate = interestRate / 12;
        const numberOfPayments = loanTerm * 12;
        const principal = loanAmount - downPayment;

        const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        return monthlyPayment.toFixed(2);
    }

    function calculateTotalInterestWithDownPayment(loanAmount, loanTerm, interestRate, downPayment) {
        const monthlyPayment = calculateMonthlyPaymentWithDownPayment(loanAmount, loanTerm, interestRate, downPayment);
        const numberOfPayments = loanTerm * 12;
        const principal = loanAmount - downPayment;

        const totalInterest = (monthlyPayment * numberOfPayments) - principal + downPayment;

        return totalInterest.toFixed(2);
    }

    function calculateTotalPaymentsWithDownPayment(loanAmount, loanTerm, interestRate, downPayment) {
        const monthlyPayment = calculateMonthlyPaymentWithDownPayment(loanAmount, loanTerm, interestRate, downPayment);
        const numberOfPayments = loanTerm * 12;

        const totalPayments = monthlyPayment * numberOfPayments;

        return totalPayments.toFixed(2);
    }

    function calculateInterestOverpaymentWithDownPayment(loanAmount, loanTerm, interestRate, downPayment) {
        const totalPayments = calculateTotalPaymentsWithDownPayment(loanAmount, loanTerm, interestRate, downPayment);
        const totalLoanAmount = loanAmount - downPayment;

        const interestOverpayment = (totalPayments - totalLoanAmount) / totalLoanAmount * 100;

        return interestOverpayment.toFixed(2);
    }

    function calculateTotalCostWithDownPayment(loanAmount, loanTerm, interestRate, downPayment) {
        const totalInterest = loanAmount * interestRate * (loanTerm / 12); // сумма процентов за весь срок кредита
        const totalCost = loanAmount + totalInterest - downPayment; // полная стоимость кредита

        return totalCost.toFixed(2);
    }



    // Функция для вычисления ежемесячного платежа
    function monthlyPayment(principal, interestRate, term, type) {
        if (type == "Аннуитетный") {
            type = "annuity";
        }
        else {
            type = "differentiated";
        }
        // Преобразуем процентную ставку в дробную
        interestRate = interestRate / 100;

        // Вычисляем ежемесячную процентную ставку
        var monthlyInterestRate = interestRate / 12;

        if (type === "annuity") {
            // Формула для расчета ежемесячного аннуитетного платежа
            var annuityPayment =
                (principal *
                    monthlyInterestRate *
                    Math.pow(1 + monthlyInterestRate, term)) /
                (Math.pow(1 + monthlyInterestRate, term) - 1);

            return annuityPayment.toFixed(2);
        } else if (type === "differentiated") {
            // Формула для расчета дифференцированного платежа
            var totalPayment = 0;
            var payment = 0;

            for (var i = 1; i <= term; i++) {
                payment =
                    (principal / term) +
                    monthlyInterestRate *
                    (principal - (principal * (i - 1)) / term);

                totalPayment += payment;
            }

            return (totalPayment / term).toFixed(2);
        } else {
            return "Invalid payment type";
        }
    }

    function calculateOverpayment(loanAmount, paymentType, loanTerm, interestRate) {
        if (paymentType == "Аннуитетный") {
            paymentType = "annuity";
        }
        else {
            paymentType = "differentiated";
        }
        let totalInterest = 0;
        let monthlyPayment;

        // Вычисляем ежемесячную процентную ставку
        const monthlyRate = interestRate / 12;

        // Вычисляем количество платежей в зависимости от типа платежа
        let numPayments;
        if (paymentType === 'annuity') {
            numPayments = loanTerm * 12;
            monthlyPayment = loanAmount * monthlyRate * (1 + monthlyRate) ** numPayments / ((1 + monthlyRate) ** numPayments - 1);
        } else if (paymentType === 'differentiated') {
            numPayments = loanTerm;
            const principal = loanAmount / numPayments;
            monthlyPayment = principal + loanAmount * monthlyRate;
        } else {
            throw new Error('Invalid payment type');
        }

        // Вычисляем общую сумму процентов
        for (let i = 1; i <= numPayments; i++) {
            const currentInterest = loanAmount * monthlyRate;
            totalInterest += currentInterest;
            loanAmount -= (monthlyPayment - currentInterest);
        }

        // Вычисляем общую переплату
        const totalOverpayment = totalInterest + loanAmount;

        return totalOverpayment.toFixed(2);
    }

    function calculateTotalPayments(loanAmount, paymentType, loanTerm, interestRate) {
        if (paymentType == "Аннуитетный") {
            paymentType = "annuity";
        }
        else {
            paymentType = "equal";
        }
        let totalPayments = 0;

        if (paymentType === 'annuity') {
            const monthlyRate = (interestRate / 100) / 12;
            const annuityFactor = monthlyRate * Math.pow(1 + monthlyRate, loanTerm) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
            totalPayments = annuityFactor * loanAmount * loanTerm;
        } else if (paymentType === 'equal') {
            const monthlyRate = (interestRate / 100) / 12;
            const monthlyPayment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -loanTerm));
            totalPayments = monthlyPayment * loanTerm;
        }

        return totalPayments.toFixed(2);
    }

    function calculateInterest(amount, paymentType, loanTerm, interestRate) {
        if (paymentType == "Аннуитетный") {
            paymentType = "annuity";
        }
        else {
            paymentType = "differentiated";
        }
        let totalInterest = 0;
        let totalAmount = 0;

        if (paymentType === 'annuity') {
            // Вычисление процентной ставки в месяц
            const monthlyInterestRate = interestRate / 1200;

            // Вычисление коэффициента аннуитета
            const annuityCoefficient = monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

            // Вычисление общей суммы выплат
            totalAmount = annuityCoefficient * amount * loanTerm;

            // Вычисление переплаты
            totalInterest = totalAmount - amount;
        } else if (paymentType === 'differentiated') {
            // Вычисление процентной ставки в месяц
            const monthlyInterestRate = interestRate / 1200;

            // Вычисление суммы ежемесячного платежа по кредиту
            const monthlyPayment = amount / loanTerm + amount * monthlyInterestRate;

            // Вычисление общей суммы выплат
            totalAmount = monthlyPayment * loanTerm;

            // Вычисление переплаты
            totalInterest = totalAmount - amount;
        }

        return totalInterest.toFixed(2);
    }

    function totalCost(loanAmount, paymentType, loanTerm, interestRate) {
        if (paymentType == "Аннуитетный") {
            paymentType = "annuity";
        }
        else {
            paymentType = "differentiated";
        }
        let totalPayment = 0;
        let interest = 0;
        let principal = loanAmount;
        let monthlyRate = interestRate / 1200;
        let months = loanTerm * 12;
      
        if (paymentType === 'annuity') {
          totalPayment = loanAmount * (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, months) - 1)) * months;
          interest = totalPayment - loanAmount;
        } else if (paymentType === 'differentiated') {
          for (let i = 0; i < months; i++) {
            let monthlyPrincipal = loanAmount / months;
            let monthlyInterest = principal * monthlyRate;
            totalPayment += monthlyPrincipal + monthlyInterest;
            interest += monthlyInterest;
            principal -= monthlyPrincipal;
          }
        }
        return totalPayment.toFixed(2);
      }
      





    let btnСonsumer = document.querySelector('.consumer .calc-option__btn');
    let btnMortgage = document.querySelector('.mortgage .calc-option__btn');
    let btnSecured = document.querySelector('.secured .calc-option__btn');

    btnСonsumer.addEventListener('click', function () {
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

            let percentDiagram = (calculateTotalInterest(inputAmount, inputTerm, inputRate) * 100 / inputAmount).toFixed(0);
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
            textOverpay.innerHTML = numberSpace(calculateTotalInterestWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee)) + " ₽";
            textTotalAmount.innerHTML = numberSpace(calculateTotalPaymentsWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee)) + " ₽";
            textPercentOverpay.innerHTML = numberSpace(calculateInterestOverpaymentWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee)) + " %";
            textFullCost.innerHTML = numberSpace(calculateTotalCostWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee)) + " ₽";
            textMonthPayment.innerHTML = numberSpace(calculateMonthlyPaymentWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee)) + " ₽";

            let percentDiagram = (calculateTotalInterest(inputAmount, inputTerm, inputRate) * 100 / inputAmount).toFixed(0);
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
            textOverpay.innerHTML = numberSpace(calculateOverpayment(inputAmount, inputPaymentType, inputTerm, inputRate)) + " ₽";
            textTotalAmount.innerHTML = numberSpace(calculateTotalPayments(inputAmount, inputPaymentType, inputTerm, inputRate)) + " ₽";
            textPercentOverpay.innerHTML = numberSpace(calculateInterest(inputAmount, inputPaymentType, inputTerm, inputRate)) + " %";
            textFullCost.innerHTML = numberSpace(totalCost(inputAmount, inputPaymentType, inputTerm, inputRate)) + " ₽";
            textMonthPayment.innerHTML = numberSpace(monthlyPayment(inputAmount, inputRate, inputTerm, inputPaymentType)) + " ₽";

            let percentDiagram = (calculateTotalInterest(inputAmount, inputTerm, inputRate) * 100 / inputAmount).toFixed(0);
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

