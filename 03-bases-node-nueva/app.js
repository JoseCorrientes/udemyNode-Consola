//version nueva
const { multiplicar } = require('./helpers/multiplicar');
console.clear();

console.log(process.argv);
const  [,,arg3="base=5"] = process.argv;
const [,base=5]=arg3.split('=');

multiplicar(base)
     .then(nombreArchivo =>console.log(`\nArchivo creado correctamente: ${nombreArchivo}`) )
     .catch(error=>console.log(error));




