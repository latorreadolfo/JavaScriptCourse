//    705.484.450-52 070.987.720-03

class ValidateCPF {
    constructor(sentCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            enumerable: true,
            get: function() {
                return sentCPF.replace(/\D+/g, '');
            }
        });
    }
    
    
    validate() {
        if (typeof this.cleanCPF === 'undefined') return false;
        if (this.cleanCPF.length !== 11) return false;
        if (this.isSequencial()) return false;
        
        const cpfvalues = this.cleanCPF.slice(0, -2);
        const digit1 = this.createDigit(cpfvalues);
        const digit2 = this.createDigit(cpfvalues + digit1);
        
        const newCPF = cpfvalues + digit1 + digit2;
        
        
        return newCPF === this.cleanCPF;
    }

    createDigit(cpfvalues) {
        const cpfArray = Array.from(cpfvalues);

        let regressive = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressive * Number(val));
            regressive--;
            return ac;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    }

    isSequencial() {
        const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
        return sequence === this.cleanCPF;
    }

}

const cpf = new ValidateCPF('705.484.450-52');


if (cpf.validate()) {
    console.log('Your CPF is valid');
} else {
    console.log('Your CPF is not valid');
}

