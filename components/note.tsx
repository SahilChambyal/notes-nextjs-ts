'use client';

import { Pen, Trash2 } from 'lucide-react';
import { useState } from 'react';

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

  const [noteText, setNoteText] = useState(content);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 250) {
      setNoteText(e.target.value);
    }
  };

  return (
    <div
      className="w-[280px] sm:w-auto sm:min-w-[200px] sm:max-w-[320px] h-[280px] col-span-1 m-3 p-3 rounded-xl shadow-md flex flex-col justify-between items-center"
      style={{ backgroundColor: bgColor }}
    >
      {/* Title */}
      {/* <div>{title}</div> */}
      
      {/* Content */}
      <div className='mt-4 text-gray-700 p-2 transition-all h-[75%] w-[95%] cursor-default'>
        <textarea 
          title='content'
          value={noteText}
          onChange={handleTextChange}
          maxLength={250}
          className='w-full h-full p-2 bg-transparent border-none outline-none overflow-y-clip resize-none '
        />
        <div className='text-gray-500 text-sm w-full justify-end flex items-end'>
          {noteText.length} / 250
        </div>
      </div>
      
      {/* Date */}
      <div className="text-[14px] text-gray-500 font-sans flex justify-between w-full">
        {`${year}-${month}-${day}`}
        <div className='flex text-gray-500 gap-3 '>
          {/* <div className='hover:text-gray-700 hover:scale-110 cursor-pointer '>
            <Pen size={20} />
          </div> */}
          <div className='hover:text-gray-700 hover:scale-110 cursor-pointer '>
            <Trash2 size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
