const express = require('express');
const app = express();
const puerto = 80;
const UsuariosController = require('./controllers/UsuariosController');
const CategoriaController = require('./controllers/CategoriaController');
const ServiciosController = require('./controllers/ServiciosController');

app.use(express.json());

app.get('/', function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('¡Prueba 123456789012!');
});

app.get('/usuarios', UsuariosController.indexGet);
app.get('/servicios', ServiciosController.indexGet);
app.get('/categorias', CategoriaController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.get('/categorias/:id([0-9]+)', CategoriaController.itemGet);
app.get('/servicios/:id([0-9]+)', ServiciosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.post('/servicio', ServiciosController.indexPost);
app.post('/categorias', CategoriaController.indexPost);

app.listen(puerto, function() {
  console.log("Servidor en espera http://localhost")
})
