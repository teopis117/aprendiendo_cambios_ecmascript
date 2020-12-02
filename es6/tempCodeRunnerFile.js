// generator
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