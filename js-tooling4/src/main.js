import CPFGenerator from './modules/CPFGenerator';

import '../src/assets/css/styles.css';
import GenerateCPF from './modules/CPFGenerator';

(function() {
    const generate = new GenerateCPF();
    const createdCPF = document.querySelector('.output-cpf');
    createdCPF.innerHTML = generate.generateNewCpf();
})();