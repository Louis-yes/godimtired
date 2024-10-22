const fs = require('fs')
module.exports = head

function head (site) {
return `
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>${site.title}</title>
    <link rel="stylesheet" href="assets/tachyons.min.css"/>
    <link rel="stylesheet" href="assets/style.css"/>
  </head>
    `
}
