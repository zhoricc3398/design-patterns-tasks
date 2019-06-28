import { IEquipment } from "./Iequipment";

export interface IComposite {
    equipments: IEquipment[];
    add: (equipment: IEquipment) => void;
}
