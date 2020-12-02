//crear una funcion para ver como se hacia antes

function newfunction(name,age,country)
{

var name=name || 'jose eduardo diaz';
var age=age   || '21';
var country=country || 'mx';

console.log(name,age,country);

}

// nueva forma de hacerlo
 function newfunction2(name='oscar',age=32,country="mx")
 {
     console.log(name,age,country);
 }

// me dara los valores por defecto
 newfunction2();
 
// me dara los valores que agregamos
newfunction2('pepe','21','usa');

// ---------------------------------------

let hello='hola';
let world='mundo';
// primera forma
let epicphrase=hello+' '+world;

console.log(epicphrase);
// template literals
let epicphrase2=`${hello} ${world}`;

// ---------------------------------------

// multilinea 

let lorem='hola mundo como estamos el dia de hoy y sera epico\n'+'esto es otra frase epica que necesitamos.';

console.log(lorem);

// multinea con ems6

let lorem2=`otra frase bien genial
pero ahora con ems6
`;
console.log(lorem2);

// ---------------------------------------