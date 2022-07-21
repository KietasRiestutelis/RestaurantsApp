const express = require("express");
const cors = require("cors");

const restaurantRouter = require("./routes/restaurantRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/restaurants", restaurantRouter);
app.use("/api/v1/restaurants", userRouter);
app.use("/api/v1/restaurants", orderRouter);


module.exports = app;