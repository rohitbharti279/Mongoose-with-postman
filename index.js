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
})

app.listen(8080);