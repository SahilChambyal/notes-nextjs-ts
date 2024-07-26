"use client"
// src/components/MainPage.js
import React, { useState, useEffect } from "react";
import { Hand, Moon, Search } from 'lucide-react';
import axios from "axios";
import Notes from '@/components/note';
import Sidebar from '@/components/sidebar';
import {useRouter} from 'next/navigation';
// import "./MainPage.css";

const MainPage = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const username = localStorage.getItem("username") || "User";
  const MAX_CHARS = 250;

  const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged') === 'true');

  if(!isLogged){
      window.location.href = '/login'
      console.log('isLogged: '+ isLogged)
    }
//   const [logged, setLogged] = useState(false)

  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('isLogged');
    // localStorage.setItem('isLogged','false')
    setIsLogged(false)
    window.location.href = '/login';
  };

  
  useEffect(() => {
    // addNote()
    fetchNotes();

      const savedTheme = localStorage.getItem("theme") || "light";
      setDarkMode(savedTheme === "dark");
  }, []);

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://notes-backend-express.onrender.com/api/notes", {
      // const response = await axios.get("http://localhost:5000/api/notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const getRandomColor = () => {
    const colors = [
        '#fdf6d2', '#d5ece1', '#fee2d7', '#e6f7f5', '#fbe4e6', '#e3e7fd'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addNote = async () => {
    if (newNote.trim() && newNote.length <= MAX_CHARS) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://notes-backend-express.onrender.com/api/notes",
          // "http://localhost:5000/api/notes",
          {
            text: newNote,
            color: getRandomColor(),
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setNotes([...notes, response.data]);
        // setNotes([response.data, ...notes]);
        setNewNote("");
      } catch (error) {
        window.location.href = '/login';
        console.error("Error adding note:", error);
      }
    //   finally{
    //     // location.reload()
    //   }
    }
  };

  const deleteNote = async (id:any) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://notes-backend-express.onrender.com/api/notes/${id}`, {
      // await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const editNote = async (id, newText) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://notes-backend-express.onrender.com/api/notes/${id}`,
        // `http://localhost:5000/api/notes/${id}`,
        { text: newText },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNotes(notes.map((note) => (note._id === id ? response.data : note)));
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  const sortedNotes = [...notes].sort((a, b) => {
    if (sortBy === "date") {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    } else {
      return a.text.localeCompare(b.text);
    }
  });
  

  return (
    <div className='transition-transform flex md:flex-row h-full w-full'>
            <div className='z-10 bg-[#000]/30 md:bg-[#3c3d43] backdrop-blur-lg transition-all w-full md:block md:col-span-2 pl-0 md:max-w-[150px]  md:h-full fixed overflow-clip h-[70px] items-center top-0'>
                <Sidebar logout={() => logout()} />
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        
        />
      <div className='text-gray-500 ml-[20px] md:ml-[40px] cursor-pointer hover:font-bold hover:scale-110 hover:text-[#333] mr-4'>
      {/* <Moon /> */}

      </div>
            </div>
                <div className='flex items-center mt-5 '>
                    <h1 className='text-3xl flex'>
                        <p>Hello, __</p><p className='font-bold'>{`${username}`}</p><p>👋</p>
                    </h1>
                </div>
                    <p className='mt-5'>All you notes are here, in one place!</p>

                <div className='transition-all flex flex-col sm:grid w-[90%] h-auto  sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-evenly'>
                    {/* <div className="note new-note">
                        <textarea
                        placeholder="Type to add a new note..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value.slice(0, MAX_CHARS))}
                        ></textarea>
                        <div className="note-footer">
                        <small>{MAX_CHARS - newNote.length} characters remaining</small>
                        <button
                            onClick={addNote}
                            disabled={newNote.length === 0 || newNote.length > MAX_CHARS}
                        >
                            Add Note
                        </button>
                        </div>
                    </div> */}
                    <div
      className="w-[280px] sm:w-auto sm:min-w-[200px] sm:max-w-[320px] h-[280px] col-span-1 m-3 p-3 rounded-xl shadow-md flex flex-col justify-between items-center hover:translate-y-[-4px] transition-all"
      style={{ backgroundColor: '#f3f3f3' }}
    >
      {/* Title */}
      {/* <div>{title}</div> */}
      
      {/* Content */}
      <div className='mt-4 text-gray-700 p-2 transition-all h-[75%] w-[95%] cursor-default'>
        <textarea 
          title='content'
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          maxLength={250}
          className='w-full h-full p-2 bg-transparent border-none outline-none overflow-y-clip resize-none '
        />
        <div className='text-gray-500 text-sm w-full justify-end flex items-end'>
          {newNote.length} / 250
        </div>
      </div>
      
      {/* Date */}
      <div className="text-[14px] text-gray-500 font-sans flex justify-between w-full">
        {/* {`${year}-${month}-${day}`} */}
        <div className='flex text-gray-500 gap-3 '>
          {/* <div className='hover:text-gray-700 hover:scale-110 cursor-pointer '>
            <Pen size={20} />
          </div> */}
          <button className='cursor-pointer'    
                            onClick={addNote}
                            disabled={newNote.length === 0 || newNote.length > MAX_CHARS}
                        >
                            Add Note
                        </button>
          {/* <div className='hover:text-gray-700 hover:scale-110 cursor-pointer '>
            <Trash2 size={20} />
          </div> */}
        </div>
      </div>
    </div>
                   {sortedNotes
                        .filter((note) =>
                        note.text.toLowerCase().includes(searchTerm.toLowerCase())
                        ).map((note) => (
                        <Notes 
                        key={note._id}
                        content={note.text}
                        time={note.date}
                        bgColor={note.color}
                        onDelete={() => deleteNote(note._id)}
                        onEdit={(newText) => editNote(note._id, newText)}
                          // title={note.title}
                        //   time={note.date}
                        //   bgColor={note.color}
                        />
                    ))}
                </div>
            </div>
        </div>
  );
}

export default MainPage;