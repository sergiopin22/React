const apiKey = 'Rmcb7ohWJVWd5v8dZZGYzS59wuFsXpcB';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then( (resp) => resp.json() )
.then( ({data}) => {
    const { url } = data.images.original; 

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img )
    console.log(' mensaje de consola modificado, desde la rama main ');
} )
.catch( console.warn );