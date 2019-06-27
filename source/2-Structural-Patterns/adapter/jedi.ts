import { IJedi } from "./interfaces/Ijedi";

export class Jedi implements IJedi {
    constructor(public level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}
