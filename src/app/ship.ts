import { Cargo } from "./cargo";
import { Department } from "./department";

export class Ship {
    name = '';
    registry = '';
    departments: Department[] = [];
    cargo = new Cargo();
}
