import { Discount } from "./discount";
import { Fees } from "./fees";
import { IFacade } from "./Ifacade";
import { Shipping } from "./shipping";

class ShopFacade {
    public discount: IFacade;
    public shipping: IFacade;
    public fees: IFacade;

    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    public pucalc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

export default ShopFacade;
