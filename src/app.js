// importando dependencia "express" que devuelve una funcion
const express = require('express');

// ejecutando function de express
const app = express();
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// router inicial
app.get('/', (req, res) => {
  res.render('index');
});

// fallback router
app.use((req, res) => {
  res.render('404');
});

// escuchando desde express en puerto 3000
app.listen(3000, () => { console.log('Listening on port: 3000'); });
