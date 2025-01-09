// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: 5000 });

// wss.on("connection", (ws) => {
//   ws.on("message", (msg) => {
//     console.log(`Received:%s`, msg);
//   });

//   ws.send("something");
// });
const http = require("http");
const fs = require("fs");

fs.readFile("./home.html", (err, data) => {
  if (err) throw err;

  http
    .createServer((req, res) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    })
    .listen(8000, console.log(`app is listening on the port 8000`));
});
