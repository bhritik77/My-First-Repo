class product{
    name;
    price; 

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    NameOfTheProduct(){
        console.log(this.name, "Product Name is displayed");
    }
    PriceOfTheProduct(){
        console.log(this.price, "Price Name is displayed");
    }
}

let iphone = new product();
iphone.name = "iphone 14 pro max";
iphone.price = 149599;

iphone.NameOfTheProduct();

iphone.name = "iphone 13 pro max";

iphone.NameOfTheProduct();


