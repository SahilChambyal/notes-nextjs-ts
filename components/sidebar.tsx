import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import NoteLogo from '@/components/noteLogo'
import { LogOut, PenLine } from 'lucide-react';
import MainNav from './main-nav';

interface SidebarProps {

    logout: () => void;
  
  }
  
  

const Sidebar = ({logout}:SidebarProps) => {
    

    // const {userId} = auth();

    // if(!userId){
    //   redirect("/sign-in");
    // }
  

    return ( 
        <div className="flex flex-row md:flex-col gap-8 justify-center md:h-full w-full h-full items-center px-1 py-2">
            
            <div className='flex md:flex-col items-center justify-center md:flex gap-4 md:mt-4 text-[#fff]'>
                <PenLine />
            </div>

            {/* routes */}
            <div className='md:ml-auto md:mt-[50px] md:h-full md:w-full'>
            <MainNav />
            </div>
            {/* userprofile */}
            <div className='text-white cursor-pointer md:pb-4'
            onClick={logout}
            >

            <LogOut />
            </div>
            

        </div>
     );
}
 
export default Sidebar;