const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
 
    getNombre: function(){
        return `${this.nombre} ${this.apellido} --> ${this.poder}`;
    }
};

const {nombre, apellido, poder, edad=22} = deadpool;

console.log(nombre);
console.log(apellido);
console.log(poder);
console.log(edad);
console.log(deadpool.getNombre());

const heroes = ['Deadpool', 'Superman', 'Batman'];

const h1 = heroes[0];

const [, , hi3 ] = heroes;

console.log(h1);
console.log(hi3);

