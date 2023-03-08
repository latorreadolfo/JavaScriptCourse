class ElectronicDevice {
    constructor(name) {
        this.name = name;
        this.isItOn = false;
    }

    turnOn() {
        if(this.isItOn) {
            console.log(`${this.name} device is already On`);
            return;
        }

        this.isItOn = true;
    }

    turnOff() {
        if(!this.isItOn) {
            console.log(`${this.name} device is already off`);
            return;
        }


        this.isItOn = false;
    }
}

class Smarphone extends ElectronicDevice {
    constructor(name, model, color) {
        super(name);
        this.model = model;
        this.color = color;
    }
}

const smartphone1 = new Smarphone('iPhone', '14 Pro', 'Space Grey');
console.log(smartphone1);