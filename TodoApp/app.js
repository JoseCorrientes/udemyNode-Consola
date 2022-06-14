const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, mensajero, listadoBorrar, completarTareas, toggleTareas } = require('./helpers/inquirerHelper');
const Tareas = require('./models/tareas');

require('colors');


const main = async ()=>{
    let opt='';
    
    const archivo = leerDB();
    const Chores = new Tareas(archivo);
    
    while(opt!='0'){
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                console.clear();
                const desc= await mensajero('Ingrese la Tarea:...');
                const resultado=Chores.crearTarea(desc);
                guardarDB(resultado);
                console.log('Tarea creada...');
            break;
            case '2':
                console.clear();
                Chores.listarBienTareas();
            break;    
            case '3': 
                console.clear();
                Chores.listarPendientesPorCompletadas(true);
            break;
            case '4': 
                console.clear();
                Chores.listarPendientesPorCompletadas(false);
            break;
            case '5':
                console.clear();
                const result2 = await completarTareas(Chores.listarTareas);   
                const result3= Chores.completarTodo(result2);
            break;
            case '6':
                console.clear();
                const result4 = await toggleTareas(Chores.listarTareas);
                const result5 = Chores.togglearTodo(result4);
            break;    
            case '7' :
                const result = await listadoBorrar(Chores.listarTareas);
                if (result!='0') { 
                    const result2 = await mensajero('Ingreses S/s para confirmar');
                    if (result2==='S' || result2==='s')  {
                                Chores.borrarTarea(result);
                                console.log('Tarea borrada...');
                    }
                }
            break;
            case '0':
                console.log('\n');
            break;
        }
        guardarDB(Chores._listado);
        if (opt!='0') await pausa();
   }    
}

main();