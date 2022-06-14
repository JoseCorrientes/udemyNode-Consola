const { resolve } = require('path');

require('colors');


const mostrarMenu = ()=> {
    return new Promise((resolve, reject)=>{
        console.clear();
        console.log('==========================='.yellow);
        console.log('   Seleccione una Opcion');
        console.log('=======================\n\n'.yellow);
        console.log(`${"1.".green} Crear TODO`);
        console.log(`${"2.".green} Listar TODO`);
        console.log(`${"3.".green} Listar TODO Completos`);
        console.log(`${"4.".green} Listar TODO Pendiente`);
        console.log(`${"5.".green} Completar TODO(s)`);
        console.log(`${"6.".green} Borrar TODO`);
        console.log(`${"0.".green} Salir\n\n`);


        const datoEntrada = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        datoEntrada.question('Seleccione una opcion: '.bgMagenta, (opt)=>{
            datoEntrada.close();
            resolve(opt);
        })
})
}






const pausa = ()=>{
    return new Promise((resolve, reject)=>{

        const datoEntrada2 = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        datoEntrada2.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt)=>{
            resolve(opt);
            datoEntrada2.close();
        })
});    
};


    


module.exports = {
    mostrarMenu,
    pausa,
}


 