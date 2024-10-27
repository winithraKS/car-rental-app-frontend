import Card from "./Card"
import Link from "next/link"

interface HospitalItem {
    _id:string,
    name:string,
    address:string,
    district:string,
    province:string,
    postalcode:string,
    tel:string,
    picture:string,
    __v:number,
    id:string
}

interface HospitalJson {
    success:boolean,
    count:number,
    pagination:Object,
    data:HospitalItem[]
}

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:Promise<HospitalJson>}) {
    const hjson = await hospitalsJson

    return (
        <>
        <p className="text-center mt-10">Explore 3 hospital in our service</p>
        <div className="flex flex-row flex-wrap justify-center">
            {
                hjson.data.map((h:HospitalItem)=>(
                    <Link href={`/hospital/${h.id}`}>
                        <Card hospitalName={h.name} imgSrc={h.picture}/>
                    </Link>
                ))
            }
        </div>
        </>
    )
}