const sum = require('./sum.js'); 

test('add 4+5 to equal 9', () => {
    expect(sum(4,5)).toBe(9)
})
test('add 0+0 to equal 0', () => {
    expect(sum(0,0)).toBe(0)
})