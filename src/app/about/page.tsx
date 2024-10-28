import UserDateil from "@/components/UserDetail";
import UploadButton from "@/components/UploadButton";

export default function About() {

    return(
        <main>
            <div className="m-5 text-center font-bold text-3xl">About Us</div>
            <div className="rounded-lg bg-slate-200 px-5 mx-5 py-2 my-2">
                    <UserDateil/>
            </div>
            <div className='flex flex-col m-5 p-3 bg-violet-100 rounded-lg'>
                <p className='m-3 font-semibold'>try sign-in with</p>
                <table>
                    <tbody>
                        <tr>
                            <td className='w-56 font-semibold px-10'>email :</td>
                            <td>info@primerental.com</td>
                            <td>customer@gmail.com</td>
                            <td>test.user2@hotmail.com</td>
                        </tr>
                        <tr>
                            <td className="font-semibold px-10 w-52">password :</td>
                            <td>$0ftw@reD3v</td>
                            <td>th@1!@nd</td>
                            <td>testUser2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="mx-10 mt-10">you can upload image, text file, and gif</p>
            <UploadButton/>
        </main>
    );
}