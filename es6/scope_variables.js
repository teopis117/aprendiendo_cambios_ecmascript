

// objetos
let person={

    'name':'oscar',
    'age':32,
    'pais':'mx',
}

console.log(person.age,person.pais);

// podemos accesar de esta manera utilizando el objeto
let {name,age,pais}=person;

console.log(name,age);

// ---------------------------------------
// arreglos

let team1=['oscar','pepe','julian'];
let team2=['valeria','jessica','camila'];

// como podemos unir dos arreglos
// de esta manera nos ayudamos para poder hacer mas facil la concatenacion de arreglos

let education=['david',...team1,...team2];

console.log(education);


// ---------------------------------------
// var solo esta disponible en el scope global
{

   var globalvar='global var'
}
// let esta disponible solo en el bloque
{

   let globallet='global let'
   console.log(globallet);

}


console.log(globalvar);

// var=disponible globalmente let=disponible en el bloque

// --------------------------------------
// con const no podemos cambiar el valor previamente asignado
const a='b';
