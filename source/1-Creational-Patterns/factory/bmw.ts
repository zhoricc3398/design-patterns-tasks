import { IBmw } from "./interfaces/Ibmw";

export class Bmw implements IBmw {
    constructor(public model: string, public price: number, public maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
