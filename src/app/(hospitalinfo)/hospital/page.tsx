import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function HospitalInfo() {
    const hospitals = getHospitals()

    return(
        <main>
            <Suspense fallback={<p className="p-20 text-center">Loading...<LinearProgress/></p>}>
                <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
        </main>
    )
}