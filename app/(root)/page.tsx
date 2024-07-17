
import { Input } from '@/components/input';
import Notes from '@/components/note';
import Sidebar from '@/components/sidebar';
import { wait } from '@/lib/wait';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { Hand, Moon, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

const Home = async() => {


    // const Colors = {
    //     bg
    // }
    
    await wait(4000);

    // const colors = ['#fdf6d2', '#d5ece1', '#fee2d7', '#e6f7f5', '#fbe4e6', '#e3e7fd' ]
    function getRandomColor() {
        const colors = ['#fdf6d2', '#d5ece1', '#fee2d7', '#e6f7f5', '#fbe4e6', '#e3e7fd'];
      
        // Additional entropy from current time in milliseconds
        const entropy = Date.now() % colors.length;
      
        // Multiple rounds of Fisher-Yates (Knuth) shuffle algorithm
        for (let k = 0; k < entropy; k++) {
          for (let i = colors.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [colors[i], colors[j]] = [colors[j], colors[i]];
          }
        }
      
        // Return a random element from the shuffled array
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      }

    const notes = [
        {
            title: 'Note 1',
            content: 'This is the first component of notes app ui built on nextJS/react/ts'+("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, adipisci voluptates cum explicabo voluptatibus magni, veritatis nam soluta aut commodi, temporibus nisi minima possimus fugiat officiis sed tempora. Suscipit, incidunt eaque ipsam harum in quisquam sapiente eos eveniet deserunt numquam!"),
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 2',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
        {
            title: 'Note 3',
            content: 'This is the',
            time: Date.now(),
            bg:getRandomColor()
        },
    ]
//     
    return ( 
        <div className='transition-transform flex md:flex-row h-full w-full'>
            <div className='z-10 bg-[#000]/30 md:bg-[#3c3d43] backdrop-blur-lg transition-all w-full md:block md:col-span-2 pl-0 md:max-w-[150px]  md:h-full fixed overflow-clip h-[70px] items-center top-0'>
                <Sidebar />
            </div>
            <div className='mt-[100px] bg-[#fffdfa] md:col-span-10 ml-[50px] md:ml-[150px] md:pl-[150px] md:mt-6 w-full '>
            <div className="flex items-center py-4 ">
        {/* <Input
          placeholder={`Search `} 
        //   value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            console.log()
            // table.getColumn(searchKey)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        /> */}
        <Search className="mr-2" size={24} />
        <input
        className=
          "flex h-10 w-[80%] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        type='text'
        placeholder='Search Notes'
        
      />
      <div className='text-gray-500 ml-[20px] md:ml-[40px] cursor-pointer hover:font-bold hover:scale-110 hover:text-[#333] mr-4'>
      <Moon />

      </div>
            </div>
                <div className='flex items-center mt-5 '>
                    <h1 className='text-3xl flex'>
                        <p>Hello, __</p><p className='font-bold'>{`User`}</p><p>👋</p>
                    </h1>
                </div>
                    <p className='mt-5'>All you notes are here, in one place!</p>

                <div className='transition-all flex flex-col sm:grid w-[90%] h-auto  sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-evenly'>
                   { notes.map((item, i) => (
                        <Notes 
                        key={i}
                        title={item.title}
                        content={item.content}
                        time={item.time}
                        bgColor={item.bg}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Home;