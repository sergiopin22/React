import { getHeroeById, getHeroeByOwner } from "./src/bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         const heroe = getHeroeById(5);
//         resolve(heroe);
//         //reject( 'No se pudo encontrar el heroe' );
//     }, 2000)

// });

// promesa.then((heroe) => {
//     console.log('Theroe', heroe);
// })
// .catch(err => console.warn( err ));


const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            // console.log(heroe);
            if( heroe ){
                resolve(heroe);
            } else{
                reject('No se pudo encontrar el heroe' );
            }
        }, 2000)

    });

}

getHeroeByIdAsync(1)
.then( console.log )
.catch( console.warn )