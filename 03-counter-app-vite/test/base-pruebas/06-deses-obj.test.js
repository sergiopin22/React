import { usContext } from "../../src/base-pruebas/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe retornar un objeto con la propiedad nombreClave igual al valor de clave', () => {

        const personaFicticia = {
            clave: 'ABC123',
            nombre: 'Pedro',
            edad: 28,
            rango: 'Teniente'
        };

        // 2. Llamar a la función
        const resultado = usContext(personaFicticia);

        // 3. Verificar el resultado
        // Aquí debes escribir tu código para comprobar que resultado.nombreClave === personaFicticia.clave
        expect(resultado.nombreClave).toBe(personaFicticia.clave);

    })

    test('usContext debe retornar un objeto con las coordenadas lat y lng correctas', () => {
        const personaFicticia = {
            clave: 'QWE456',
            nombre: 'Sofia',
            edad: 42,
            rango: 'Mayor'
        };

        // Llamar a la función
        const resultado = usContext(personaFicticia);

        // Verificar el resultado
        // Aquí debes escribir tu código para comprobar que el objeto latlng contiene las coordenadas correctas
        // Recuerda que el objeto latlng según tu código tiene valores fijos: lat: 14.1232, lng: -12.3232

        expect(resultado.latlng).toEqual({
            lat: 14.1232,
            lng: -12.3232
        })

    });

})