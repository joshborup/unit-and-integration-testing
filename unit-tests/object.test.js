const data = require('./object');


// toEqual recursively checks every field of an object or array.
// this makes it easy for us to check to make sure an object contains what we need it to
test('object assignment', () => {
    expect(data).toEqual({one: 1, two: 2, three: 3, four: 4, five:{six: 6}});
    expect(data).not.toEqual({one: 1, two: 2, three: 3, four: 4, five:{six: 7}});
});