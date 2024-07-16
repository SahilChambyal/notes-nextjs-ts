'use client';

import React from 'react';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className="mt-[50px] w-[300px] sm:w-[400px] md:w-[600px]">
      <div className="h-[5px] w-full rounded-[20px] bg-gray-200">
        <div
          className="h-full rounded-[20px]"
          style={{
            width: `${progress}%`,
            backgroundColor: color || '#333',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
