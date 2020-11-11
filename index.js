var fs = require('fs')

function readTheBible () {
	var bbl = fs.readFileSync('kjv-1769.txt','utf8')
	var array = bbl.split('\n')
	var result = "";
	for(var i = 0; i < array.length; i++){
		var ll = array[i]
		if(isTired(ll)){result += " " + ll}
	}
	fs.writeFileSync("sleep.txt",result);
}

function isTired(ss) {
	var tiredWords = [
		"tired",
		"weary",
		"exhausted",
		"rest",
		"sleep",
		"slept",
		"lay",
		"slumber",
		"dormant",
		"wearied",
		"exhaustion",
		"dead",
		"die",
		"ease",
		"lie",
		"respite",
		"relax",
		"asleep",
		"pause",
		"cease",
		"recover",
		"releive",
		"allay",
		"sooth",
		"dream",
		"wait"
	]
	let includesTiredWord = (string) => ss.includes(' ' + string)
	return tiredWords.some(includesTiredWord)
}

readTheBible();
