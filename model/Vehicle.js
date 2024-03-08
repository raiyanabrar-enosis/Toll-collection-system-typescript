var tolls = {
    SM: 50,
    MD: 80,
    LG: 160,
    XL: 250,
};
var Vehicle = /** @class */ (function () {
    function Vehicle(type) {
        if (type === "bike")
            this.details = new Bike();
        else if (type === "car")
            this.details = new Car();
        else if (type === "bus")
            this.details = new Bus();
        else if (type === "truck")
            this.details = new Truck();
        if (this.details)
            this.toll = tolls[this.details.size];
        else
            this.toll = 0;
    }
    return Vehicle;
}());
export { Vehicle };
var Bike = /** @class */ (function () {
    function Bike() {
        this.size = "SM";
    }
    return Bike;
}());
export { Bike };
var Car = /** @class */ (function () {
    function Car() {
        this.size = "MD";
    }
    return Car;
}());
export { Car };
var Bus = /** @class */ (function () {
    function Bus() {
        this.size = "LG";
    }
    return Bus;
}());
export { Bus };
var Truck = /** @class */ (function () {
    function Truck() {
        this.size = "XL";
    }
    return Truck;
}());
export { Truck };
