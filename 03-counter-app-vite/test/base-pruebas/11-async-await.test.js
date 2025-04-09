import { getImagen } from "../../src/base-pruebas/base-pruebas/11-async-await"

describe('Preubas en 11-async-await.js', () => { 

    test('getImagen debe de retornar un error si no tenemos API KEY ', async() => { 

        const url  = await getImagen();

        // expect( typeof url ).toBe('string');

        expect( resp ).toBe('No se pudo encontrar la imagen');

     })

 })