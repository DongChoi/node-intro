"use strict";
const axios = require("axios");
const cat = require("./step1")
const fsP = require("fs/promises");


async function webCat(url){
    console.log(url)
    console.log(process.argv[2])
    try {
        let contents = await axios.get(url);
        console.log("contents:", contents)
    } catch (err) {
        console.error("ERROR: ", err);
        process.exit(1);
    }
}


if ("http" === process.argv[2].slice(0,4)){
webCat(process.argv[2])
}
else{
cat(process.argv[2])
}