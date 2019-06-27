import { Cloneable } from "./interfaces/cloneable";
import { Isheep } from "./interfaces/Isheep";

class Sheep implements Cloneable<Sheep>, Isheep {

    constructor(public name: string, public weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
