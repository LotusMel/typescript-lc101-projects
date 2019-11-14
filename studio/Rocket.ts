import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
    massKg: number;
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(totalCapacityKg: number, name: string) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }

    sumMass( items: Payload[] ): number {
       
        let total: number = 0;

        for(let i=0; i < items.length; i++){
            total += items[i].massKg;
        }

        return total;
    }

    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    
    canAdd(items: Payload): boolean{
        if(this.currentMassKg() + items.massKg <= this.totalCapacityKg) {
            return true;
        } else{
            return false;
        }
    }

    addCargo(cargo: Cargo) {
        
    }

}