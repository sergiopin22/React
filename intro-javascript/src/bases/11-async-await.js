const getImagen = async() => {
    try {
        const apiKey = 'Rmcb7ohWJVWd5v8dZZGYzS59wuFsXpcB';
        
        // Hacemos la petición a la API
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        
        // Convertimos la respuesta a JSON
        const { data } = await resp.json();
        
        // La estructura correcta es data.data.images.original.url
        const url = data.images.original.url;
        
        // Creamos la imagen y la agregamos al documento
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
        console.log('Imagen agregada correctamente');
    } catch (error) {
        // Si hay algún error, lo mostramos
        console.error('Error:', error);
    }
}

getImagen();





// peticion.then( (resp) => resp.json() )
// .then( ({data}) => {
//     const { url } = data.images.original; 

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append( img )
// } )
// .catch( console.warn );