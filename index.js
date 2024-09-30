const express = require("express");
const dateTime = require("./dateTime");



const app = express();

//määran view mootori
app.set("view engine", "ejs");
//määran avalike, jagatavate failide kausta 
app.use(express.static("public"));

app.get("/", (req, res)=>{
	//res.send("Express läks käima.");
	res.render("index");
});

app.get("/timenow", (req, res)=>{
	const weekdayNow = dateTime.weekDayEt();
	const dateNow = dateTime.dateFormattedEt();
	const timeNow = dateTime.timeFormattedEt();
	res.render("timenow", {nowWD: weekdayNow, nowD: dateNow, nowT: timeNow});
});

app.get("/vanasonad", (req, res)=>{
	let folkWisdom = [];
	fs.readFile("public/textfiles/vanasonad.txt", "utf8", (err, data)=>{});
		if(err){
			throw err;
		}
		else {
			folkWisdom = data.split(";");
			res.render = ("justlist", {h2: "Vanasõnad", listData: folkWisdom});
		}	
	});	
app.listen(5202);