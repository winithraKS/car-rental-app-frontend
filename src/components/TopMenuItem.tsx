import Link from "next/link";

export default function TopMenuItem({title,pageRef} : {title:string, pageRef:string}) {
    return(
        <Link href={pageRef} className="text-gray-500 text-center p-3 w-32 ">
            {title}
        </Link>
    );
}