import { UserButton } from '@clerk/nextjs';
import { Home, PlusIcon, Tally1 } from 'lucide-react';

const MainNav = () => {
    return ( 
        <div className={"flex flex-row md:flex-col md:h-full items-center justify-center md:w-full"}>
        
        <div className='cursor-pointer text-sm flex justify-center items-center gap-4 font-medium px-0 py-3.5  border rounded-[12px] md:w-full border-transparent text-muted-foreground md:flex-col md:h-full'>
            <div className=' md:flex text-white md:w-full md:justify-start items-center'>
                {/* <Line */}
                <div className='hidden md:block'>
                <Tally1 size={36}/>

                </div>
                <div className='md:ml-[25px]'>

                <Home />
                </div>
            </div>
            <div className='p-4 px-3 text-gray-500 hover:text-white'>
            <PlusIcon size={32} />
            </div>
        </div>
        
            <div className=' text-sm flex items-center justify-center gap-4 font-medium px-3 py-3.5  border rounded-[12px] md:w-[120px] border-transparent text-muted-foreground  md:h-[30%]'>
                <div className='mt-auto md:mb-4 justify-center items-center'>

              <UserButton afterSignOutUrl="/" />
                </div>
                </div>
            </div>
     );
}
 
export default MainNav;