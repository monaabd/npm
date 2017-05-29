//test which will count up Skriv testfall för metoderna countUp och countDown. countUp ska räkna upp egenskapen value med ett. countDown ska räkna ner med ett om värdet är större än noll, annars ska funktionen kasta ett Error.

const Counter = require('../ovning11.js');
//describe func is our suit
describe('ovning11,Counter',()=>{
         //first test that we run to get the red test and we do not do any changes in function (first we do not add any this.value in countup) then we see test below is fail then we will implement the function and add the this.value ++and 
    test('Countup increase value with 1',()=>{
      //create an object Counter
        let counter= new Counter();
          counter.countUp();
          expect(counter.value).toBe(2);
        
        counter.countUp();
          expect(counter.value).toBe(3);
    })
       //second test count down the same thing first we run the test without adding something in countdown function
        test('Countdown decrease value with 1',()=>{
            //test 1 for countdown
            let counter=new Counter();
            counter.countDown();
            expect(counter.value).toBe(0);
        })
        
        // 3rd test countdown and give error if value is less than 0
         test('countDown thrown error when 0',()=> {
           let counter=new Counter();
           counter.countDown();
            expect( ()=> {counter.countDown()}).toThrow('Cannot count below zero');
         })
          
         })//describe func suit
class Counter {
    constructor() {
        this.value = 1;
    }
    countUp() {
        this.value++; }