var fs = require('fs')

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

	return {words: tiredWords, books: tiredBible}
}

function isTired(ss) {
	let includesTiredWord = (string) => ss.includes(' ' + string)
	return tiredWords.some(includesTiredWord)
}

module.exports = readTheBible()
