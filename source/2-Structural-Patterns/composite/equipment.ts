import { IEquipment } from "./interfaces/Iequipment";

export class Equipment implements IEquipment {
    public price: number;
    public name: string;

    public getPrice() {
        return this.price || 0;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}
