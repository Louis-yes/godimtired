module.exports = body

function body (site) {
  return `
  <body class="body">
    <main class="content">
      ${header(site)}
      ${site.bible.books.map(bbb => book(bbb)).join('')}
    </main>
  </body>
  `
}

function header(site) {
  return `
  <header class="title page">
    <article class="title-page">
      <h1 class="title godimtired">${site.title.split(',').join(',\n').trim()}</h1>
    </article>
    <article class="notes words">
        <ul class="list notes-list">
          ${site.bible.words.map(w=>{return `<li class="word">${w}</li>`}).join('')}
        </ul>
    </article>
  </header>
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
