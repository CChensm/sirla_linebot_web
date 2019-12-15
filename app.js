const path = require('path')
const express = require('express')
// const routes = require('./routes')
const app = express()
const port = 3000
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
var my_super_heroes = {
  title: 'Super Heroes',
  hero: ['Superman', 'Batman', 'Hulk', 'Wonder woman']
}
app.get('/', (req, res) => {
    res.render('index.ejs', my_super_heroes )
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))