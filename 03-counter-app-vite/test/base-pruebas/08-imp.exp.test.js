import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';



describe('Pruebas en 08-imp-exp', () => {

    // test('getHeroeById debe de retornar un heroe por ID', () => {

    //     const id = 1;
    //     const hero = getHeroeById(id);
    //     console.log(hero);

    //     expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    // })

    // test('getHeroeById debe de retornar undefined si no existe', () => {

    //     const id = 0;
    //     const hero = getHeroeById(id);
    //     console.log(hero);

    //     expect(hero).toBeFalsy()

    // })

    //Tarea
    //getHeroesByOwner
    //Debe de retornar un arreglo con los heroes de DC
    //Lenght == 3
    //toEqual al arreglo filtrado

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        expect( heroes.length ).toBe( 3 );
        //opcion 1
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        //opcion 2 mas flexible
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de MARVEL', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    });

    //debe de retornar un arreglo con los heroes de Marvell
    // length === 2

})