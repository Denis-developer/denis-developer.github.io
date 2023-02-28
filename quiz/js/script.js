document.addEventListener('DOMContentLoaded', function () {

    // Show/hide quiz block
    let quizBlock = document.querySelectorAll('.main-quiz__block');
    let quizBlockAnswer = document.querySelectorAll('.main-quiz__answer');
    let quizQuizSuccess = document.querySelector('.main-quiz_success');
    let quizTransition = 600;
    let quizAnswer = [];

    for (let i = 0; i < quizBlockAnswer.length; i++) {
        quizBlockAnswer[i].addEventListener('click', function () {

            quizAnswer.push(this.innerHTML);

            let quizParrent = this.closest('.main-quiz__block');
            quizParrent.style.opacity = "0";

            setTimeout(function () {
                quizParrent.classList.remove('active');
                quizParrent.nextElementSibling.classList.add('active');
            }, quizTransition)

            setTimeout(function () {
                quizParrent.style.opacity = "1";
            }, quizTransition + 10)

        })

    }


    // Validate form
    const form = document.querySelectorAll('.form');

    for (let i = 0; i < form.length; i++) {
        const formFullName = form[i].querySelector('.main-form__input[name="name"]'),
            formTel = form[i].querySelector('.main-form__input[name="tel"]'),
            formEmail = form[i].querySelector('.main-form__input[name="email"]');

        const textName = document.querySelector('.main-quizSuccess__title span'),
            textEmail = document.querySelector('.main-quizSuccess__text span');

        let formSuccess = 0;
        let formInput = 0;

        form[i].addEventListener('submit', function (e) {
            e.preventDefault();
            formSuccess = 0;
            formInput = 0;
            validateInputs();
            if (formSuccess == formInput) {
                var data = {
                    'name': formFullName.value,
                    'email': formEmail.value,
                    'phone': formTel.value,
                    'custom_array': quizAnswer
                  };
                $.ajax({
                    type: "POST",
                    url: "mailer/smart.php",
                    data: data
                }).done(formSendSuccess());
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

        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        const validateInputs = () => {

            // FullName validate
            if (formFullName) {
                formInput++;
                const usernameValue = formFullName.value.trim();
                if (usernameValue === "") {
                    setError(formFullName);
                }
                else {
                    setSuccess(formFullName);
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
        }
        function formSendSuccess() {
            for (let i = 0; i < quizBlock.length; i++) {
                quizBlock[i].style.opacity = "0";;
                setTimeout(function () {
                    quizBlock[i].classList.remove('active');
                    quizQuizSuccess.classList.add('active');
                }, quizTransition);

                setTimeout(function () {
                    quizQuizSuccess.style.opacity = "1";
                }, quizTransition + 10)
            }
            textName.innerHTML = formFullName.value;
            textEmail.innerHTML = formEmail.value;
        }
    }


})