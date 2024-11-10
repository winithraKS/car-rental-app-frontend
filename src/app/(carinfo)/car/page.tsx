import CarCatalog from "@/components/CarCatalog";
import CarPanel from "@/components/CarPanel";
import getCars from "@/libs/getCars";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Car() {
    const cars = await getCars()

    return(
        <main className='text-center p-5 bg-white'>
            <h1 className='text-x font-medium'>Select yout partner, Yeah</h1>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
                <CarCatalog carPromise={cars}/>
            </Suspense>

            <hr className="my-10"/>
            <h1 className="text-md">client-side Car Panel</h1>
            <CarPanel/>
        </main>
    );
}