import "source-map-support/register";
import "dotenv/config";

import { server } from "./app"

const startTime = new Date().getTime();

server.listen();

server.on("listening", () => {
  console.log(server.address())
})

server.on("error", console.log)

server.on("close", () => {
  console.log({ msg: "server closed" })
})

const handleShutdown = () => {

  server.close();

  const endTime = new Date().getTime();
  const durationRunning = endTime - startTime;
  console.log({startTime, endTime, durationRunning})
}

process.on('SIGTERM', handleShutdown);
process.on('SIGINT', handleShutdown);
process.on('SIGUSR2', handleShutdown);