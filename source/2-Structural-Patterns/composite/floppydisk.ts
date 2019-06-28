import { Equipment } from "./equipment";

export class FloppyDisk extends Equipment {
    constructor() {
        super();
        this.setName("Floppy Disk");
        this.price = 70;
    }
}
