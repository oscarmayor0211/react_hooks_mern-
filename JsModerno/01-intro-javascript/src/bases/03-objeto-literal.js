const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion :{
        ciudad : 'new york',
        zip : 12332222,
        lat :  687668,
        lng : 786786687
    }
};

console.log(persona);

const persona2 = {...persona};

console.log(persona2);