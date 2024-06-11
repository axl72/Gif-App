import { GiftItem } from "./GiftItem"
import { useFecthGifs } from "../hooks/useFecthGifs"

export const GiftGrid = ({category}) => {
    
    const {images, isLoading} = useFecthGifs(category);

    return(
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando</h2> )
            }
            <div className="card-grid">
                {
                    images.map((image) => {
                        return <GiftItem key={image.id} {...image}/>
                    })
                }
            </div>
        </>
    )
}