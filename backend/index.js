const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.routes");

const app = express();

const mongodburl = "mongodb+srv://TarunSarkar:Tarun@cluster0.i35bay4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodburl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb connection error"));

db.once("open", () => {
  console.log("Connected to Database successfully!");
})

app.get('/', function (req, res) {
  res.send('Hello Tarun')
})

app.use(express.json());
app.use(productRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log("server started at port 3000");
});