const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/test", (req, res) => {
  const name = req.body;
  console.log("name =====", name);
  res.send(name);
});

app.listen(3000, () => {
  console.log("listening on ===== 3000");
});
