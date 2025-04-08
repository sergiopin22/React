import { getHeroeById } from '../../src/base-pruebas/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

     })

     test('getHeroeById debe de retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toBeFalsy()

     })

     //Tarea
     //getHeroesByOwner
     //Debe de retornar un arreglo con los heroes de DC
     //Lenght == 3
     //toEqual al arreglo filtrado

     test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 
        
        const owner = 'DC';

      })

     //debe de retornar un arreglo con los heroes de Marvell
     // length === 2
    
 })