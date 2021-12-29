const httpProxy = require("express-http-proxy");
const express = require("express");
const app = express();
var logger = require("morgan");

app.use(logger("dev"));

function selectProxyHost(req) {
  if (req.path.startsWith("/comercial")) return "http://localhost:3005/";
  else if (req.path.startsWith("/negocios")) return "http://localhost:3006/";
}

app.use((req, res, next) => {
  httpProxy(selectProxyHost(req))(req, res, next);
});

app.listen(10000, () => {
  console.log("API Gateway running!");
});
