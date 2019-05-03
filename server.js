const express = require('express')
const app = express()
const hbs = require('hbs');


require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public')); //middleware

//para usar parciales con handlebars
hbs.registerPartials(__dirname + '/views/parciales');

//usar el hbs para renderizar paginas
app.set('view engine', 'hbs');



//=========== con express sin hbs=====
// app.get('/', (req, res) => {
//     // let salida = {
//     //     nombre: 'jesus',
//     //     edad: 32,
//     //     url: req.url
//     // }
//     // res.send(salida);
// })
//==================================

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jesus valdez'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port} a las ` + new Date().getHours() + ':' + new Date().getMinutes());
});