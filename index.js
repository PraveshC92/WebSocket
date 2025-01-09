const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 5000 });

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    console.log(`Received:%s`, msg);
  });

  ws.send("something");
});
