require('colors');

const {mostrarMenu, pausa}=require('./helpers/mensajes2');



const main = async()=>{
    let opt='';
    do {
        console.clear();
        opt = await mostrarMenu();
        if (opt!='0') {
            //console.log(`recibi un : ${opt}`);
            await pausa();
        }    
     } while (opt!='0');
}


main();