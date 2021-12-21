import net from "net";

export const server = net.createServer()

server.on("connection", console.log)

