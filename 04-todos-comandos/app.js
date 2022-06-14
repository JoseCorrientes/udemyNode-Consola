require('colors');

const {mostrarMenu, pausa }=require('./helpers/mensajes');
console.clear();

let opt=''
const main = async () =>{
    
    while (opt!='0') {
        console.clear();
        opt = await mostrarMenu();
        console.log({opt});
        if (opt!=='0') await pausa();
    }
}

main();