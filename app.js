const express = require("express");
const MainRoutes = require("./routes/MainRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", MainRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
