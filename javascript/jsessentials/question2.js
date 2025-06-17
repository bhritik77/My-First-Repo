let myMap = new Map();
myMap.set('ritik', {
    age : 20,
    email : 'abc123@gmail.com',
    location : 'New York'
});
myMap.set('soniya', {
    age : 24,
    email : 'abc123@gmail.com',
    location : 'New York'
});
myMap.set('lol', {
    age : 26,
    email : 'abc123@gmail.com',
    location : 'New York'
});

function getContactDetails(name){
    return myMap.get(name);
}

console.log(getContactDetails('ritik'));


