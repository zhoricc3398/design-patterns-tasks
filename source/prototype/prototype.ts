import { Cloneable, Isheep } from "./prototypeInterface";

class Sheep implements Cloneable<Sheep>, Isheep {

    constructor(public name, public weight) {
        this.name = name;
        this.weight = weight;
    }

    clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
