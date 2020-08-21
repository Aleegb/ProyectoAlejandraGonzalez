// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','CENTRO DE CAPACITACIÓN TÉCNICA')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//nuevas rutas academico

app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | Academico"
    res.render('academico.ejs', {title: title} )
})

// ruta nuestra historia
app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})

// ruta actvidades estacadas
app.get('/actvidadesdestacadas', (req, res) => {
    var title = app.get('appName')+" | Actividades Destacadas"
    res.render('actividadesdestacadas.ejs', {title: title} )
})

// ruta calendario
app.get('/calendario', (req, res) => {
    var title = app.get('appName')+" | Calendario"
    res.render('calendario.ejs', {title: title} )
})
// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
