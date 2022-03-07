import { findAverageSpeed, findRacersWithEmptyFuel, getFasterRacer } from "../src/racer-functions";
import {GasCar} from "../src/gascar"
import { SolarCar } from "../src/solarcar";
import { Racer } from "../src/racer";

describe("findRacersWithEmptyFuel", () => {
    test("array of gas cars where some have no fuel", () => {
        const racers: Racer[] = [];
        const car1 = new GasCar("The Speedy Bonguses", 0, 10);
        const car2 = new GasCar("Deep Matrix", 0, 0);
        const car3 = new GasCar("the Forklift Drivers", 0, 0);
        racers.push(car1);
        racers.push(car2);
        racers.push(car3);
        expect(findRacersWithEmptyFuel(racers)).toEqual([
            {
                team: "Deep Matrix",
                speed: 0,
                fuel: 0
            },
            {
                team: "The Forklift Drivers",
                speed: 0,
                fuel: 0
            },
        ]);
    });
    test("array of gascars where none have fuel", () => {
        const racers: GasCar[] = [];
        const car1 = new GasCar("The Speedy Bonguses", 0, 0);
        const car2 = new GasCar("Deep Matrix", 0, 0);
        const car3 = new GasCar("the Forklift Drivers", 0, 0);
        racers.push(car1);
        racers.push(car2);
        racers.push(car3);
        expect(findRacersWithEmptyFuel(racers)).toEqual([
            {
                team: "The Speedy Bonguses",
                speed: 0,
                fuel: 0
            },
            {
                team: "Deep Matrix",
                speed: 0,
                fuel: 0
            },
            {
                team: "The Forklift Drivers",
                speed: 0,
                fuel: 0
            },
        ]);
    });
    test("array of gas cars where none are empty", () => {
        const racers: GasCar[] = [];
        const car1 = new GasCar("The Speedy Bonguses", 0, 10);
        const car2 = new GasCar("Deep Matrix", 0, 15);
        const car3 = new GasCar("the Forklift Drivers", 0, 10);
        racers.push(car1);
        racers.push(car2);
        racers.push(car3);
        expect(findRacersWithEmptyFuel(racers)).toEqual([ ]);
    });
    test("array of solarcars returns empty", () => {
        const solarcars: SolarCar[] = [];
        const car1 = new SolarCar("The Speedy Bonguses", 0);
        const car2 = new SolarCar("The Harumphing Harolds", 0);
        const car3 = new SolarCar("The 'Fraidy Zoinks", 0);
        solarcars.push(car1);
        solarcars.push(car2);
        solarcars.push(car3);
        expect(findRacersWithEmptyFuel(solarcars)).toEqual([ ]);
    });
    test("array of both solar and gas cars", () => {
        const racers: Racer[] = [];
        const car1 = new SolarCar("The Speedy Bonguses", 0);
        const car2 = new SolarCar("The Harumphing Harolds", 0);
        const gascar1 = new GasCar("The Speedy Bonguses", 0, 10);
        const gascar2 = new GasCar("Deep Matrix", 0, 1);
        racers.push(car1);
        racers.push(car2);
        racers.push(gascar1);
        racers.push(gascar2);
        gascar2.accelerate();
        expect(findRacersWithEmptyFuel(racers)).toBe([
            {
                team: "Deep Matrix",
                speed: 0,
                fuel: 0
            }
        ]);
    });
    test("empty array returns empty", () => {
        const racers: Racer[] = [];
        expect(findRacersWithEmptyFuel(racers)).toEqual([ ]);
    });
});

describe("findAverageSpeed", () => {
    test("gas cars of different speeds", () => {
        const racers: Racer[] = [];
        const car1 = new GasCar("The Speedy Bonguses", 0, 10);
        const car2 = new GasCar("Deep Matrix", 0, 0);
        const car3 = new GasCar("the Forklift Drivers", 0, 0);
        racers.push(car1);
        racers.push(car2);
        racers.push(car3);
        car1.accelerate();
        car1.accelerate();
        car1.accelerate();
        car2.accelerate();
        car2.accelerate();
        car3.accelerate();
        car3.accelerate();
        car3.accelerate();
        car3.accelerate();
        expect(findAverageSpeed(racers)).toEqual(6);
    });
    test("solar and gas cars of different speeds", () => {
        const racers: Racer[] = [];
        const car1 = new GasCar("The Speedy Bonguses", 0, 10);
        const car2 = new GasCar("Deep Matrix", 0, 0);
        racers.push(car1);
        racers.push(car2);
        car1.accelerate();
        car1.accelerate();
        car1.accelerate();
        car2.accelerate();
        car2.accelerate();
        car2.accelerate();
        const solarcar1 = new SolarCar("The Speedy Bonguses", 0);
        const solarcar2 = new SolarCar("The Harumphing Harolds", 0);
        racers.push(solarcar1);
        racers.push(solarcar2);
        solarcar1.accelerate();
        solarcar1.accelerate();
        solarcar2.accelerate();
        solarcar2.accelerate();
        expect(findAverageSpeed(racers)).toEqual(4);
    });
    test("all cars have zero speed", () => {
        const racers: Racer[] = [];
        const car1 = new GasCar("The Speedy Bonguses", 0, 10);
        const car2 = new GasCar("Deep Matrix", 0, 0);
        racers.push(car1);
        racers.push(car2);
        const solarcar1 = new SolarCar("The Speedy Bonguses", 0);
        const solarcar2 = new SolarCar("The Harumphing Harolds", 0);
        racers.push(solarcar1);
        racers.push(solarcar2);
        expect(findAverageSpeed(racers)).toEqual(0)
    });
    test("empty array", () => {
        const racers: Racer[] = [];
        expect(findAverageSpeed(racers)).toEqual(0);
    });
});

describe("getFastestRacer", () => {
    test("racerA is faster", () => {
    const racerA: Racer = new GasCar("The Hoogly Wooglies", 0);
    const racerB: Racer = new GasCar("The Speedy Bonguses", 0);
    racerA.accelerate();
    racerA.accelerate();
    racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toEqual(racerA);
    });
    test("racerB is faster", () => {
        const racerA: Racer = new GasCar("The Hoogly Wooglies", 0);
        const racerB: Racer = new GasCar("The Speedy Bonguses", 0);
        racerA.accelerate();
        racerB.accelerate();
        racerB.accelerate();
        expect(getFasterRacer(racerA, racerB)).toEqual(racerB);
    });
    test("both racers are the same speed", () => {
        const racerA: Racer = new GasCar("The Hoogly Wooglies", 0);
        const racerB: Racer = new GasCar("The Speedy Bonguses", 0);
        racerA.accelerate();
        racerA.accelerate();
        racerB.accelerate();
        racerB.accelerate();
        expect(getFasterRacer(racerA, racerB)).toEqual(null);
    });
    test("mix of solar and gas cars", () => {
        const racerA: Racer = new GasCar("The Hoogly Wooglies", 0);
        const racerB: Racer = new SolarCar("The SPeedy Bonguses", 0);
        racerA.accelerate();
        racerB.accelerate();
        racerB.accelerate();
        racerB.accelerate();
        expect(getFasterRacer(racerA, racerB)).toEqual(racerB);
    })
})