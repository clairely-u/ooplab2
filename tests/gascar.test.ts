import { GasCar } from "../src/gascar";

describe("GasCar tests", () => {
    test("team and fuel are set from constructor", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0);
        expect(gascar.team).toEqual("The Other Speedy Bonguses");
        expect(gascar.fuel).toEqual(10);
    });
    test("fuel defaults to ten when omitted", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0);
        expect(gascar.fuel).toEqual(10);
    });
    test("call accelerate function once, yields speed 2", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0);
        gascar.accelerate();
        expect(gascar.speed).toEqual(2);
    });
    test("call accelerate method twice, yields speed 4", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0);
        gascar.accelerate();
        gascar.accelerate();
        expect(gascar.speed).toEqual(4);
    });
    test("call accelerate once reduces fuel by 1", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0);
        gascar.accelerate();
        expect(gascar.fuel).toEqual(9);
    });
    test("calling accelerate twice reduces fuel by two", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0);
        gascar.accelerate();
        gascar.accelerate();
        expect(gascar.fuel).toEqual(8);
    });
    test("isfuelempty returns true when at 0", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0, 0);
        expect(gascar.isFuelEmpty()).toEqual(true);
    });
    test("isfuelEmpty returns false when above zero", () => {
        const gascar = new GasCar("The Other Speedy Bonguses", 0);
        expect(gascar.isFuelEmpty()).toEqual(false);
    });
})