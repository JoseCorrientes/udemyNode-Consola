//version nueva
const argumento = require('yargs')
    .options('r', {
            alias: "repeticiones",
            type: "number",
            demandOption: true,
            describe: "Es la cantidad de numeros que se quiere de la tabla"
        })
    .options('b', {
        alias: "base",
        type: "number",
        demandOption: true,
        description: "Es la base que se utiliza para generar la tabla de multiplicar"
    })
    .options('l', {
        alias: "listar",
        type: "boolean",
        demandOption: false,
        default: false,
        description: "Si se pasa el parametro, tambien se lista en pantalla la tabla"
    })
    .check((argv, options )=> {
        if(isNaN(argv.b)) throw 'La base debe ser un numero'
        else if (isNaN(argv.repeticiones)) throw 'Las repeticiones deben ser un numero'
        else return true;
    })
    .argv;     

module.exports=argumento;
