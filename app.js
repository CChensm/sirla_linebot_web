const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   