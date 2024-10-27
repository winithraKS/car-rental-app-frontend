export default async function getHospitals(){
    await new Promise((resolve)=>setTimeout(resolve,1000))

    const response = await fetch('https://vaccine-app-backend-blond.vercel.app/api/v1/hospitals')
    if(!response.ok) throw Error('failed')
    return await response.json()
}