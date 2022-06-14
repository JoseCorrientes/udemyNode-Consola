//version nueva
const fs = require('fs');
const colors = require('colors');
const path = require('path');



const crearArchivo = async (base = 5, rep=10, listar)=>{              //utilizando async y la escritura sincronica
    try {
        salidai="";
        salidai += ('==========================\n');
        salidai += (`    Tabla del ${base}\n`);
        salidai += ('==========================\n');


        salida="";
        salida += ('==========================\n'.yellow);
        salida += (`    Tabla del ${colors.gray(base)} \n`);
        salida += ('==========================\n'.yellow);
        
        for (let i=1; i<=rep; i++) {
            if (i!=rep)
                {            
                salida  += (`${colors.red(base)} ${"x".green} ${i} ${"=".green} ${i*base}\n`);
                salidai += (`${base} x ${i} = ${i*base}\n`);
                }    
            else{
                salida += (`${colors.red(base)} ${"x".green} ${i} ${"=".green} ${i*base}`);
                salidai += (`${base} x ${i} = ${i*base}`);
                }
        }
        
        const OUT_DIR = "./helpers/archivos";
        const outFilePath = path.join(OUT_DIR,`tabla-${base}.txt`)
        
        fs.writeFileSync(outFilePath, salidai);
        //fs.writeFileSync(`/archivos/tabla-${base}.txt`, salidai);
        console.clear();
        if (listar) console.log(salida);

        return (`tabla-${base}.txt`);
        
    } catch(e) {
        throw (e)
        //throw (`no se puede grabar tabla-${base}.txt`);
    }    
}

module.exports = { 
    multiplicar: crearArchivo
};









