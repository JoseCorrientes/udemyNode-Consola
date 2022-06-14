const { inquirerMenu, pausa } = require('./helpers/inquirerHelper');

require('colors');


const main = async ()=>{
    let opt='';
    while(opt!='0'){
        opt = await inquirerMenu()
        if (opt!='0') await pausa() 
        else console.log('\n');
    }    
}

main();