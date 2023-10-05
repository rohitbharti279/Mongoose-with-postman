const express = require('express');
require("./config.js");

const product = require("./product.js");

const app = express();
app.use(express.json());

//post = Save new data
app.post("/create", async (req,res) => {
    const data = new product(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result);
});

//list of data
app.get("/list", async (req, res) => {
    const data = await product.find();
    res.send(data);
});

//delete of data
app.delete("/delete/:_id", async (req, res) => {
    // console.log(req.params);
    // res.send("deleted Successfully");

    const data = await product.deleteOne(req.params);
    res.send(data);
    console.log(data);
});

app.listen(8080);