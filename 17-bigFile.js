const { writeFileSync } = require("fs");

for (let i = 0; i < 1000000; i++) {
  writeFileSync("./content/Big.txt", `hello world ${i}\n`, { flag: "a" });
}
