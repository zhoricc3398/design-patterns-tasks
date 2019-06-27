import { Bmw } from "./bmw";

type carModel = "X5" | "X6";

class BmwFactory {

    public static create(type: carModel) {
        if (type === "X5") {
            return new Bmw(type, 108000, 300);
        }
        if (type === "X6") {
            return new Bmw(type, 111000, 320);
        }
    }
}

export default BmwFactory;
