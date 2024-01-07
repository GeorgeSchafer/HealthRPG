'use strict'
import { default as Enum, ExtEnum } from './libs/EnumJS/ENUM.mjs'

userProfile.heart_rate = heart_rate;

export class Unit extends Enum {
    constructor(unitStr){
        super([
            'IMPERIAL', // Imperial
            'METRIC'  // Metric
        ])

        if(unitStr.toLowerCase() === 'imperial'){
            this.select('IMPERIAL')
        } else if (unitStr.toLowerCase() === 'metric') {
            this.select('METRIC')
        } else {
            throw new InvalidUnitError(unitStr);
        }
    }
}

class InvalidUnitError extends TypeError {
    constructor(unitStr){
        super(`"${unitStr}" invalid unit type; select either "imperial" or "metric".`)
    }
}

export class User {
    static id = this.userCount();

    /**
     * @stub
     * @returns the number of users on the Users table/array
     */
    static userCount(){
        return 0;
    }

    static {
        id = userCount();
        this.id = id-1;
    }

    constructor(userProfile){

        this.birthdate = new Date( 
            userProfile.birthdate.y, 
            userProfile.birthdate.m, 
            userProfile.birthdate.d
        )

        this.unit = new Unit(userProfile.unit)

        this.weight = {
            initial: userProfile.weight.initial,
            current: userProfile.weight.initial,
            goal: userProfile.weight.goal
        }

        this.heart_rate = calculateHR(
            calculateAge(this.birthdate), 
            userProfile.heart_rate.resting.initial
        );
    }
}

function calculateAge(birthday){ // birthday = Date(year, monthIndex, date)
    const years = Date.getYear() - birthday.getYear()
    const month = Date.getMonth() - birthday.getMonth()
    const date  = Date.getDate() - birthday.getDate()

    if( month >= 0 || (month == 0 && date >= 0) ){
        return years;
    } else {
        return years - 1;
    }
}

/**
 * @function calculateHR
 * @param {age}
 *      age in years 
 * @param {restingHR} 
 *      resting heart rate 
 * @returns {heart_rate}
 *      Enum of target heart rate zones and resting heart rate data
 */
function calculateHR(age, restingHR){
    const maximum_heart_rate = 220 - age;

    const resting = {
        initial: restingHR,
        current: restingHR
    }

    // Low Intensity (57%-63%)
    const low = {
        floor: maximum_heart_rate * 50 / 100,
        roof: maximum_heart_rate * 64 / 100,
    }
    
    // Moderate Intensity (64%-76%)
    const moderate = {
        floor: maximum_heart_rate * 65 / 100,
        roof: maximum_heart_rate * 79 / 100,
    }

    // Aerobic  Zone (70%-80%)
    const aerobic = {
        floor: maximum_heart_rate * 80 / 100,
        roof: maximum_heart_rate * 84 / 100,
    }

    // Vigorous Intensity (77%-95%)
    const vigorous = {
        floor: maximum_heart_rate * 85 / 100,
        roof: maximum_heart_rate * 91 / 100
    }

    // Maximum Intensity (96%-100%)
    const max = {
        floor: maximum_heart_rate * 92 / 100,
        roof: maximum_heart_rate
    }

    return {
        resting: resting,
        zone: new ExtEnum([
            {low: low}, 
            {moderate: moderate}, 
            {aerobic: aerobic}, 
            {vigorous: vigorous},
            {max: max}
        ])
    }
}

