/*
Implement a set of dummy functions which can mimic the behaviour of behaviour of the following functions : 
1. download -> This function should mimic downloading of some content from a url.
2. writeFile -> This function should mimic writing some content to a file.
3. upload -> This function should mimic uploading the file to a server.

Now after you have implemented these function, try to use them in a scenario where we first download a file, 
then write it to a disk and then upload it to a server.

*/

function download(url, callback){
    console.log(`downloading from ${url}`);
    setTimeout(() => {
        console.log("download is done");
        let downloadedData = "Some Data";
        callback?.(downloadedData);
    }, 3000);
}

function writeFile(data, fileName, callback){
    console.log(`writing data into file ${fileName}`);
    setTimeout(() => {
        console.log(`${data} is written into file ${fileName}`)
        let status = "Success";
        callback?.(status);
    },2000);
}

function upload(fileName, url, callback){
    console.log(`uploading a file ${fileName} to url ${url}`);
    setTimeout(() => {
        console.log("upload is done");
        let uploadStatus = "Success";
        callback?.(uploadStatus);
    },3000);
}

function process(){
    download("www.google.com",() => {
        writeFile("bangData", "file.txt", () => {
            upload("file.txt", "www.drive.com", () => {
                console.log("All done");
            })
        })
    })
}

process();