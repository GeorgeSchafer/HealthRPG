/**
 * @summary
 *      Mock API data
 */

export const beginner = {
    low: 6,
    moderate: 7,
    aerobic: 8,
    vigorous: 9
}

export const novice = {
    low: 4,
    moderate: 7,
    aerobic: 8,
    vigorous: 9
}

export const athlete = {
    low: 1,
    moderate: 3,
    aerobic: 8,
    vigorous: 9
}

export class Session {
    constructor(lowDT = 0, moderateDT = 0, aerobicDT = 0, vigorousDT = 0, maxDT = 0){
        this.low = { time: lowDT }
        this.moderate = { time: moderateDT }
        this.aerobic = { time: aerobicDT }
        this.vigorous = { time: vigorousDT }
        this.max = { time: maxDT }
    }
}

export function getActivity(level) {
    const period = {
        low: new Session(1200),
        moderate: new Session(120, 1080),
        aerobic: new Session(120,60,1020),
        vigorous: new Session(120,60,510,510)
    };

    const value = Math.floor(Math.random() * 10)

    if( value <= level.low ){
        return period.low;
    } else if ( value <= level.moderate ){
        return period.moderate;
    } else if ( value <= level.aerobic ){
        return period.aerobic;
    } else {
        return period.vigorous;
    }
}

/*
import { beginner, 
         novice, 
         athlete, 
         Session, 
         getActivity } from 'HealthData.mjs'
*/