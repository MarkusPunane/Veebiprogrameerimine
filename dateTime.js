const weekdayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
const monthNamesEt = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

const dateFormattedEt = function(){	
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow = timeNow.getFullYear();
	return dateNow + ". " + monthNamesEt[monthNow] + " " + yearNow;
}

const weekDayEt = function(){
	let timeNow = new Date();
	let dayNow = timeNow.getDay();
	return weekdayNamesEt[dayNow];
}

const timeFormattedEt = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	return hourNow + ":" + minuteNow + ":" + secondNow;
}

const partOfDay = function(){
	let dPart = "suvaline aeg";
	let hourNow = new Date().getHours();
	//   OR   ||   AND  &&
	// >   <    >=  <=    !=   ==    ===
	if(hourNow > 8 && hourNow <= 16){
		dPart = "kooliaeg";
	}
	return dPart;
}

//ekspordin kأµik vajaliku
module.exports = {dateFormattedEt: dateFormattedEt, weekDayEt: weekDayEt, timeFormattedEt: timeFormattedEt, weekdayNamesEt: weekdayNamesEt, monthNamesEt: monthNamesEt, dayPart: partOfDay}