//Desustructuracion de objetos

const  persona = {
    nombre : 'Oscar',
    edad : 26,
    clave : 'Fuerte'
}

const {nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const Context = ({clave ,nombre , edad, rango = "mayor"}) => {
 //   const {nombre, edad, clave } = usuario;

    console.log(edad, clave, nombre,rango);

    return {
        nombreClave : clave,
        anios : edad,
        latlng :{
            lat:2422,
            lng: -2444
        }
    }
}

const {nombreClave , anios, latlng: {lat, lng}} = Context(persona);


console.log(nombreClave , anios);
console.log(lat, lng);