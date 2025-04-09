export const getImagen = async() => {

    try {

        const apiKey = 'Rmcb7ohWJVWd5v8dZZGYzS59wuFsXpcB';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la imagen';
    }
    
    
    
}

 getImagen();



