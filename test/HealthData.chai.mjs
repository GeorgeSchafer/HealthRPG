import { beginner, 
         novice, 
         athlete, 
         Session, 
         getActivity } from '../public/javascripts/HealthData.mjs'



let counter = 1;

describe(`Mock Health Data`, () => {
    describe(`Levels`, () => {
        it(`Test ${counter}: Level: beginner`, () => {
            expect(beginner.low).to.eql(6);
            expect(beginner.moderate).to.eql(7);
            expect(beginner.aerobic).to.eql(8);
            expect(beginner.vigorous).to.eql(9);
        })
        counter++;

        it(`Test ${counter}: Level: novice`, () => {
            expect(novice.low).to.eql(4);
            expect(novice.moderate).to.eql(7);
            expect(novice.aerobic).to.eql(8);
            expect(novice.vigorous).to.eql(9);
        })
        counter++;

        it(`Test ${counter}: Level: athlete`, () => {
            expect(athlete.low).to.eql(1);
            expect(athlete.moderate).to.eql(3);
            expect(athlete.aerobic).to.eql(8);
            expect(athlete.vigorous).to.eql(9);
        })
        counter++;
    })

    describe(`Classes`, () => {
        it(`Test ${counter}: Session`, () => {
            const session = new Session()
            expect(session.low).to.eql(0)
            expect(session.moderate).to.eql(0)
            expect(session.aerobic).to.eql(0)
            expect(session.vigorous).to.eql(0)
            expect(session.max).to.eql(0)
        })
        counter++;

        it(`Test ${counter}: Session`, () => {
            const session = new Session(1)
            expect(session.low).to.eql(1)
            expect(session.moderate).to.eql(0)
            expect(session.aerobic).to.eql(0)
            expect(session.vigorous).to.eql(0)
            expect(session.max).to.eql(0)
        })
        counter++;

        it(`Test ${counter}: Session`, () => {
            const session = new Session(1,2)
            expect(session.low).to.eql(1)
            expect(session.moderate).to.eql(2)
            expect(session.aerobic).to.eql(0)
            expect(session.vigorous).to.eql(0)
            expect(session.max).to.eql(0)
        })
        counter++;

        it(`Test ${counter}: Session`, () => {
            const session = new Session(1,2,3)
            expect(session.low).to.eql(1)
            expect(session.moderate).to.eql(2)
            expect(session.aerobic).to.eql(3)
            expect(session.vigorous).to.eql(0)
            expect(session.max).to.eql(0)
        })
        counter++;

        it(`Test ${counter}: Session`, () => {
            const session = new Session(1,2,3,4)
            expect(session.low).to.eql(1)
            expect(session.moderate).to.eql(2)
            expect(session.aerobic).to.eql(3)
            expect(session.vigorous).to.eql(4)
            expect(session.max).to.eql(0)
        })
        counter++;

        it(`Test ${counter}: Session`, () => {
            const session = new Session(1,2,3,4,5)
            expect(session.low).to.eql(1)
            expect(session.moderate).to.eql(2)
            expect(session.aerobic).to.eql(3)
            expect(session.vigorous).to.eql(4)
            expect(session.max).to.eql(5)
        })
        counter++;
    })

    describe(`Functions`, () => {        
        it(`Test ${counter}: getActivty`, () => {
    
        })
        counter++;
    })
})

/*

describe(``, () => {
    describe(``, () => {
        it(`Test ${counter}:`, () => {
    
        })
        counter++;
    })
})

*/
