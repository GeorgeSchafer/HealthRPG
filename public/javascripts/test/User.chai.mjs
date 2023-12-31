'use strict'
import Schema from '../libs/SchemaJS/Schema.mjs'
import expect from 'chai'
import { User, Unit } from '../User.mjs'
import Ajv from 'ajv'

const ajv = new Ajv(new UserSchema())

const user = {
        id: Schema.number,
        birthdate: Schema.number,
        unit: Schema.object,
        weight: {
            starting: Schema.number,
            current: Schema.number,
            goal: Schema.number
        },
        heart_rate: {
            resting: {
                initial: Schema.number,
                current: Schema.number
            },
            zone: Schema.object
        }
}

const lb = new Unit('imperial')
const kg = new Unit('metric')
const counter = 1;

const emmyProfile = {
    id: 0,
    birthdate: new Date(1985,7,16),
    unit: lb,
    weight: {
        starting: 220,
        goal: 120
    },
    heart_rate: {
        resting: { initial: 70 }
    }
}

const henryProfile = {
    id: 1,
    birthdate: new Date(1986,0,23),
    unit: kg,
    weight: {
        starting: 280,
        goal: 220
    },
    heart_rate: {
        resting: {
            initial: 95
        }
    }
}


class UserSchema extends Schema {
    constructor(user) {
        super()
        this.addProfile(user)
    }
}


describe(`User Class`, () => {
    describe(`Unit class`, () => {
        it(`Test ${counter}: Unit class`, () => {
            const lb = new Unit('imperial')
            const kg = new Unit('metric')

            expect(lb.IMPERIAL).to.be.true;
            expect(kg.METRIC).to.be.true;
        })
        counter++;

        it(`Test ${counter}: Throws UnitError`, ()=> {
            expect(new Unit('usd')).to.throw.error;
        })
        counter++;
    })

    describe(`Constructor`, () => {
        it(`Test ${counter}: Constructor Emmy`, () => {
            const emmy = new User(emmyProfile)
        })
        counter++;

        it(`Test ${counter}: Constructor Henry`, () => {
            const henry = new User(henryProfile)
        })
        counter++;
    })
})

/**

describe(``, () => {
    describe(``, () => {
        it(`Test ${counter}:`, () => {
    
        })
    })
})

*/
