console.log('Inicio de Programa');
console.time('programa');
setTimeout(()=>{
    console.log('primer timeout');
},3000)

setTimeout(()=>{
    console.log('segundo timeout')
}, 1000);



console.timeEnd('programa');
console.log('Fin de programa');