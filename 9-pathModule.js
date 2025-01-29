// Summary: This file contains examples of how to use the path module in Node.js
const path = require("path");

const filePath = path.join("/content", "subfolder", "tst.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absPath = path.resolve(__dirname, "content", "subfolder", "tst.txt");
console.log(absPath);
