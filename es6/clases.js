// clases nos sirven para manejar de mejor manera en js

class calculator
{
    // asignar un constructor 

    constructor()
    {
        this.valuea=0;
        this.valueb=0;
    }

    sumar(valuea,valueb)
    {
        // valor que tenemos=valor que recibimos
        this.valuea=valuea;
        this.valueb=valueb;
        return this.valuea+this.valueb;
    }
}

// crear objeto

const calculadora=new calculator();

console.log(calculadora.sumar(3,3));


// import  y export

import{hello} from './modulos';

hello();

// ------------------------------------------

// generator nos sirven para poder guardar valores en estos momentos
function* helloworld()
{
if(true)
{
    yield 'hello, ';
}

if(true)
{
    yield 'world';
}
};


const generetorhello=helloworld();
console.log(generetorhello.next().value);
console.log(generetorhello.next().value);
console.log(generetorhello.next().value);