'use client'

import React, { useEffect, useState } from 'react';
import ProgressBar from '@/components/progressBar';
import { PenLine } from 'lucide-react';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p < 100) {
          return p + 1;
        } else {
          clearInterval(interval);
          p=0
          return 100;
        }
        // if( p> 100){

        // }
      });
      console.log(progress)
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-[300px]'>
      <div className='text-2xl font-bold text-[#333] flex'>
        <PenLine />
        Get Notes
      </div>
      <div>
      <div className="mt-[50px] w-[300px] sm:w-[400px] md:w-[600px]">
      <div className="h-[5px] w-full rounded-[20px] bg-gray-200">
        <div
          className="h-full rounded-[20px]"
          style={{
            width: `${progress}%`,
            backgroundColor: '#333',
          }}
        ></div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Loading;
