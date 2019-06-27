import { Printer } from "./bridge";
import { Ink } from "./ink";
import { IPrinter } from "./interfaces/Iprinter";

export class HPprinter extends Printer implements IPrinter {
    constructor(public ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}
