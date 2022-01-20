const express = require("express");
const router = require("./routes/index");

const app = express();
const port = 4000;

app.listen(port, ()=>{
    console.log("Server started listening");
});

app.use(express.json()); // For getting POST JSON body in request object
app.use(express.urlencoded()); // For getting URL Parameters in request object
app.use("/api",router);