import React from 'react'
import styled from 'styled-components';
import Note from './Note'
import "../../App.css"
import { NotesState } from '../../pages/Notes';
import { AddNote } from './addNote';


export interface NoteProps{
    notes:NotesState[],
    addNote(title:string):void
    onRemove(id:number):void
}


function NoteList({notes,addNote,onRemove}:NoteProps) {
    return (
        <NoteListContainer>
          {notes.map(note=><Note key={note.id} title={note.title} date={note.date} id={note.id} onRemove={onRemove}/>)}
          <AddNote addNote={addNote}/>
            
        </NoteListContainer>
    )
}

export default NoteList


const NoteListContainer = styled.div`
margin:30px 0 0 0;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 6px;
  grid-row-gap:6px;


`;
