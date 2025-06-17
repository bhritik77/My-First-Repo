function* myGenerator(){
    console.log("something");
    console.log("something");
    console.log("something");
    yield 1;
    console.log("something 2");
    console.log("something 2");
    console.log("something 2");
    yield 2;
}

myGenerator().next();