function giveError(){
    throw "error occurred ft. giveError block";
}
try{
    console.log("we r into risky zone!!!");
    giveError();
    console.log("code works fine");
} catch(exception){
    console.log("caught an error");
}

