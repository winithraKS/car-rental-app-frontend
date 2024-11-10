export default async function getUserProfile(token:string) {
    const response = await fetch(`${process.env.BACKEND_URL}:443/api/v1/auth/me`,{
        method:"GET",
        headers:{
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok) throw new Error("cannot get user profile")
    return await response.json()
}