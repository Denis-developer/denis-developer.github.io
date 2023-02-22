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

    // Dynamic adaptive
    const parent_original = document.querySelector('.calc-account'),
        parent = document.querySelector('.calc__title_mob'),
        item = document.querySelector('.calc-estimation__title');

    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 992) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[0]);
            item.classList.add('done');
        }
    }

    window.addEventListener('resize', function (event) {
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewport_width <= 992) {
            if (!item.classList.contains('done')) {
                parent.insertBefore(item, parent.children[0]);
                item.classList.add('done');
            }
        }
        else {
            if (item.classList.contains('done')) {
                parent_original.insertBefore(item, parent_original.children[0]);
                item.classList.remove('done');
            }
        }
    });


    // Calculation 
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

        btnParent.classList.add('account');

        textAmout.innerHTML = inputAmount + " ₽";
        textOverpay.innerHTML = calculateTotalInterest(inputAmount, inputTerm, inputRate) + " ₽";
        textTotalAmount.innerHTML = calculateTotalPayments(inputAmount, inputTerm, inputRate) + " ₽";
        textPercentOverpay.innerHTML = calculateInterest(inputAmount, inputTerm, inputRate) + " %";
        textFullCost.innerHTML = calculateTotalCost(inputAmount, inputTerm, inputRate) + " ₽";
        textMonthPayment.innerHTML = calculateMonthlyPayment(inputAmount, inputTerm, inputRate) + " ₽";

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

        btnParent.classList.add('account');

        textAmout.innerHTML = inputAmount + " ₽";
        textOverpay.innerHTML = calculateTotalInterestWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee) + " ₽";
        textTotalAmount.innerHTML = calculateTotalPaymentsWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee) + " ₽";
        textPercentOverpay.innerHTML = calculateInterestOverpaymentWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee) + " %";
        textFullCost.innerHTML = calculateTotalCostWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee) + " ₽";
        textMonthPayment.innerHTML = calculateMonthlyPaymentWithDownPayment(inputAmount, inputTerm, inputRate, inputInitialFee) + " ₽";

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
    })


});

