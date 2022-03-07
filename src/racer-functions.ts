import { Racer } from "./racer";


export function findRacersWithEmptyFuel (racers: Racer[]): Racer[]  {
    let result: Racer[] = [];
    for (let racer of racers) {
        if (racer.isFuelEmpty() === true) {
            result.push(racer);
        } 
    }
    return result;
}



export function findAverageSpeed (racers: Racer[]): number {
    if (racers.length > 0) {
        let total = 0;
        for (var i = 0; i < racers.length; i++) {
            total += racers[i].speed;
        }
        return total / racers.length;
    } else {
        return 0;
    }
}

export function getFasterRacer(racerA: Racer, racerB: Racer): Racer | null {
    if (racerA.speed > racerB.speed) {
        return racerA;
    } else if (racerB.speed > racerA.speed) {
        return racerB;
    } else {
        return null;
    }
}