import PropTypes from 'prop-types';

// const getSaludo = (nombre) => {
//     nombre = 'Alejandro'
//     return `Hola ${nombre}, te estoy mostrando dentro de una expresion de jsx`;
// }

const newMessage = {
    message: 'Hola Mundo',
    title: 'Alejandro Pinzon'
};
export const FirstApp = ({ title, subTitle }) => {
    // console.log(props);

    return (
        <>
            {/* <h1> { getSaludo() } </h1> */}
            {/* {<code> { JSON.stringify(newMessage) } </code>} */}
            <h1> {title}</h1>
            <p>{subTitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay un titulo',
    subTitle: 'No hay subtitulo',
    name: 'Alejandro Pinzon',
}
// { } <= esto se llama expresiones en jsx, aca podemos mostrar elementos de array, numeros, utilizar booleanos pero no se renderizaran
// pero sobre todo no se puede mostrar objetos y ojo con las funciones asyncronas ya que devuelven una promesa osea objeto y tirara la aplicacion
// y tambien vemos <> </> <= Esto se le conoce como fragmento  - ermite agrupar estos dos elementos HTML sin crear un elemento contenedor adicional en el DOM, lo que resulta en un marcado más limpio y un mejor rendimiento.