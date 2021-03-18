


const nombre   = 'Oscar';
const apellido = 'Mayor';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;



export function getSaludo(nombre = 'Oscar') {
    return 'Hola ' + nombre;
}
