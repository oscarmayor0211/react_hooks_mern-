import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import { heroes } from "../../data/heroes";

describe('Pruebas con promesas', (done) => {
     test('getHeroeByIdAsync debe de retornar un heroe async ', () => {
         const id = 1;

         getHeroeByIdAsync(id)
                  .then( heroe => {
                      expect( heroe ).toBe(heroes);
                      done();
                  })
     });

     test('debe de obteener un error si el heroe por id no existe', (done) => {
         
        const id = 10;

        getHeroeByIdAsync( id )
                      .catch(error => {
                        expect( error  ).toBe('no se pudo encontrar el heroe'); 
                        done();
 
                    })

     })
     
     
})
