const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/comercial", (req, res) => {
  return res.json("/comercial respondendo");
});

app.listen(3005, () => {
  console.log("API comercial running!");
});
