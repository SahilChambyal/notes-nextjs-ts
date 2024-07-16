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
          return p;
        }
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
        <ProgressBar progress={progress} color='#333' />
      </div>
    </div>
  );
}

export default Loading;
