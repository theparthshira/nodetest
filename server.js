const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/test", (req, res) => {
  const name = req.body;
  console.log("name =====", req);
  res.send(name);
});

app.listen(process.env.PORT, () => {
  console.log("listening on ===== 3000");
});
