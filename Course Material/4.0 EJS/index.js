import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
let weekend = false;

function weekendCheck(req, res, next) {
  const date = new Date();
  const day = date.getDay();
  if (day == 0 || day == 6) weekend = true;
  else weekend = false;
  next();
}

app.use(express.urlencoded({ extended: true }));
app.use(weekendCheck);

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/public/index.html");
  res.render("index.ejs", {
    weekend: weekend,
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
