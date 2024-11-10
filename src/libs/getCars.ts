export default async function getCars() {
    await new Promise((resolve)=>setTimeout(resolve,1000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars`)
    if(!response.ok) throw new Error("failed")
    return await response.json()
}