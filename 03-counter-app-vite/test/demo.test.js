test('Esta Prueba no debe de fallar', () => {
    if (0 === 0){
        throw new Error('no puede dividir entre cero');
    }
})