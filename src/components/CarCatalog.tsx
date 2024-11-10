import Link from "next/link"
import ProductCard from "./productCard"
import { CarItem,CarJson } from "../../interface"

export default async function CarCatalog({carPromise}:{carPromise:Promise<CarJson>}) {
    const carJson = await carPromise

    return(
        <>
        Explore {carJson.count} models in our catalog
        <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap",justifyContent:"space-around",margin:"15px",padding:"15px"}}>
            {
                carJson.data.map((carItem:CarItem) => (
                    <Link href={`/car/${carItem._id}`} key={`s${carItem._id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 md:p-4 lg:p-8">
                        <ProductCard carName={carItem.model} imgSrc={carItem.picture}/>
                    </Link>
                ))
            } 
        </div>
        </>
    )
}