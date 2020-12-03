let arreglo=[1,2,3,[3,4,5,[1,2,3,4]]];

// console.log(arreglo.flat(3));
let array= [1,2,3,4,5];

console.log(array.flatMap(value => [value,value*2]));