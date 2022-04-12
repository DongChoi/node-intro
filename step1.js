"use strict";

const fsP = require("fs/promises");
const FILE_PATH = process.argv[2];



async function cat(path){
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log("contents:", contents)
    } catch (err) {
        console.error("ERROR: ", err);
        process.exit(1);
    }
}



module.exports = cat;