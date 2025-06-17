class Shape{
    draw(){
        console.log("shape is drawn")
    }
}

class Circle extends Shape{
    draw(){
        console.log("circle is drawn")
    }
}

class Rectangle extends Shape{
    draw(){
        console.log("rectangle is drawn")
    }
}

let r1 = new Rectangle();
r1.draw();
let c1 = new Circle();
c1.draw();
