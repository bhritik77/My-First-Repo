const calculator = {
    value  : 0,

    add(val){
        this.value += val;
        return this;
    },

    subtract(val){
        this.value -= val;
        return this;
    },

    multiply(val){
        this.value *= val;
        return this;
    },

    divide(val){
        this.value /= val;
        return this;
    },

    changeValue(val){
        this.value = val;
        return this;
    },

    getValue(){
        return this.value;
    }
}

console.log(calculator.add(10).subtract(5).getValue());