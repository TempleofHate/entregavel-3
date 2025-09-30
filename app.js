var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// Funções matemáticas
function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero!";
  }
  return a / b;
}

// Rota inicial
app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

// Rota de soma
app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

// Rota de subtração
app.post('/subtrai', function (req, res) {
  var body = req.body;
  var resultado = subtrai(body.a, body.b);
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

// Rota de multiplicação
app.post('/multiplica', function (req, res) {
  var body = req.body;
  var resultado = multiplica(body.a, body.b);
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

// Rota de divisão
app.post('/divide', function (req, res) {
  var body = req.body;
  var resultado = divide(body.a, body.b);
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

// Porta do servidor
var port = 3001;
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});