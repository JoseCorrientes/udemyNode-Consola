const fs = require('fs');

const archivo ='./db/data.JSON';


const guardarDB=(data)=>{
    let resultado = fs.writeFileSync(archivo, JSON.stringify(data));
    return data;
}

const leerDB =() =>{
    if(fs.existsSync(archivo)) {  
                        let original = fs.readFileSync(archivo);
                        console.log(original)

                        return JSON.parse(original);
    } else {
        return {}
    }

}
module.exports = {
    guardarDB,
    leerDB,
};