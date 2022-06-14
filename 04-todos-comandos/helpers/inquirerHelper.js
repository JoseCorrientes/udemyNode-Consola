const inquirer = require('inquirer');
const input = require('@inquirer/input');

require('colors');

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "Que dese hacer?",
        choices: [
            {
             name: "1. Crear ToDos",
             value: "1",   
            },
            {
            name: "2. Listar ToDos",
            value: "2",   
            },
            {
            name: "3. Listar ToDos Completadas",
            value: "3",   
            },
            {
            name: "4. Listar ToDos Pendientes",
            value: "4",   
            },
            {
            name: "5. Completar ToDo(s)",
            value: "5",   
            },    
            {
            name: "6. Borrar ToDo",
            value: "5",   
            },    
            {
            name: "0. Salir",
            value: "0",   
            }
        ]
    }
]


const inquirerMenu = async ()=>{

    console.clear(preguntas);
    
    console.log('========================='.gray);
    console.log(`== ${"Seleccione Opcion".blue} ===`.grey);
    console.log('=========================\n\n\n\n'.gray);
    
    const opt = await inquirer.prompt(preguntas)
    return opt.opcion;
    
    
}
/*
//utilizando tipo input importando directo
const pausa=async()=>{
    console.log('\n');
    const resultado =await input({message: `Presione ${"ENTER".green} para continuar`});
    return resultado;
}
*/

const pausa = async()=> {
    console.log('\n');
    const enter=[
        {
         type:"input",
         name:"input",
         message: `Presione ${"ENTER".green} para continuar`,
        }
    ];

    const result = await inquirer.prompt(enter);
    return result;
}


// const pausa = ()=>{
//     return new Promise((resolve, reject)=>{

//         const datoEntrada2 = require('readline').createInterface({
//             input: process.stdin,
//             output: process.stdout,
//         })

//         datoEntrada2.question(`\nPresione ${"ENTER".green} para continuar\n`, ()=>{
//             resolve();
//             datoEntrada2.close();
//         })
// });    
// };


module.exports = {
    inquirerMenu,
    pausa
}