export class Vehicle {
    constructor(size) {
        this.toll = 0;
        this.tolls = {
            SM: 50,
            MD: 80,
            LG: 160,
            XL: 250,
        };
        this.size = size;
        this.setToll(size);
    }
    setToll(size) {
        this.toll = this.tolls[size];
    }
}
