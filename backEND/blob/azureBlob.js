const blob = require("@azure/storage-blob");
const fs = require('fs');


const blobServiceClient = require("../connection/azureBlob");


// Create a unique name for the blob

const docsUpload = async (name,type) => {

    try {

        var contaninerName = "";

        if(type == "student"){
            contaninerName = process.env.BLOB_NAME_STUDENT;
        }
        else if(type == "staff"){
            contaninerName = process.env.BLOB_NAME_STAFF;
        }
        else if(type == "visitor"){
            contaninerName = process.env.BLOB_NAME_VISITOR;
        }

        const containerClient = blobServiceClient.getContainerClient(contaninerName);

        await containerClient.createIfNotExists();

        const blockBlobClient = containerClient.getBlockBlobClient(name);

        // console.log(
        //     `\nUploading to Azure storage as blob\n\tname: ${blobName}:\n\tURL: ${blockBlobClient.url}`
        // );

        const url = blockBlobClient.url;

        const blobOptions = { blobHTTPHeaders: { blobContentType: 'image/png' } };

        const uploadBlobResponse = await blockBlobClient.uploadFile(name,blobOptions);

        // console.log(
        //     `Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`
        // );

        // console.log(url);

        return url;

    } catch (error) {
        console.log("This is error from ./blob/azureBlob.js");
        console.log(error);
        return "";
    }
}





module.exports = docsUpload;




