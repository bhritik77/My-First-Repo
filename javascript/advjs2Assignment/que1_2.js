function person(name, age){
    this.name = name;
    this.age = age;

    this.sayhello = function (){
        console.log("Hello my name is "+this.name+ " and my age is "+this.age);
    }
}

function employee(name,age,designation){
    person.call(this,name,age);
    this.designation = designation;
    this.getDetails = function(){
        console.log("name : ",this.name," age : ",this.age," designation : ",this.designation)
    }
}
let e = new employee("Ritik",20,"Software Engineer");
e.getDetails();