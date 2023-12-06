//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
let password = "";
const __dirname = dirname(fileURLToPath(import.meta.url));
function authenticateUser(req, res, next) {
  password = req.body["password"];
  if (password === "ILoveProgramming") next();
  else res.redirect("/");
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(authenticateUser);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
