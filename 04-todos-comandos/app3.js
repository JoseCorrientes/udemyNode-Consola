require('colors');
const process=require('process');
const {menu, pausar} =require('./menureadline');

const main=async ()=> {
    let opt=''
    do {
        console.clear();
        opt = await menu();
        if (opt!=='0')await pausar()
        
    }while (opt!='0') 
    }

main();