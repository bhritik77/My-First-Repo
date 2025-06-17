var pr1 = new Promise( (res,rej) => {
    setTimeout(() => {
        console.log("timer of p1 is done");
        res(100);
    }, 5000);
})

var pr2 = pr1.then(() => {
    throw "rejected";
});