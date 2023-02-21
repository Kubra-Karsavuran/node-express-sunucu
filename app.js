// TODO burası da node js kullanılarak kullanılan
// TODO 1-lochalhost baglanma kodları
// TODO 2-html sayfası acma methodları

const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const indexPage = fs.readFileSync("index.html"); // senkron olarak calıstıgını gosterıyor
const aboutPage = fs.readFileSync("about.html");
const notFoundPage = fs.readFileSync("404.html");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(indexPage);
  } else if (req.url === "/about") {
    return res.end(aboutPage);
  } else {
    res.statusCode = 404;
    return res.end(notFoundPage);
  }
});

server.listen(port, hostname, () => {
  //server ın calısıp calısmadıgını kontrol ettık
  console.log("server çalısıyor http://" + hostname + ":" + port + "/");
});

// TODO burası da express module kullanılarak kullanılan
// TODO 1-lochalhost baglanma kodları
// TODO 2-html sayfası acma methodları

// const path = require("path");
// const express = require("express");
// const app = express();
// const port = 3000;
// const hostname = "127.0.0.1";

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "about.html"));
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "contact.html"));
// });

// app.listen(port, hostname, () => {
//   console.log("server çalısıyor http://" + hostname + ":" + port + "/");
// });
