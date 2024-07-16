import { Pen } from 'lucide-react';

const NoteLogo = () => {
    return ( 
        <div className='flex text-center justify-center text-[#333] font-bold text-3xl pb-10'>
                <Pen size={32} className='mr-2'/>
                Get Notes
            </div>
     );
}
 
export default NoteLogo;