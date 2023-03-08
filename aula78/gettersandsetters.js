const _speed = Symbol('Speed Symbol variable');
class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    }


    set speed(value) {
    console.log('SETTER');
    if(typeof value !== 'number') return;
    if(value >= 100 || value <= 0) return;
    this[_speed] = value;
    }

    get speed() {
        console.log('GETTER');
        return this[_speed];
    }

    accelerate() {
        if(this[_speed] >= 100) return;
        this[_speed]++;
    }

    brake() {
        if(this[_speed] <= 0) return;
        this[_speed]--;
    }
}

const car1 = new Car('Corvette');

car1.speed = 60;
console.log(car1.speed);