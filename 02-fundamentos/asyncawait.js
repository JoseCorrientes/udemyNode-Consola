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

// const getEmpleado = (id)=>{
//     return new Promise((resolve, reject)=>{
//         const empleado = empleados.find(x=>x.id===id)?.nombre;

//         (empleado) 
//            ? resolve(empleado)
//            :reject (`no existe el empleado id${id}`)
//     })
// }

// const getSalario = (id) => {
//     return new Promise ((resolve, reject)=>{

//         const salario = salarios.find(x=>x.id===id)?.salario;

//         (salario)
//         ? resolve (salario)
//         : reject (`No existe el salario para id: ${id}`);
//     })
// }



// const id =1;

// const empleado =  await getEmpleado(id);
// console.log(empleado);

const getEmpleado =(id)=>{
    return new Promise ((resolve, reject)=>{

        const empleado = empleados.find(e=>e.id===id)?.nombre;
        (empleado)
        ? resolve(empleado)
        : reject(`No existe el empleado ${id}`);
    })
}

const getSalario = (id)=>{
    return new Promise((resolve, reject)=>{

        const salario = salarios.find(s=>s.id===id)?.salario;

        (salario)
        ? resolve(salario)
        : reject(`No existe el salario para el id ${id}`);
    })
}

// getEmpleado(4)
//     .then(empleado=>console.log(empleado))
//     .catch(erro=>console.log(erro));

// getSalario(3)
//     .then(salario=>console.log(salario))
//     .catch(err=>console.log(err));

const getInfoUsuario =  async (id)=>{
    try {
        const empleado = await getEmpleado(id);
        const salario =  await getSalario(id);
        return `El salario para el ${empleado} es ${salario}`;
    }catch(err){
        throw err;    //si uso throw dispara el catch de la llamada a funcion, si uso return dispara el then de la funcion
    }
}    

getInfoUsuario(3)
    .then(msg=> {
        console.log('TODO SALIO BIEN');
        console.log(msg);
    })
    .catch(err=>{
        console.log('TODO SALIO MAL');
        console.log(err)
    });