//version nueva
const { multiplicar } = require('./helpers/multiplicar');
const argumento = require('./config/yargs');
const colors=require('colors');

multiplicar(argumento.base, argumento.repeticiones, argumento.listar)
     .then(nombreArchivo =>console.log(`\n${"Archivo creado correctamente: ".bgBlue} ${nombreArchivo.green}`) )
     .catch(error=>console.log(error));
