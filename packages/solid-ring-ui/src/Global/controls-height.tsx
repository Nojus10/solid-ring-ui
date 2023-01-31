import {createContext} from "solid-js";

export enum ControlsHeight {
    S = 'S',
    M = 'M',
    L = 'L'
}

export const ControlsHeightContext = createContext(ControlsHeight.M);
