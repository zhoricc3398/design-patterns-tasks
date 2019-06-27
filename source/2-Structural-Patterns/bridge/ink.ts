import { IInk } from "./interfaces/Iink";

export class Ink implements IInk {
    constructor(public type: string) {
        this.type = type;
    }
    public get() {
        return this.type;
    }
}
