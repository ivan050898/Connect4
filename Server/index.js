const express = require('express')
const app = express()
const port = 5000
const sql = require('mssql');
var cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const dbConfig = {
    user: 'sa',
    password: 'antihack123',
    server: 'localhost',
    database: 'juego',
    port: 1433,
    options: { encrypt: false }
  };

const conexion = new sql.ConnectionPool(dbConfig);

app.get('/CincoMayorVictoria', (req, res) => {
  conexion.connect().then(function () {
    var request = new sql.Request(conexion);
    request
      .query(
        'select * from CincoMayorVictoria order by victorias desc'
      )
      .then(function (datos) {
        res.json(datos.recordset);
      })
      .catch(function (err) {
        res.send('Error de query');
      });
  })
  .catch(function (err) {
    res.send('No hay resultados');
  });
});

app.get('/MenorMovimientos', (req, res) => {
  conexion.connect().then(function () {
    var request = new sql.Request(conexion);
    request
      .query(
        'select * from MenorMovimientos'
      )
      .then(function (datos) {
        res.json(datos.recordset);
      })
      .catch(function (err) {
        res.send('Error de query');
      });
  })
  .catch(function (err) {
    res.send('No hay resultados');
  });
});


app.get('/JugadoresEmpate', (req, res) => {
  conexion.connect().then(function () {
    var request = new sql.Request(conexion);
    request
      .query(
        'select * from JugadoresEmpate'
      )
      .then(function (datos) {
        res.json(datos.recordset);
      })
      .catch(function (err) {
        res.send('Error de query');
      });
  })
  .catch(function (err) {
    res.send('No hay resultados');
  });
});


app.post('/CrearPartida', (req, res) => {
  console.log(req.body)
  const {Jugador1,Jugador2} = req.body
  conexion
    .connect()
    .then(function () {
      var request = new sql.Request(conexion);
      console.log(req.body)
      request.input('Jugador1', sql.VarChar(255), Jugador1);
      request.input('Jugador2', sql.VarChar(255), Jugador2);
      request
        .execute('CrearPartida')
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send(err);
        });
    })
    .catch(function (err) {
      console.log(err)
      res.send(err);
    });
})

app.post('/EditarPartida', (req, res) => {
  const {id,resultado,duracion,movimientos} = req.body
  conexion
    .connect()
    .then(function () {
      var request = new sql.Request(conexion);
      console.log(req.body)
      request.input('id', sql.Int, id);
      request.input('resultado', sql.VarChar(255), resultado);
      request.input('duracion', sql.VarChar(255), duracion);
      request.input('movimientos', sql.Int, movimientos);
      request
        .execute('EditarPartida')
        .then(function (datos) {
          res.json(datos);
        })
        .catch(function (err) {
          res.send(err);
        });
    })
    .catch(function (err) {
      console.log(err)
      res.send(err);
    });
})











/* ------------------------------------------ */

app.listen(5000, () => console.log('Server on'));

