import { Printer } from "./bridge";
import { Ink } from "./ink";
import { IPrinter } from "./interfaces/Iprinter";

export class EpsonPrinter extends Printer implements IPrinter {
    constructor(public ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}
