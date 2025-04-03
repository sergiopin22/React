import { getUser, getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objecto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        
        expect( testUser ).toEqual( user )

    })

    test('getUsuarioActivo debe de retornar un objeto', () => { 

        const name = 'Alejandro';
        const user = getUsuarioActivo(name);
        console.log(user);

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: name
        } )

     });


})