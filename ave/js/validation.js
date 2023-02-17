const form = document.querySelectorAll('.form');

for (let i = 0; i < form.length; i++) {
    const formUsername = form[i].querySelector('.form-control__input[name="username"]'),
        formEmail = form[i].querySelector('.form-control__input[name="email"]'),
        formPassword = form[i].querySelector('.form-control__input[name="password"]'),
        formPassword2 = form[i].querySelector('.form-control__input[name="password2"]'),
        formCheckbox = form[i].querySelector('.form-control__checkbox');

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

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.form-control__error');
        errorDisplay.style.display = "block";

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.form-control__error');
        errorDisplay.style.display = "none";

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {

        // Username validate
        if (formUsername) {
            formInput++;
            const usernameValue = formUsername.value.trim();
            if (usernameValue === "") {
                setError(formUsername, "Username is required");
            }
            else {
                setSuccess(formUsername);
                formSuccess++;
            }
        }

        // Email validate
        if (formEmail) {
            formInput++;
            const emailValue = formEmail.value.trim();
            if (emailValue === "") {
                setError(formEmail, "Email is required");
            }
            else if (!isValidEmail(emailValue)) {
                setError(formEmail, "Provide a valid email address");
            }
            else {
                setSuccess(formEmail);
                formSuccess++;
            }
        }

        // Password validate
        if (formPassword) {
            formInput++;
            const passwordValue = formPassword.value.trim();
            if (passwordValue === "") {
                setError(formPassword, "Password is required");
            }
            else if (passwordValue.length < 8) {
                setError(formPassword, "Password must be at least 8 character");
            }
            else {
                setSuccess(formPassword);
                formSuccess++;
            }

            // Password confirm validate
            if (formPassword2) {
                formInput++;
                const password2Value = formPassword2.value.trim();
                if (password2Value === "") {
                    setError(formPassword2, "Please confirm your password");
                }
                else if (password2Value !== passwordValue) {
                    setError(formPassword2, "Passwords doesn't match");
                }
                else {
                    setSuccess(formPassword2);
                    formSuccess++;
                }
            }
        }

        // Checkbox validate
        if (formCheckbox) {
            formInput++;
            if (!formCheckbox.checked) {
                formCheckbox.classList.remove('success');
                formCheckbox.classList.add('error');
            }
            else {
                formCheckbox.classList.remove('error');
                formCheckbox.classList.add('success');
                formSuccess++;
            }
        }
    }
}


