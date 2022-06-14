function sumar(a,b=0) {
    return a+b;
};

console.log( sumar(3) );

const sumar1 = (a,b=0)=> a+b;


console.log( sumar1(3,6) );