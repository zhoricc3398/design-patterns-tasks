import { DroidInterface } from "./abstractfactoryInterface";

type kindOf = 'battle'

function droidProducer(kind: kindOf) {
    if (kind === 'battle'){
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): DroidInterface {
    return new B1();
}

function pilotDroidFactory(): DroidInterface {
    return new Rx24();
}

class B1 implements DroidInterface {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements DroidInterface {
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default droidProducer;