//Funciones
const saludar = function (nombre) {
    return `Hola ${nombre}`
}


const saludar2 = (nombre) => {
    return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;



//console.log( saludar('Goku') );

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());


const getUSer = () => ({
    uid: 'ABC123',
    username: 'El_PAPo'
});


const user = getUSer();
console.log(user);

//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
function getUSuarioActivo ( nombre ){
    return{
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUSuarioActivo( 'Fernando' );
console.log( usuarioActivo );

//Realizando la tarea 
const getUSuarioActivo2 = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo2 = getUSuarioActivo2( 'Camilo' );
console.log( usuarioActivo2 );