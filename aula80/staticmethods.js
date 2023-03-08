class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Instance Method
    raiseVolume() {
        this.volume += 2;
    }

    decreaseVolume() {
        this.volume -= 2;
    }

    // Static Method
    static sum(x, y) {
        return x + y;
    }
}

const remote1 = new RemoteControl ('Samsung');
console.log(remote1);