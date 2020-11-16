module.exports = body

function body (site) {
  return `
  <body class="">
    ${site.bible.map(bbb => book(bbb)).join('')}
  </body>
  `
}

function book(bbb){
  return `
  <article class="book ${bbb.name.trim().replace(' ','-')}">
    <h1 class="name">${bbb.name}</h1>
    <p class="verses">${bbb.verses.map(v => {return v}).join('')}</p>
  </article>
  `
}
