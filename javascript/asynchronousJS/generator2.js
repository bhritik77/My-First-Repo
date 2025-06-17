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

function* exec(){
    const downloadData = yield download("www.google.com");
    console.log("downloaded data is : ", downloadData);
    const fileStatus = yield writeFile(downloadData,"newFile.txt");
    console.log("file write status : ", fileStatus);
    const uploadStatus = yield upload("newFile.txt","www.googledrive.com");
    console.log("upload status : ",uploadStatus);
}

const it = exec();

const ft = it.next();
console.log("ft is : ",ft);
ft.value.then(function doAfterReceiving(value){
    console.log("current function is executed with value : ", value);
    const future = it.next(value);
    if(future.done) return;
    future.value.then(doAfterReceiving(value));
})



