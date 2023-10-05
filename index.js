const express = require('express');
require("./config.js");

const product = require("./product.js");

const app = express();
app.use(express.json());

// //post = Save new data
// app.post("/create", async (req, res) => {
//     const data = new product(req.body);
//     const result = await data.save();
//     console.log(result);
//     res.send(result);
// });

// //list of data
// app.get("/list", async (req, res) => {
//     const data = await product.find();
//     res.send(data);
// });

// //delete of data
// app.delete("/delete/:_id", async (req, res) => {
//     // console.log(req.params);
//     // res.send("deleted Successfully");

//     const data = await product.deleteOne(req.params);
//     res.send(data);
//     console.log(data);
// });

// //update of data
// app.put("/update/:_id", async (req, res) => {

//     const data = await product.updateOne(
//         //     {name:"Cricket"}, 
//         // {
//         //     $set: {price: 999, category: "World cup 2023"}
//         // }

//         //updated by postman
//         req.params,
//         {
//             $set: req.body
//         }
//     );
//     res.send(data);
//     console.log(data);
// });




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