'use client';

import { Pen, Save, Trash2 } from 'lucide-react';
import { useState } from 'react';

/**
 * Represents the props for the Note component.
 */
interface NoteProps {
  /**
   * The content of the note.
   */
  content: string;
  
  /**
   * The time when the note was created.
   */
  time: Date;
  
  /**
   * The background color of the note.
   */
  bgColor: string;
  
  /**
   * A promise that resolves when the note is deleted.
   */
  onDelete: () => Promise<void>;
  onEdit: (newText:string) => Promise<void>;
}

const Notes = ({ content, time, bgColor, onDelete }: NoteProps) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0');

  const [noteText, setNoteText] = useState(content);
  const [isEditing, setIsEditing] = useState(false);



  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 250) {
      setNoteText(e.target.value);

    }




  };

  return (
    <div
      className="w-[280px] sm:w-auto sm:min-w-[200px] sm:max-w-[320px] h-[280px] col-span-1 m-3 p-3 rounded-xl shadow-md flex flex-col justify-between items-center hover:translate-y-[-4px] transition-all"
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
            {isEditing ?
            <div className='hover:text-gray-700 hover:scale-110 cursor-pointer '
            onClick={onDelete}
            >
              <Save size={20} />
            </div>
            :
            <div className='hover:text-gray-700 hover:scale-110 cursor-pointer '
            onClick={onDelete}
            >
              <Trash2 size={20} />
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default Notes;