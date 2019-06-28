import { CheeseDecorator } from "./cheesedecorator";
import { Pasta } from "./pasta";
import { Penne } from "./penne";
import { SauceDecorator } from "./saucedecorator";

export class PastaDecorator extends Pasta {
    constructor(public pasta: Pasta) {
        super();
        this.pasta = pasta;
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}

export { Penne, SauceDecorator, CheeseDecorator };
