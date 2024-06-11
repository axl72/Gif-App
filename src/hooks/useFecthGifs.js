import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFecthGifs = (category) => {
    const [images, setImagess] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImagess(newImages);
        setIsLoading(false);
    }


    useEffect(() => {
        getImages();
    }, [])
    

    return {
        images,
        isLoading
    }
        
}