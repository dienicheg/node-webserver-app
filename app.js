const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express()
const port = process.env.PORT

// Puerto
app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto ${port}`)
})


//View engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico 
app.use( express.static('public') )


// Rutas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Nicolas Chazarreta',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Nicolas Chazarreta',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Nicolas Chazarreta',
        titulo: 'Curso de Node'
    })
})


app.get('*', (req, res) => {
    res.send('404 | Page not found')
})


