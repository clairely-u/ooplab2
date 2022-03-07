import { Racer } from "./racer";

export class GasCar implements Racer {
    team: string;
    speed: number;
    fuel: number = 10;
    constructor(team: string, speed: number, fuel?: number) {
        this.team = team;
        this.speed = speed;
    }
    accelerate(): void {
        this.speed += 2;
        this.fuel -= 1;
    }
    isFuelEmpty(): boolean {
        if (this.fuel > 0) {
            return false;
        } else if (this.fuel === 0) {
            return true;
        } else {
            return true;
        }
    }
}