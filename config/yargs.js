const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        default: 1,
        demandOption: true, // Ahora es opcional
        describe: 'Base de la tabla de multiplicar'
    }).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        if (argv.b < 1) {
            throw 'La base tiene que ser mayor o igual a 1';
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('hasta', {
        alias: 'h',
        type: 'number',
        default: 10,
        describe: 'Límite de la tabla de multiplicar'
    })
    .argv;

    module.exports = yargs;