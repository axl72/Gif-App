export const getGifs = async(category) => {
        const url =  `https://api.giphy.com/v1/gifs/search?api_key=KOD5y8fpYDcKHi9M7Kl50jOQIEsYpUdG&q=${category}&limit=5`
        const res = await fetch(url);
        const {data} = await res.json();
        const gifts = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))

        return gifts;
    }