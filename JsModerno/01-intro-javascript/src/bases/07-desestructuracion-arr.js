const  personajes = ['goku' , 'vegeta', 'trunks' ];

const [  , vegeta, trunks] = personajes;
console.log(vegeta);
console.log(trunks);


const retornaArreglo = () => {
    return ['ABC' , 123];
}

const [letras, numeros] = retornaArreglo();

//Tarea
//

const State = (valor) => {
    return [valor , () => 
        {console.log('Hola Mundo');
    }]
}

const [nombre, setNombre] = State('Goku');
console.log(nombre);
setNombre();