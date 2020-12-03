const obj={
    name:'jose',
    edad:12,
    pais:'mx'
};

// con all guardaremos los vales que estan en las demas variables excepto en name que le sera otra variable
let {name,...all}=obj;

console.log(name,all);