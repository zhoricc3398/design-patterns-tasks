import { Color } from "./color";

export interface IcolorFactory {
    create: (name: string) => Color;
}
