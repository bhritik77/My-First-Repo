function Car(brand, model){
    this.brand = brand;
    this.model = model;

    this.displayDetails = function(){
        console.log("brand : "+ this.brand, "model : " + this.model);
    }
}

const myCar = new Car("mahindra","XUV 700");

myCar.displayDetails();





