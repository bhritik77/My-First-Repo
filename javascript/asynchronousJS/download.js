function download(url){
    return new Promise((res, rej) => {
       console.log(`downloading from ${url}`);
        setTimeout(() => {
        console.log("download is done");
        let downloadedData = "Some Data";
        res(downloadedData);
    }, 3000);
    });
}

function writeFile(data, fileName){
    return new Promise((res, rej) => {
       console.log(`writing data into file ${fileName}`);
    setTimeout(() => {
        console.log(`${data} is written into file ${fileName}`)
        let status = "Success";
        res(status);
    },4000);
    });
}

function upload(fileName, url){
    return new Promise((res, rej) => {
       console.log(`uploading a file ${fileName} to url ${url}`);
    setTimeout(() => {
        console.log("upload is done");
        let uploadStatus = "Success";
        res(uploadStatus);
    },5000);
    });
}

download("www.google.com")
.then((downloadedData) => {
    return writeFile(downloadedData, "new file");
})
.then(() => {
    return upload("new file","www.drive.com");
})
 

    


    
