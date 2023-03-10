
import ValidateCPF from "./ValidateCPF";

export default class GenerateCPF {

    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min)); 
    }

    format(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }


    generateNewCpf() {
        const cleanCPF = this.rand();
        const digit1 = ValidateCPF.createDigit(cleanCPF);
        const digit2 = ValidateCPF.createDigit(cleanCPF + digit1);
        const newCpf = cleanCPF + digit1 + digit2;
        return this.format(newCpf);
    }
}