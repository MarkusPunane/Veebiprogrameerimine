const dateFormatted = function(){
	//function dateFormatted(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	const monthNamesEt = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	//console.log("Täna on: " + dateNow + "." + (monthNow + 1) + "." + yearNow);
	//let dateEt = dateNow + ". " + monthNamesEt[monthNow] + " " + yearNow;
	//return dateEt;
	return dateNow + ". " + monthNamesEt[monthNow] + " " + yearNow;
}

const weekDay = function(){
	let timeNow = new Date();
	let dayNow = timeNow.getDay();
const weekdayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
}

const timeFormatted = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	return hourNow + ":" + minuteNow + ":" + secondNow;
}

//const partOfDay = function(){
	//let dPart = "suvaline aeg";
	//let hourNow = new Date().getHours();
	//if(hourNow > 8 && hourNow <= 16){
	//		dPart = "kooliaeg";
	//	}
	//return dPart;
//}
	
//const partOfWeek = function(){
	//let wPart = "suvaline aeg";
	//let dayNow = new Date().getDay();
	//let hourNow = new Date().getHours();
	//if(dayNow) == 1 && 2 && 3 && 4{
			//wPart = "koolipäev";
	//}
	//return wPart;
//}

//const partOfWeekend = function(){
	//let wePart = "suvaline aeg";
	//let hourNow = new Date().getHours();
	//let dayNow = new Date().getDay();
	//if(dayNow) == 5 && 6 && 0{
		//	wePart = "puhkepäev";
		//		if(hourNow) > 10 && <= 23{
		//			wePart = "ärkvel oleku aeg";
		//		else(hourNow) < 10 && >= 23{
		//			wePart = "magamis aeg";
		//		}
//	return wePart;
//}}}

//ekspordin kõik vajaliku
module.exports = {dateFormattedEt: dateFormattedEt, weekDayEt: weekDayEt, timeFormattedEt: timeFormattedEt, //weekdayNames: weekdayNamesEt, monthNames: monthNamesEt, dayPart: partOfDay, weekPart: partOfWeek, weekendPart: partOfWeekend
};