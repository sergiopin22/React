//Desestructuracion
// o en documentacion se vera como asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: "Ironman",
};


//console.log( nombre );
//console.log( edad );
//console.log( clave );

const useContext = ( {clave, nombre, edad, rango = 'Capitan'} ) => {
    
   return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 2332.2332,
            lng: 223.323
        }
   }

}

const avenger = useContext( persona );
const {nombreClave, anios, latlng: {lat, lng}} = avenger;
console.log(nombreClave, anios);
console.log(lat, lng);