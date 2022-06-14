const Tarea = require("./tarea");
require = 'colors';

class Tareas {

    constructor (archivo)  {
            this._listado=archivo;
        };

    crearTarea(descripcion) {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id]=tarea;
        return this._listado;
    };
    get listarTareas() {
       let listado =[];
        Object.keys(this._listado).forEach(x=>listado.push(this._listado[x]));
        return listado;
    }
    listarBienTareas() {
        let por=0;
        for (let k in this._listado) {
            let posicion = (this._listado[k].completado===null) ?(por+1).toString().red: (por+1).toString().green;
            let estado = (this._listado[k].completado===null) ? "Pendiente".red : "Completada".green;
            console.log(`${posicion} ${this._listado[k].descripcion} ::  ${estado} `);
            por++;
        }
    }
    listarPendientesPorCompletadas(completadas=true) {
        Object.keys(this._listado).forEach((x, idx) => {
            if (completadas && this._listado[x].completado!==null) {
                let numero = `${idx+1}`.green;
                let estado = `${this._listado[x].completado}`.green
                console.log(`${numero} ${this._listado[x].descripcion} :: ${estado}`);
            } else if (!completadas && this._listado[x].completado===null) {
                let numero = `${idx+1}`.red;
                let estado = `Pendiente`.red;
                console.log(`${numero} ${this._listado[x].descripcion} :: ${estado}`);
            }})
            
    }
    listarUnaTarea(id) {
       return this._listado;
    }

    borrarTarea(id){
        if (this._listado[id]) delete this._listado[id];
    };

    borrarTodo() {
       this._listado={}
       return this._listado
    } 

    completarTodo(data) {
        data.forEach(x=>{
            this._listado[x].completado=true;
        })
    }

    togglearTodo(data) {
        for (let index in this._listado) {
            if (!data.includes(index))  { this._listado[index].completado=null;}
            else { this._listado[index].completado= new Date()} 
        }

        return this._listado;
    }

    marcarSoloSeleccionados(data) {
        //recibe un arreglo de id que estan seleccionadas y recorre todo el estado actualizando a esas direcciones
    
    
    }
}

module.exports=Tareas;