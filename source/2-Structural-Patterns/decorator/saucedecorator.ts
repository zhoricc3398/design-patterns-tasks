import { PastaDecorator } from "./decorator";
import { Pasta } from "./pasta";

export class SauceDecorator extends PastaDecorator {
    constructor(public pasta: Pasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 5;
    }
}
