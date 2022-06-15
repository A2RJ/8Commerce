const express = require("express");
const app = express();
const port = 3000;
const MainRoutes = require("./routes/MainRoutes");
const userRoutes = require("./routes/userRoutes");
const storeRoutes = require("./routes/storeRoutes");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", MainRoutes);
app.use("/users", userRoutes);
app.use("/stores", storeRoutes);

app.listen(port, () =>
    console.log(`Example app listening on port http://localhost:${port}`)
);
