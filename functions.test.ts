const {shuffleArray} = require('./utils')

let newArr = [1,2,3,4,5]

describe('shuffleArray should', () => {
    test('make sure the array returns an array', ()=>{
        expect(Array.isArray(shuffleArray())).toBe(true)

    });

    test("make sure that the array length is the same as passed im", ()=>{
        let result = shuffleArray(newArr);
        expect(result.length).toBe(newArr.length)
    })
})
