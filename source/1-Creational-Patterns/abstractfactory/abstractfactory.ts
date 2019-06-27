import { IDroid } from "./interfaces/Idroid";
import { Rx24 } from "./rx24";

type kindOf = "battle";

function droidProducer(kind: kindOf) {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): IDroid {
    return new B1();
}

function pilotDroidFactory(): IDroid {
    return new Rx24();
}

class B1 implements IDroid {
    public info() {
        return "B1, Battle Droid";
    }
}

export default droidProducer;
