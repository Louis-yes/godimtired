var bb = require('./tiredbible.js')
var fs = require('fs')
const site = JSON.parse(fs.readFileSync('site.json'))
site.bible = bb
const head = require('./components/head.js')
const body = require('./components/body.js')

function main () {
  return `
<!DOCTYPE html>
<html lang="en">
    ${head(site)}
    ${body(site)}
</html>
  `
}

// as the name suggests, this writes the index.html
fs.writeFile('index.html', main(), 'utf8', function(){
  console.log('index.html written')
})
