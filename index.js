const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "example.html"));
});
app.post("/enviado", (req, res) => {
  res.sendFile(path.join(__dirname, "enviado.html"));
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(
  "/public/js",
  express.static(path.join(__dirname, "node_modules/bs-custom-file-input/dist"))
);

app.listen(3000, () => {
  console.log("server running 3000");
});
