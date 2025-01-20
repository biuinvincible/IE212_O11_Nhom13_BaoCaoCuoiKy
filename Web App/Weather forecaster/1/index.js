const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

const db = require('./config/db/index');
const Weather = require('./models/weather');

// Connect database
db.connect();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main',helpers: {
    toJSON : function(object) {
      return JSON.stringify(object);
    } }}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    Weather.find({})
        .then(weather => {
            weather = weather.map(weather => weather.toObject())
            res.render('cac', {weather: weather})
            console.log(weather)
        })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
