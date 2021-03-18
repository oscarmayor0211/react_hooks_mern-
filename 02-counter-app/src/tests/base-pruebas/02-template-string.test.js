import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('rueba en 02-template-string.test.js', () =>{

    test('getSaludo debe de retornar hola oscar ', () => {
        
        const nombre ='Oscar';
        const saludo = getSaludo(nombre);

       expect( saludo ).toBe('Hola ' + nombre)
    });


    test('getSaludo debe de retornar hola oscar si no hay argumento en el nombre ', () => {
        
        const saludo = getSaludo();

       expect( saludo ).toBe('Hola Oscar' )
    })
    
})