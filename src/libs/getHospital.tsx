export default async function getHospital(id:string) {
    const response = await fetch(`https://vaccine-app-backend-blond.vercel.app/api/v1/hospitals/${id}`)

    if(!response.ok) throw new Error("fail")
    return await response.json()
}