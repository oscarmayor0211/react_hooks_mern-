const apiKey ='fvMMZsGhyHqpM9QhWwL5eQwqqpfyPKaq';

const http = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

http.then(res => res.json())
    .then(({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch(console.warn)