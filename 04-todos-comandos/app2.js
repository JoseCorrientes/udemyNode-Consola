require('colors');
const {inquirerMenu}=require('./helpers/inquirer');
const { pausa } = require('./helpers/mensajes');

const main= async()=>{
    
    console.clear();
    let opt='';
    while(opt!=='0') {
        opt= await inquirerMenu();
        console.log({opt});

    if (opt!=='0') await pausa();
    }

}

main();















