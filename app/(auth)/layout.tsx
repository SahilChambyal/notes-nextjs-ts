import NoteLogo from '@/components/noteLogo';
import {Pen} from 'lucide-react'
import Image from 'next/image';


const AuthLayout = ({children}:{children: React.ReactNode}) => {
    return ( <div className="flex items-center justify-center gap-12 h-full">

        <div className='hidden sm:block'>
            <Image src={'/signup.png'} 
                alt='Sign in image'
                width={500}
                height={500}
            />
        </div>
        
        <div className='pt-10'>
            <NoteLogo />
        {children}
        </div>
    </div> );
}
 
export default AuthLayout;