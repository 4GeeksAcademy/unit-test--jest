const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Converts dollars to yen correctly", function() {
    const { fromDollarToYen } = require('./app.js');
    
    const expected = (100 / 1.07) * 156.5; 
    expect(fromDollarToYen(100)).toBe(expected);
    
});

test("Converts yen to pounds correctly", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = (10000 / 156.5) * 0.87;
    expect(fromYenToPound(10000)).toBe(expected);
});
