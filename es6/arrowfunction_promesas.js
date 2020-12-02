let name='oscar',age=32;

// es5
Obj1= { name:name,age:age};

//  es6 manera de ahorrar el codigo para establecerlos
obj2={name,age};

console.log(obj2);


// arrowfunction nos ayudan a solventar con elementos y un this no vinculable

const names=[

    {name:'pepe',age:21},
    {name:'oscar',age:32}
]
// es5
let listofnames=names.map(function(item)
{
console.log(item.name);
})
//  es6 una forma mas amigable y ahorranos algo de codigo
let listofnames2=names.map(item =>console.log(item.name))


const listofnames3=(name,age) =>
{
// ...
}


const listofnames4 = name =>
{
    // ...
}

// formas de poder asignar de formas mas amigables
const square =num => num*num;



// ---------------------------------------------
// promesas en js para intentar el asincronismo promesas=algo va a pasar

 const hellopromesa= () =>
 {
     return new Promise((resolve,reject) =>
     {
         if(true)
         {
             resolve('hey todo genial');
         }
         else
         {
             reject('upss');
         }
     });
 }

hellopromesa()
.then(Response=>console.log(Response))
.catch(error => console.log(error));