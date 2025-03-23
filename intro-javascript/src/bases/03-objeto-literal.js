const persona = {

    nombre: 'Tony',
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 84094,
        lat: 14.3232,
        lng: 32.23232,
    }
};

//console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona2 );
console.log( persona );
