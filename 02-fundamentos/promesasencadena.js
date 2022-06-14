const empleados = [
    {
        id: 1,
        nombre: "Fernando"
    },
    {
        id: 2,
        nombre: "Diego"
    },
    {
        id: 3,
        nombre: "Carlos"
    },
]

const salarios = [
    {
        id: 1,
        salario: 1000 
    },
    {
        id: 2,
        salario: 1500
    },
]


getEmpleado=(id)=>{
    return new Promise((resolve, reject)=>{
        const empleado=empleados.find(e=>e.id===id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`no existe el empleado ${id}`);
    })
}

getSalario=(id)=>{
    return new Promise((resolve, reject)=>{
        const salario=salarios.find(s=>s.id===id)?.salario;
        (salario)
            ?resolve(salario)
            :reject(`No exite el salario para el id ${id}`);
    })
}




let nombre;
let id=3;
getEmpleado(id)
    .then(empleado=> {
        nombre=empleado;
        return getSalario(id);
    })
    .then(salario=>console.log(`El empleado: ${nombre} tiene un salario de ${salario}`))
    .catch(err=>console.log(err));   //se hace un catch general para todas las promesas anidadas