import { findRacersWithEmptyFuel } from "./racer-functions";
import { SolarCar } from "./solarcar";
import { GasCar } from "./gascar";
import { Racer } from "./racer";


let racers: Racer[] = [];
racers.push(new GasCar("Wild things", 100, 0));
racers.push(new GasCar("Bonguses", 115, 0));
racers.push(new SolarCar("Sunshinies", 90));
racers.push(new SolarCar("Hokey pokies", 130));


console.log(findRacersWithEmptyFuel(racers));   