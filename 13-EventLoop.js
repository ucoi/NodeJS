const { readFile } = require("fs");
console.log("started first task"); //first

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result); //third
  console.log("completed first task"); //forth
});
console.log("ney task"); //second
