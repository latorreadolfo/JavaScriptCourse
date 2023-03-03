function Calculator() {
    this.display = document.querySelector('.display');

    this.startup = () => {
        this.btnClick();
        this.pressedEnter();
    };

    this.btnClick = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.btnForDisplay(el);
            if (el.classList.contains('btn-cl')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.clearOne();
            if (el.classList.contains('btn-eq')) this.doMath();
        });
    };
    this.clearDisplay = () => this.display.value = '';
    this.clearOne = () => this.display.value = this.display.value.slice(0, -1);
    this.btnForDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };


    this.pressedEnter = () => {
        this.display.addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                this.doMath();
            }
        });
    };

    this.doMath = () => {
        let count = this.display.value;

        try {
            count = eval(count);

            if (!count) {
                alert('Bad input data.');
                return;
            }
            this.display.value = String(count);
        } catch (e) {
            alert('Wrong input');
            return;
        }
    };









}

const calculator = new Calculator();
calculator.startup();