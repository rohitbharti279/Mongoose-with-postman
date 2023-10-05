const express = require('express');
require("./config.js");

const product = require("./product.js");

const app = express();
app.use(express.json());

//Search
app.get("/search/:key", async (req, res) => {
    console.log(req.params.key);
    let searchData = await product.find(
        {
            "$or": [
                //searchng by .....______
                {"name": {$regex:req.params.key}},
                {"brand": {$regex:req.params.key}},
                {"category": {$regex:req.params.key}}
            ]
        }
    )
    res.send(searchData);
    
})

app.listen(8080);