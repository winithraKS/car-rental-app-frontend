export default async function getCar(id:string) {
    const response = await fetch(`https://car-rental-app-backend-red.vercel.app/api/v1/cars/${id}`,{next:{tags:['cars']}})
    
    if(!response.ok) throw new Error("fail")
    return await response.json()
}