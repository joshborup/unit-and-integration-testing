const url = 'http://localhost:4000/api/cars';
const getType = require('jest-get-type');
const promises = require('./promises');

describe('Car tests', () => {
    test('Get Chevrolet', () => {
        expect.assertions(3);
        return promises.getCars(url).then( response => {
            expect(response[0].color).toEqual('Yellow');
            expect(response[0].make).toEqual('Chevrolet');
            expect(response[2].make).not.toEqual('Chevrolet');
        })
    })

    test('Check Data Type', () => {
        expect.assertions(3);
        return promises.getCars(url).then( response => {
            expect(getType(response[0])).toEqual('object');
            expect(getType(response[0])).not.toEqual('array');
            expect(getType(response[0].id)).toEqual('number');
        })
    })

    test('test post', () => {
        expect.assertions(3);
        return promises.postCars(url).then( response => {
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
