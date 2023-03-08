class ValidateForm {
    constructor() {
        this.form = document.querySelector('.registerform');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValidFields();
        const validPasswords = this.areValidPasswords();

        if(validFields && validPasswords) {
            alert('Sign up form had been sent');
        }
    }

    isValidFields() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;

            if(!field.value) {
                this.throwError(field, `This field '${label}' is required and cannot be empty.`);
                valid = false;
            }

            if(field.classList.contains('usercpf')) {
                if(!this.validateCPF(field)) valid = false;
            }

            if(field.classList.contains('username')) {
                if(!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    areValidPasswords() {
        let valid = true;

        const pwd = this.form.querySelector('.userpwd');
        const repPwd = this.form.querySelector('.repuserpwd');

        if(pwd.value !== repPwd.value) {
            valid = false;
            this.throwError(pwd, `Sorry, Your passwords do not match.`);
            this.throwError(repPwd, `Sorry, Your passwords do not match.`);
        }
        if(pwd.value.length < 6 || pwd.value.length > 12) {
            valid = false;
            this.throwError(pwd, `Sorry, Your password need to have at least 6 and a max of 12 characters.`);
        }

        return valid;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;
        if(user.length < 3 || user.length > 12) {
            this.throwError(field, 'User input needs to have between 3 and 12 characters.');
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.throwError(field, 'Please, just type letters and/or numbers.');
            valid = false;
        }
        return valid;
    }

    validateCPF(field) {
        const cpf = new ValidateCPF(field.value);

        if(!cpf.validate()) {
            this.throwError(field, `Invalid CPF.`);
            return false;
        }

        return true;
    }

    throwError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}
const validate = new ValidateForm();