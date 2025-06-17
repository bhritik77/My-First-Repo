const Mymap = new Map();
Mymap.set('name','Ritik');
Mymap.set('roll',12);
Mymap.set('class','12th');

console.log(Mymap.has('name'));
console.log(Mymap.get('name'));

for(let [key,value] of Mymap){
    console.log(`${key} : ${value}`);
}