import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(() => {});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let fNamelength = req.body["fName"].length;
  let lNamelength = req.body["lName"].length;
  let totalLength = fNamelength + lNamelength;
  res.render("index.ejs", {
    count: totalLength,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
