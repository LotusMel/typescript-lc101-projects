let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Define your Spacecraft class here:
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hours: number = milesAway / this.speedMph;
        let days: number = hours / 24;
        
        return days;
    }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft("Determination", 17500);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

