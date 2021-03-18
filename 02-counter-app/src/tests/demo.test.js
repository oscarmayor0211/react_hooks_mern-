describe('Pruebas en el archivo demo.test.js', () => {

    test('debe de ser iguales los string ', () => {
 
        //inicializacion
    
        const mensaje = 'Hola mundo ';
    
        //estimulo
    
        const mensaje2 = `Hola mundo `;
    
        //Observar el comportamiento
         
        expect( mensaje ).toBe( mensaje2);
    })
    
})
