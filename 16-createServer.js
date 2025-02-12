const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcoome");
});
server.listen(8000);
