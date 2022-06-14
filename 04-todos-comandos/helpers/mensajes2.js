// const { stdin, stdout } = require('process');

// require('colors');

// const mostrarMenu = ()=>{
//     return new Promise((resolve, reject)=>{
//             console.clear();
//             console.log(`=====================`.yellow);
//             console.log(`= ${"Seleccione Opcion".grey} =`.yellow);
//             console.log(`=====================\n\n`.yellow);

//             console.log(`${"1.".blue} Crear ToDo`);
//             console.log(`${"2.".blue} Listar ToDos`);
//             console.log(`${"3.".blue} Listar ToDos Completos`);
//             console.log(`${"4.".blue} Listar ToDos Pendientes`);
//             console.log(`${"5.".blue} Completar ToDos`);
//             console.log(`${"6.".blue} Borrar ToDos`);
//             console.log(`${"0.".blue} Salir\n\n`);

//             const readline=require('readline').createInterface({
//                 input: stdin,
//                 output: stdout
//             })
//             readline.question('Cual opcion: ', (answer)=>{
//                 if (answer!='0') console.log({answer});
//                 readline.close();
//                 resolve(answer);
//             })
//         })}
 

// const pausa = ()=>{
//     return new Promise((resolve, reject)=>{
//         const readline =require("readline").createInterface({
//             input:stdin,
//             output:stdout
//         })
//         readline.question('Presione ENTER para continuar', (opt)=>{
//             readline.close();
//             resolve();   //no devuelvo nada porque no me interesa lo que escriba

//         })
// })}

// module.exports={
//     mostrarMenu,
//     pausa
// }















