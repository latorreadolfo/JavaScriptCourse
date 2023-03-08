//    705.484.450-52 070.987.720-03

class ValidateCPF {
    constructor(sentCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: sentCPF.replace(/\D+/g, '')
            
        });
    }
    
    isSequencial() {
        return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }
    
    newCpfGenerator() {
        const cpfvalues = this.cleanCPF.slice(0, -2);
        const digit1 = ValidateCPF.createDigit(cpfvalues);
        const digit2 = ValidateCPF.createDigit(cpfvalues + digit1);
        this.newCPF = cpfvalues + digit1 + digit2;
    }

    
    static createDigit(cpfvalues) {
        let total = 0;
        let reverse = cpfvalues.length + 1;
        
        for(let numericString of cpfvalues) {
            total += reverse * Number(numericString);
            reverse--;
        }
        
        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }
    
    
    validate() {
        if(!this.cleanCPF) return false;
        if (typeof this.cleanCPF !== 'string') return false;
        if (this.cleanCPF.length !== 11) return false;
        if (this.isSequencial()) return false;
        this.newCpfGenerator();

        return this.newCPF === this.cleanCPF;
    }
}

// const cpf = new ValidateCPF('705.484.450-52');


// if (cpf.validate()) {
//     console.log('Your CPF is valid');
// } else {
//     console.log('Your CPF is not valid');
// }

