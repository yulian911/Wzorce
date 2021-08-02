import React, { useEffect, useState } from 'react'
import NoteList from '../components/Notes/NoteList'
import Search from '../components/Notes/Search'
import ToogleMode from '../components/Notes/ToogleMode'



export interface NotesState{
id:any;
title:string;
date:string;

}
const Notes=() =>{

    const[search ,setSearch]=useState<string>('')
    const[notes ,setNotes]=useState<NotesState[]>([
       
    ])
    const addNote =(title:string)=>{

        const date= new Date();
        const newData={
            id:Date.now(),
            title:title,
            date:date.toLocaleDateString()

        }
        setNotes(prev=>[...prev,newData])
    }

    const onRemove =(id:number)=>{
        setNotes(prev=>prev.filter(note=>note.id !==id))
    }
    useEffect(() => {
        
        const saved = JSON.parse(localStorage.getItem("notes") || "[]") as NotesState[];
        setNotes(saved);
         
      }, [])
  useEffect(() => {
    localStorage.setItem('notes',JSON.stringify(notes))
     
  }, [notes])
    return (
        <div style={{height:'100%',padding:'0 30px'}} >
            <Search handleSearch={setSearch}/>
            <NoteList notes={notes.filter(note=>note.title.toLowerCase().includes(search))} addNote={addNote} onRemove={onRemove}/>
        </div>
    )
}

export default Notes
