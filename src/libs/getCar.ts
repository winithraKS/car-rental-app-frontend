export default async function getCar(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${id}`,{next:{tags:['cars']}})
    
    if(!response.ok) throw new Error("fail")
    return await response.json()
}