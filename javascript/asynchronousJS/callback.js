/*
Implement a set of dummy functions which can mimic the behaviour of behaviour of the following functions : 
1. download -> This function should mimic downloading of some content from a url.
2. writeFile -> This function should mimic writing some content to a file.
3. upload -> This function should mimic uploading the file to a server.

Now after you have implemented these function, try to use them in a scenario where we first download a file, 
then write it to a disk and then upload it to a server.

*/

function download(fileName, time = 0){
    console.log("downloading file")
    setTimeout(() => {
        console.log("file is downloaded");
        writeFile(fileName);
    },time);
}

function writeFile(fileName, time = 0){
    console.log("writing file");
    setTimeout(() => {
        console.log("file is written");
        upload(fileName);
    }, time);
}

function upload(fileName, time = 0){
    console.log("uploading file")
    setTimeout(() => {
        console.log("file is uploaded");
    }, time);
}

download("ytVideo",5000);