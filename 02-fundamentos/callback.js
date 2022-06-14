// setTimeout(()=>console.log('hola mundo'), 1000);



// const accesoBd=(id, callback) =>{
//     const usuario={
//         id,
//         nombre: 'Jose',
//     }
//     setTimeout(()=>{
//        callback(usuario);
//     },1500);
// };



// accesoBd(14, (usuario)=>{
//     console.log(`el usuario recuperado es : ${usuario.id} -> ${usuario.nombre}`);
//     console.log('esto es lo que quiero hacer cuando pase el tiempo');
// });

// console.log('final');

//-----------------------------------------------------------------------------------------

const accesoBD=(id, callback)=>{
    const datoDeAca={
        id:2,
        nombre: 'juan, perez',
        valor: 36,
        direccion: 'las florecidas 123',
    }

    setTimeout(()=>callback(datoDeAca),3000);
};

accesoBD(2,(dato)=>{
    console.log(`identificador: ${dato.id}, nombre: ${dato.nombre}, vive en ${dato.direccion} y vale: ${dato.valor}`);
});








