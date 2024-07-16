'use client'

import React, { useEffect, useState } from 'react';
import ProgressBar from '@/components/progressBar';
import {  PenLine } from 'lucide-react';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 20);

    return () => {
      clearInterval(time);
    }
  }, [progress])

  // useEffect(() => {
  //   const timeout = setTimeout(() => console.log('loading'), 2000);
  //   // Cleanup timeout on component unmount
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-[300px]'>
      <div className='text-2xl font-bold text-[#333] flex '>
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
