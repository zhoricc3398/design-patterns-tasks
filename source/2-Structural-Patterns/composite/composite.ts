import { Cabinet } from "./cabinet";
import { Equipment } from "./equipment";
import { FloppyDisk } from "./floppydisk";
import { HardDrive } from "./harddrive";
import { IComposite } from "./interfaces/Icomposite";
import { IEquipment } from "./interfaces/Iequipment";
import { Memory } from "./memory";

export class Composite extends Equipment implements IComposite {
    public equipments: IEquipment[];
    constructor() {
        super();
        this.equipments = [];
    }

    public add(equipment: IEquipment) {
        this.equipments.push(equipment);
    }

    public getPrice() {
        return this.equipments.map((equipment) => {
            return equipment.getPrice();
        }).reduce((a, b) => {
            return a + b;
        });
    }
}

export { Cabinet, FloppyDisk, HardDrive, Memory};
