const Memory = require('../ovning10.js');

describe('ovning10,Memory',()=>{
    //first test will remember value
    test('remember saves value in class',()=>{
        let mem = new Memory();
         const value ={testing: 'is fun'};
        mem.remember(value);
        //value should be saved in mem.data
         expect(mem.data).toBe(value);
       })
    //test second if we send tom or null as value
     test('remember no value, saves undefined',()=>{
           let mem = new Memory();
           mem.remember();
           expect(mem.data).toBe(undefined);
          
          })
     //test 3 forget or remove value
     test('forget removes values',()=>{
           let mem = new Memory();
            mem.remember({testing:'is fun'});
       //we have already tested remember , no need to do that again
            mem.forget();
            expect(mem.data).toBe(undefined);
          })
})

//jest src/_test_/exercises.test.jsest