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

const getTotal=(id)=>{
    return new Promise ((resolve, reject)=>{
        const empleado = empleados.find(x=>x.id===id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject (`no existe el empleado id: ${id}`)
    })
}

const getTotal2 =(id)=>{
    return new Promise((resolve, reject)=>{
        const salario = salarios.find(x=>x.id===id)?.salario;
        (salario)
        ? resolve (salario)
        : reject ('No existe datos sobre su salario');
    })
}



let id=1;
getTotal(id)
    .then(empleado=>{
        console.log( `el empleado es ${empleado}`);
        getTotal2(id)
             .then(salario=>console.log(`Su salario es ${salario}`))
             .catch(err=>console.log(err));
    })
    .catch(err2=>console.log(err2));






// getEmpleado(1)
// .then (empleado=>console.log(empleado))
// .catch (err=>console.log(err));


// getSalario(1)
//     .then(salario=>console.log(salario))
//     .catch (err=>console.log(err));







