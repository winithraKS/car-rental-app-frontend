import getCar from "@/libs/getCar"
import { ClassNames } from "@emotion/react"
import { Button } from "@mui/material"
import Image from "next/image"

export default async function CarDetailPage({params} : {params:{cid:string}}) {
    const carDetail = await getCar(params.cid)

    const mockCarRepo = new Map()
    mockCarRepo.set('001',{name:'Honda Civic',image:'/img/civic.jpg'})
    mockCarRepo.set('002',{name:'Honda Accord',image:'/img/accord.jpeg'})
    mockCarRepo.set('003',{name:'Toyota Fortuner',image:'/img/fortuner.png'})
    mockCarRepo.set('004',{name:'Tesla Model 3',image:'/img/tesla.png'})
    
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-bold">Car ID {params.cid}</h1>
            <div className="flex flex-row my-5">
                <Image src={carDetail.data.picture} alt='carImg' width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
                <div className="w-3/5 m-4 flex flex-col text-left">
                    <div className="text-md font-medium mx-5">{carDetail.data.model}</div>
                    <div className="text-md mx-5">Doors : {carDetail.data.doors}</div>
                    <div className="text-md mx-5">Seats : {carDetail.data.seats}</div>
                    <div className="text-md mx-5">Large Bags : {carDetail.data.largebags}</div>
                    <div className="text-md mx-5">Small Bags : {carDetail.data.smallbags}</div>
                    <div className="text-md mx-5">Daily Rental Rate : {carDetail.data.dayRate} (insurance include)</div>
                    <div className="text-md mx-5">Seats : {carDetail.data.seats}</div>
                    <div className="text-md mx-5">Automatic : {carDetail.data.automatic? 'true':'false'}</div>
                    <Button variant="contained" href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`} className="w-2/5 min-w-60">make reservation</Button>
                </div>
            </div>
        </main>
    )
}

export async function generateStsticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}