import getHospital from "@/libs/getHospital"
import { Button } from "@mui/material"
import Image from "next/image"

export default async function Hospital({params} : {params : {hid:string}}) {
    const hDetail = await getHospital(params.hid)
    
    return(
        <main className="flex flex-row">
            <Image src={hDetail.data.picture} alt='hospital image' width={0} height={0} sizes="100vw" className="w-2/5 m-14 rounded-3xl shadow-xl"/>
            <div className="flex flex-col text-left text-xl space-y-6">
                <div className="text-left mt-16 px-3 font-semibold text-2xl">{hDetail.data.name}</div>
                <div><p className="font-semibold inline">address : </p>{hDetail.data.address}</div>
                <div><p className="font-semibold inline">district : </p>{hDetail.data.district}</div>
                <div><p className="font-semibold inline">postalcode : </p>{hDetail.data.postalcode}</div>
                <div><p className="font-semibold inline">tel : </p>{hDetail.data.tel}</div>
                <Button variant="contained" className='bg-sky-600'href={`/booking?&hospital=${hDetail.data.name}`}>booking</Button>
            </div>
        </main>
    )
}