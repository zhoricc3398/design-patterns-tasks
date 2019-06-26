import { Car } from "./factoryInterface";

type version = 'X5' | 'X6'

class BmwFactory {

    static create(type: version): Car {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

class Bmw implements Car {
    constructor(public model, public price, public maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

export default BmwFactory;