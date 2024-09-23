const express = require("express");
const app = express();

app.get("/", (req, res)=>{
	res.send("Express läks käima.");
});

app.listen(5202);