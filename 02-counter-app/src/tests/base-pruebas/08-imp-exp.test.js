import { getHeroeById,getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import { heroes } from "../../data/heroes";

describe('Pruebas de funciones de heroes', ()=> {
    test('Debe de retornar un heroe por id ', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( (heroe) => heroe.id === id )

        expect( heroe ).toEqual( heroeData );
    });

    test('Debe de retornar un undefined por si el id no existe ', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );


        expect( heroe ).toEqual( undefined );
    });

    test('debe de retornar un arreglo con los heroes DC', () => {
      
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeDC = heroes.filter( (heroe) => heroe.owner === owner );

        expect( heroe ).toEqual( heroeDC );
    })
    
    test('debe de retornar un arreglo con los heroes Marvel', () => {
      
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect( heroe.length ).toBe( 2 );
    })
    
});