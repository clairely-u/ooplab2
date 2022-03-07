import { SolarCar } from "../src/solarcar";

describe("SolarCar", () => {
    test("team propery is set from constructor", () => {
        const solarcar = new SolarCar("The Speedy Bonguses", 0);
        expect(solarcar.team).toEqual("The Speedy Bonguses");
    });
    test("calling accelerate once increases speed to 1", () => {
        const solarcar = new SolarCar("The Speedy Bonguses", 0);
        solarcar.accelerate();
        expect(solarcar.speed).toEqual(1);
    });
    test("calling accelerate function twice increases speed to 2", () => {
        const solarcar = new SolarCar("The Speedy Bonguses", 0);
        solarcar.accelerate();
        solarcar.accelerate();
        expect(solarcar.speed).toEqual(2);
    });
    test("call isFuelEmplty returns false", () => {
        const solarcar = new SolarCar("The Speedy Bonguses", 0);
        expect(solarcar.isFuelEmpty()).toEqual(false);
    });
})