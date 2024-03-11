const express = require("express");
const app = express();
const cors=require("cors");
app.use(cors());


app.get("/api", (req, res) => {
    return res.json({message: "This is from backend"});
})

app.listen(8081, () => {
    console.log("Listining");
})