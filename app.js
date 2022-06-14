const express = require("express");
const MainRoutes = require("./routes/MainRoutes");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", MainRoutes);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
