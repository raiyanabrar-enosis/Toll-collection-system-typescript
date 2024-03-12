export class Vehicle {
    constructor() {
        this.toll = 0;
    }
    collectToll(size) {
        const tolls = {
            SM: 50,
            MD: 80,
            LG: 160,
            XL: 250,
        };
        this.toll = tolls[size];
    }
}
export class Bike extends Vehicle {
    constructor() {
        super();
        this.size = "SM";
        this.collectToll(this.size);
    }
}
export class Car extends Vehicle {
    constructor() {
        super();
        this.size = "MD";
        this.collectToll(this.size);
    }
}
export class Bus extends Vehicle {
    constructor() {
        super();
        this.size = "LG";
        this.collectToll(this.size);
    }
}
export class Truck extends Vehicle {
    constructor() {
        super();
        this.size = "XL";
        this.collectToll(this.size);
    }
}
