const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/negocios", (req, res) => {
  return res.json("/negocios respondendo");
});

app.listen(3006, () => {
  console.log("API negocios running!");
});
