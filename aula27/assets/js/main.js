const formInput = document.querySelector('#formInput');

formInput.addEventListener('submit', function (event) {
    event.preventDefault();
    const weightInput = event.target.querySelector('#input-weight');            // -> taking input values
    const heightInput = event.target.querySelector('#input-height');            // -> taking input values

    const weight = Number(weightInput.value);                                   // -> converting 'string numbers' to a real number
    const height = Number(heightInput.value);                                   // -> converting 'string numbers' to a real number

    if (!weight) {                                                              // -> denying a false entry in weight
        setResult('Invalid Weight Input', false);
        return;
    }

    if (!height) {                                                              // -> denying a false entry in height
        setResult('Invalid Height Input', false);
        return;
    }

    const bodyMassIndex = getBodyMassIndex(weight, height);
    const range = getRangeBMI(bodyMassIndex);
    const message = `Your BMI is: ${bodyMassIndex} and you're in: ${range}`;
    setResult(message, true);

    console.log(bodyMassIndex, range);

});

function getRangeBMI(bodyMassIndex) {                                       // -> this function find a range stats for our bodyMassIndex value
    const range = ['Underweight', 'Normal Weight Stats', 'Above Normal Weight Stats', 'Obesity Stage 1', 'Obesity Stage 2', 'Obesity Stage 3'];

    if (bodyMassIndex >= 39.9) return range[5];
    if (bodyMassIndex >= 34.9) return range[4];
    if (bodyMassIndex >= 29.9) return range[3];
    if (bodyMassIndex >= 24.9) return range[2];
    if (bodyMassIndex >= 18.5) return range[1];
    if (bodyMassIndex < 18.5) return range[0];
}
function getBodyMassIndex(weight, height) {                                 // -> this is the function that actually calculate our Body Mass Index
    const bodyMassIndex = weight / (height ** 2);
    return bodyMassIndex.toFixed(2);

}

function pGenerator() {                                                     // -> this factory function would create a paragraph
    const p = document.createElement('p');
    return p;
}

function setResult(message, isValid) {                                      // -> this function shows the result creating a paragraph with different classes
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = pGenerator();

    if (isValid) {
        p.classList.add('result-paragraph');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = message;
    result.appendChild(p);
}
