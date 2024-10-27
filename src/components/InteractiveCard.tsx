'use client'

export default function InteractiveCard({children} : {children:React.ReactNode}) {
    function Hover(e:React.BaseSyntheticEvent) {
        if(e.type=='mouseover') {
            e.currentTarget.classList.remove('shadow-lg')
            e.currentTarget.classList.remove('bg-white')
            e.currentTarget.classList.add('shadow-2xl')
            e.currentTarget.classList.add('bg-neutral-200')
        }
        else {
            e.currentTarget.classList.add('shadow-lg')
            e.currentTarget.classList.add('bg-white')
            e.currentTarget.classList.remove('shadow-2xl')
            e.currentTarget.classList.remove('bg-neutral-200')
        }
    }

    return(
        <div className='w-[200px] h-[250px] rounded-lg bg-white shadow-lg m-8 border border-solid border-black' onMouseOver={(e)=>Hover(e)} onMouseOut={(e)=>Hover(e)}>
            {children}
        </div>
    );
}