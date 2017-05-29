class Memory {
    constructor(){
        this.data = undefined;
    }
    
    remember(value) {
      this.data = value;
    }
    forget() {
      this.data = undefined;
    
    }   // behöver inga parametrar
    // this.data är namnet på egenskapen som sparas i klassen
}

module.exports = Memory;