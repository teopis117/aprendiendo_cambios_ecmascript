// nos va a pertmitir devolver los valores de una matriz


const data =
{
    frontend:'oscar',
    backend:'isabel',
    desing:'ana'
}

const entries = Object.entries(data);
console.log(entries);
// ver el numero de elementos
console.log(entries.length);


const data2 =
{
    frontend:'oscar',
    backend:'isabel',
    desing:'ana'
}

const values=Object.values(data);
console.log(values);