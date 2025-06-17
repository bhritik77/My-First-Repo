var res = new Promise((res,rej) => {
    let x = Math.floor(Math.random()*100);
    if(x%2==0) res(x);
    else rej(x);
})

res.then((x) => {
    console.log("number is even");
    return x;
}, (x) => {
    console.log("number is odd");
    return x;
});



//  explore .catch() and .then return type.....

/*   bro i have noticed one thing when we make promise without use then stuff and res or rej is called with x 
promise is getting value but when we use then. then if we dont use return x we r not getting value why is that */