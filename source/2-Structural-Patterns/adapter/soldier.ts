import { ISoldier } from "./interfaces/Isoldier";

export class Soldier implements ISoldier {
    constructor(public level: number) {
        this.level = level;
    }

    public attack() {
        return this.level * 1;
    }
}
