//Funciones en JS

const saludar = function  (nombre){
    return `hola , ${ nombre }`
}

const saludar2 = (nombre ) => {
    return `hola , ${ nombre }`
}

const saludar3 = (nombre ) => `hola , ${ nombre }`;

console.log( saludar( 'Goku '));

console.log( saludar2( 'Vegeta '));

console.log( saludar3( 'Gotem '));


const getUser = () => ({
    uid : 'ABC2',
    username : 'Oscar.02'
})

console.log(getUser());

//TAREA
//. trasnformar a una funcion de flecha
//2 tiene que retornar un objeto implicito
function getUsuarioActivo(nombre){
return {
    uid: 'ABC64442',
    username : nombre
}
}

const usuarioActivo = getUsuarioActivo('Oscar');
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    uid : 'ABC466',
    username : nombre,
});

console.log(getUsuarioActivo2('Mayor'));