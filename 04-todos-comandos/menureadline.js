const { resolve } = require('path');
const { stdin, stdout } = require('process');

const menu=()=>{
    return new Promise((resolve,reject)=>{
        console.clear();
        console.log(`\n\n\n1-opcion 1`);
        console.log(`2-opcion 2`);
        console.log(`3-opcion 3`);
        console.log(`4-opcion 4`);
        console.log(`0-salir\n\n`);
        const entrada = require('readline').createInterface({
            input: stdin,
            output: stdout
        })
        entrada.question('Elija una opcion: \n', (answer)=>{
            entrada.close();
            resolve(answer)
        })
    })
    
}

const pausar = ()=>{
    return new Promise((resolve, reject)=>{
        let pausador=require('readline').createInterface({
            input: stdin,
            output: stdout
        })
        pausador.question('presione ENTER para seguir\n', option=>{
            pausador.close();
            resolve();
        })
    })
}


module.exports={
    menu,
    pausar
}