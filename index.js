const express = require("express");
const dateTime = require("./dateTime");
const fs = require("fs");
//et saada kõik päringust kätte
const bodyparser = require("body-parser");

const app = express();

//määran view mootori
app.set("view engine", "ejs");
//määran avalike, jagatavate failide kausta 
app.use(express.static("public"));
//kasutame body-parserit päringute parsimiseks (kui ainult tekst, siis flase, kui ka pildid jms, siis true)
app.use(bodyparser.urlencoded({extended: false}));
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

app.get("/vanasonad.txt", (req, res)=>{
	let folkWisdom = [];
	fs.readFile("public/textfiles/vanasonad.txt", "utf8", (err, data)=>{});
		if(err){
			throw err;
			res.render = ("justlist", {h2: "Vanasõnad", listData: folkWisdom});
		}
		else {
			folkWisdom = data.split(";");
			res.render = ("justlist", {h2: "Vanasõnad", listData: folkWisdom});
		}	
	});	
	
app.get("/regvisit", (req, res)=>{
	res.render("regvisit");
});

app.post("/regvisit", (req, res)=>{
	//console.log(req.body);
	//avan txt faili selliselt, et kui seda pole olemas, luuakse
	fs.open("public/textfiles/log.txt", "a", (err, file) => {
		if(err){
			throw err;
		}
		else {
			fs.appendFile("public/textfiles/log.txt", req.body.firstNameInput + " " + req.body.lastNameInput + ";", (err)=>{
				if(err){
					throw err;
				}
				else {
					console.log("Faili kirjutati!");
					res.render("regvisit");
				}
			});
		}	
	});	
	//res.render("regvisit");
});

app.listen(5202);