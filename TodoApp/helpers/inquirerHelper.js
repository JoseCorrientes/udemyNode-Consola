const inquirer = require('inquirer');
const input = require('@inquirer/input');
const { validate } = require('uuid');

require('colors');

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "Que desea hacer?",
        choices: [
            {
             name: `${"1.".green} Crear ToDos`,
             value: "1",   
            },
            {
            name: `${"2.".green} Listar ToDos`,
            value: "2",   
            },
            {
            name: `${"3.".green} Listar ToDos Completadas`,
            value: "3",   
            },
            {
            name: `${"4.".green} Listar ToDos Pendientes`,
            value: "4",   
            },
            {
            name: `${"5.".green} Completar ToDo(s)`,
            value: "5",   
            },  
            {
            name: `${"6.".green} Toogle ToDo(s)`,
            value: "6",           
            },            
            {
            name: `${"7.".green} Borrar ToDo`,
            value: "7",   
            },    
            {
            name: `${"0.".green} Salir`,
            value: "0",   
            }
        ]
    }
]

const inquirerMenu = async ()=>{
    console.clear();
    console.log('========================='.gray);
    console.log(`${'==='.grey} ${"Seleccione Opcion".white} ${'==='.grey}`);
    console.log('=========================\n\n'.gray);
    const opt = await inquirer.prompt(preguntas)
    return opt.opcion;
}

const listadoBorrar = async (data=[])=> {
    console.clear();
    console.log('=============================='.gray);
    console.log(`${'==='.grey} ${"Elija que Tarea Borrar".white} ${'==='.grey}`);
    console.log('==============================\n\n'.gray);

    let opciones = data.map((x, idx)=> {
        let description = `${idx+1}.`.green;
        return {
            name: `${description} ${x.descripcion}`,
            value: x.id,
        };
    
    })
    opciones.push({
        name: `${0}- Salir`,
        value: '0'})

    const preguntas2 = [
        {
         type: 'list',
         name: 'opcion',
         message :'Que ToDo desea borrar',
         choices: opciones
  
        }
    ]
    const opt = await inquirer.prompt(preguntas2)
    // console.log(opt.opcion);
    return opt.opcion;
}

const completarTareas = async (data)=> {
    console.clear();
    console.log('===================================='.gray);
    console.log(`${'==='.grey} ${"Elija la/s Tarea a completar".white} ${'==='.grey}`);
    console.log('====================================\n'.gray);   

    let filtrado = data.filter(x=>x.completado==null);
    let opciones = filtrado.map((x, idx)=> {
            let numero = `${idx+1}.`.green;
            return {
                name: `${numero} ${x.descripcion}`,
                // value: idx+1,
                value: x.id,
                checked: false,
            };
        }
    )
    const preguntas3 = [
        {
        type: 'checkbox',
        name: 'opcion',
        message :'Que Tareas va a completar?',
        choices: opciones
        }
    ];
    const opt = await inquirer.prompt(preguntas3);
    return opt.opcion;
}

const toggleTareas = async (data)=> {
     
    console.clear();
    console.log('===================================='.gray);
    console.log(`${"===".grey} ${"Elija la/s Tarea a modificar".white} ${"===".grey}`);
    console.log('====================================\n'.gray);   
    let opciones2 = data.map((x, idx)=> {
            let numero = `${idx+1}.`.green;
            return {
                name: `${numero} ${x.descripcion}`,
                value: x.id,
                checked: (x.completado==null)? false : true,
            };
        }
    )

    const preguntas4 = [
        {
        type: 'checkbox',
        name: 'opcion2',
        message :'Que Tareas va a Cambiar de estado ?',
        choices: opciones2
        }
    ];
    const opt2 = await inquirer.prompt(preguntas4);
    return opt2.opcion2;
}

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

const mensajero = async (message)=>{
    const enter = [
        {
        type: 'input',
        name: 'input',
        message,
        validate (value){
            if (value.length=== 0) return 'Por favor ingrese un valor';
            return true;
        }
    }
    ];
    const {input} = await inquirer.prompt(enter);
    return input;
}

module.exports = {
    inquirerMenu,
    mensajero,
    pausa,
    listadoBorrar,
    completarTareas,
    toggleTareas
}