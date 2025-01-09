const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  ws.on("message", (messageAsString) => {
    const data = JSON.parse(messageAsString);

    if (data.type === "message") {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "message", data: data.data }));
        }
      });
    }
  });
});
