'use client';

import { useEffect, useRef, useState } from 'react';

interface NoteProps {
  title: string;
  content: string;
  time: number;
  bgColor: string;
}

const Notes = ({ title, content, time, bgColor }: NoteProps) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0');

  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = contentRef;
    if (current) {
      setIsOverflowing(current.scrollHeight > current.clientHeight);
    }
  }, [content]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="min-w-[280px] sm:min-w-[200px] max-w-[320px] h-[280px] col-span-1 m-3 p-3 rounded-xl shadow-md flex flex-col justify-between"
      style={{ backgroundColor: bgColor }}
    >
      {/* Title */}
      {/* <div>{title}</div> */}
      
      {/* Content */}
      <div
        ref={contentRef}
        className={`mt-4 text-gray-700 overflow-hidden p-2 transition-all h-[65%] `}
      >
        {content}
        {/* {isOverflowing && (
          <button onClick={toggleReadMore} className="text-blue-500 mt-2">
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )} */}
      </div>
      
      {/* Date */}
      <div className="text-[14px] text-gray-500 font-sans">
        {`${year}-${month}-${day}`}
      </div>
    </div>
  );
};

export default Notes;
