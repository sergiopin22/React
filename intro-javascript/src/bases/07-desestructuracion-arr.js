

const personajes = [ 'Goku', 'Vegeta', 'Trunks' ];

const [ , , p3] = personajes;

console.log(p3);


const retornaArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras);


//Tarea
//1. el primer valor del arreglo se llamara nombre
//2. el segundo se llamara setnombre.
const useState = ( valor ) => {
    return [ valor, ()=> {console.log(`Hola Mundo ${valor}`);}]
}


const arr = useState('Goku');

const [ nombre, setNombre ] = arr;
 
console.log( nombre );
setNombre();