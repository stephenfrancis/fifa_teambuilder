/*jslint node: true */
"use strict";


const https = require("https");


https.get("https://www.easports.com/uk/fifa/ultimate-team/api/fut/item?jsonParamObject=%7B%22baseid%22:20801%7D", function (res) {
    var raw_data = "";
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);

    response.on("data", function (chunk) {
        raw_data += chunk;
    });
    response.on("end", function () {
        console.log("response received, length: " + raw_data.length);
    });
}).on("error", function (e) {
    console.error(e);
});

