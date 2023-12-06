import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
let bandName = "";
const __dirname = dirname(fileURLToPath(import.meta.url));
const bandNameGenerator = (req, res, next) => {
  const streetName = req.body["street"];
  const petName = req.body["pet"];
  bandName = streetName + petName;
  next();
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><p>${bandName}! 🤘🙌`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
