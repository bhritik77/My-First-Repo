class product{
    #name;
    #price;

    constructor(builder){
        this.#name = builder.name;
        if(price>0) this.#price = builder.price;
    }
    get details(){
        console.log(this.#name,this.#price);
    }
    static get builder(){
        class builder{
            constructor(name, price){
                this.name = "";
                this.price = 0;
            }
            setname(incmgname){
                this.name = incmgname;
                return this;
            }
            setprice(incmgprice){
                this.price = incmgprice;
                return this;
            }
            build(){
                return new product(this);
            }
        }
    }
}

let newProduct = product.builder;
newProduct.setname("iphone 14 pro max");
newProduct.setprice(150000);

newProduct.details;


