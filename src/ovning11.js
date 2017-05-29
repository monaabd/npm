class Counter {
    constructor() {
        this.value = 1;
    }
    countUp() {
        this.value++; }
    countDown() {
        if( this.value === 0)
            throw new Error('Cannot count below zero');
        this.value--;     
    }
}

module.exports = Counter;