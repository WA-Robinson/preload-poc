import { CargoItem } from "./cargo-item";

export class Cargo {
    totalMass = 0;
    summary = '';
    items: CargoItem[] = [];
}
