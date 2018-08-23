import getType from 'jest-get-type'
import promises from '../promises';

const url = 'http://localhost:4000/api/cars';


//this is our new car schema
const newCar =  {
    make: "Jeep",
    model: "Patriot",
    year: 2008,
    color: "Black"
}

describe('Car tests', () => {
    test('Get Chevrolet', () => {
        expect.assertions(3);
        return promises.getCars(url).then( response => {
            expect(response[0].color).toEqual('Yellow');
            expect(response[0].make).toEqual('Chevrolet');
            expect(response[1].make).not.toEqual('Chevrolet');
        })
    })

    test('Check Data Type of returned response', () => {
        expect.assertions(3);
        return promises.getCars(url).then(response => {
            //check to see that the response is an array so that we can easily map over it.
            expect(getType(response)).toEqual('array');
            //run test to make sure the returned response is not an object
            expect(getType(response)).not.toEqual('object');
            //check that the id is returned as a number
            expect(getType(response[0].id)).toEqual('number');
        })
    })

    test('test post', () => {
        expect.assertions(3);
        return promises.postCars(url, newCar).then( response => {
            expect(response[25].id).toEqual(26);
            expect(response[25]).not.toBeUndefined();
            expect(response[25]).toEqual({
                id: 26,
                make: "Jeep",
                model: "Patriot",
                year: 2008,
                color: "Black",
            })
        })
    })
})
