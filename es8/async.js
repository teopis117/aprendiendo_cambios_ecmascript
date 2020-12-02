

const helloworld= () =>
{
    return new Promise((resolve,reject)=>
    
    {
        if(true)
        {
            setTimeout(()=> resolve('hola mundo'),3000);

        }

        else
        {
            reject( new Error('hay un error'));
        }

    }
    
    )
}


const helloasync = async() =>
{
    const hello=await helloworld();
    console.log(hello);
}

helloasync();