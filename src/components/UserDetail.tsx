import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";

export default async function UserDateil() {
    const session = await getServerSession(authOptions)

    if(!session) {
        return (
            <div className='flex flex-col m-5'>
                <p className='m-3'>try sign-in with</p>
                <table>
                    <tbody>
                        <tr><td className='min-w-28'>email :</td><td>test.user@hotmail.com</td></tr>
                        <tr><td>password :</td><td>testUser</td></tr>
                    </tbody>
                </table>
                <p className='m-3 mt-10'>or</p>
                <table>
                    <tbody>
                        <tr><td className='min-w-32'>email :</td><td>alice@vaccinebooking.com</td></tr>
                        <tr><td>password :</td><td>g00dH3@!th</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        const profile = await getUserProfile(session.user.token)
        const createdAt = new Date(profile.data.createdAt)

    return (
        <table className='flex flex-col m-5'>
            <tbody>
                <tr>
                    <td className='min-w-36 font-semibold'>Name</td>
                    <td>{profile.data.name}</td>
                </tr>
                <tr><td className='font-semibold'>Email</td><td>{profile.data.email}</td></tr>
                <tr><td className='font-semibold'>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td className='font-semibold'>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody>
        </table>
    );
    }
}