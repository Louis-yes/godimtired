var fs = require('fs')

function readTheBible () {
	var bbl = fs.readFileSync('kjv-1769.txt','utf8')
	var array = bbl.split('\n')
	var tiredBible = []
	for(var i = 0; i < array.length; i++){
		var ll = array[i]
		if(ll.includes("BOOK:")){
			tiredBible.push(
				{
					name: ll.split(':')[1],
					verses : []
				}
			)
		} else if(isTired(ll)){
			tiredBible[tiredBible.length-1].verses.push(ll)
		}
	}
	return tiredBible
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

function test(){
	var tiredBible = readTheBible();
	tiredBible.forEach(book => {console.log(book.name)})
}

test()
