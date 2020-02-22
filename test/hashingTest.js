"use strict";
exports.__esModule = true;
var string = "abc";
var js_sha256_1 = require("js-sha256");
function generateHash(input) {
    console.log(js_sha256_1.sha256(input));
}
generateHash(string);
