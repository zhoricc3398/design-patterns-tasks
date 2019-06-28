import { Color } from "./color";
import { IcolorFactory } from "./Icolorfactory";

class ColorFactory implements IcolorFactory {
    public colors: { [key: string]: Color };
    constructor(public name: string) {
        this.colors = {};
    }
    public create(name: string) {
        const color = this.colors[name];
        if (color) {
            return color;
        }
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export { ColorFactory };
