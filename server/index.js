import express from "express";
import path from "path";
import webpack from "webpack";
import webPackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.dev";
import socket from "socket.io";
import { config } from "./config";
const { port } = config;

const app = express();

app.use(webPackMiddleware(webpack(webpackConfig)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const server = app.listen(port, () => {
  console.log(`Server started port: ${port}`);
});

//  Socket setup

const io = socket(server);

io.on("connection", socket => {
  console.log("Socket connection ", socket.id);
  socket.on("chat", data => {
    io.emit("chat", data);
  });
});
