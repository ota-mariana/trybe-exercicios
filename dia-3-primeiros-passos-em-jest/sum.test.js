const sum = require('./sum'); 

it('add 4+5 to equal 9', () => {
    expect(sum(4,5)).toBe(9)
})
it('add 0+0 to equal 0', () => {
    expect(sum(0,0)).toBe(0)
})