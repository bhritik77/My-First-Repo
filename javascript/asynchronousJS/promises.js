const obj = new Promise((res,rej) => {
    setTimeout(() => {
        rej("Status Modified");
    }, 5000);
});

