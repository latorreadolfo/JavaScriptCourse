function createCalculator() {
    return {
        display: document.querySelector('.display'),

        startup() {
            this.btnClick();
            this.pressedEnter();
        },

        pressedEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.doMath();
                }
            });
        },

        doMath() {
            let count = this.display.value;

            try {
                count = eval(count);

                if(!count) {
                    alert('Bad input data.');
                    return;
                }
                this.display.value = String(count);
            } catch(e) {
                alert('Wrong input');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },


        btnClick() {
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }

                if(el.classList.contains('btn-cl')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.clearOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.doMath();
                }
            });
        },

        btnForDisplay(value) {
            this.display.value += value;
        }


    };
}

const calculator = createCalculator();
calculator.startup();