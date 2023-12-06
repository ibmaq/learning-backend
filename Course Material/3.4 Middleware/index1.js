import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
// const __dirname = dirname(fileURLToPath())

app.get("/", (req, res) => {
  console.log("🚀 ~ file: index1.js:9 ~ __dirname:", __dirname);
  // res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  // res.sendFile(__dirname + "/public/index.html");
  console.log("req.body", req.body);
});

app.listen(port, () => {
  console.log("App is listening on port 3000");
});
