import { Car } from "./car";
import { Driver } from "./driver";

class CarProxy {
    constructor(public driver: Driver) {
        this.driver = driver;
    }
    public drive() {
        return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
    }
}

export { Car, CarProxy, Driver };
