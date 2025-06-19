const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');
crearArchivo(argv.b, argv.l,argv.hasta)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.green.bold.underline))
    .catch(err => console.log(String(err).red));