const app = require("./app");
const config = require("./config");

const { port } = config;

const server = app.listen(port, () => {
  console.log("App listening on port: ", port);
});

function exitHandler() {
  if (server) {
    server.close(() => {
      console.log("Server is closed");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}

process.on("SIGTERM", exitHandler);
process.on("SIGINT", exitHandler);
process.on("uncaughtException", exitHandler);
process.on("unhandledRejection", exitHandler);
