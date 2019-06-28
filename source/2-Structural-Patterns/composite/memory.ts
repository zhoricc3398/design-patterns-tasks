import { Equipment } from "./equipment";

export class Memory extends Equipment {
    constructor() {
        super();
        this.setName("Memory");
        this.price = 280;
    }
}
