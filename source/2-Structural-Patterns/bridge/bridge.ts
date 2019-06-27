import { AcrylicInk } from "./acrylicink";
import { AlcoholInk } from "./alcoholink";
import { EpsonPrinter } from "./epsonprinter";
import { HPprinter } from "./hpprinter";
import { Ink } from "./ink";

export class Printer {
    constructor(public ink: Ink) {
        this.ink = ink;
    }
}

export { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk };
