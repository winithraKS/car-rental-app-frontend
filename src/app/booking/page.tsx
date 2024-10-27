import * as React from 'react';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import Form from '@/components/FormControl';
import { useSession } from 'next-auth/react';
import UserDateil from '@/components/UserDetail';
import { useSearchParams } from 'next/navigation';


export default function Booking() {

    return (
        <div className='flex flex-row'>
            <Form/>
            <UserDateil/>
        </div>
    );
}
