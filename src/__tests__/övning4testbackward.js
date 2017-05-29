const backwards = require('../övning4backwards.js');

/* Testa 
backwards('string')-> 'gnirts'//normal string
backwards(42)-> '24'
backwards(null)->throw Error
backwards(object)-> throw error */

describe('backwards',()=>{
  test('normal string',()=>{
    expect(backwards('string')).toBe('gnirts'); 
})
});