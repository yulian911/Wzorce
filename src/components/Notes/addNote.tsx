import { title } from "process";
import React, { useState } from "react";
import styled from "styled-components";



interface AddNoteProps{
    addNote(title:string):void
}

export const AddNote =({addNote}:AddNoteProps)=>{

    const[noteText,setNoteText]=useState('')
    const characterLimit =200;
    const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{

        if(characterLimit-e.target.value.length >=0){
            setNoteText(e.target.value)
        }
           
    }
    const handleSaveNote=(e:React.MouseEvent<HTMLButtonElement>)=>{
        if(noteText.trim().length >0){
            console.log('działa')
            addNote(noteText)
            setNoteText('')
        }

}

    return(<AddNewNoteContainer>
                <TextArea rows={5} cols={8} value={noteText} onChange={handleChange} placeholder='Type add a note'/>
                <AddNoteItems>
                    <small>{characterLimit-noteText.length} Remaining</small>
                    <ButtonSave onClick={handleSaveNote}>Save</ButtonSave>
                </AddNoteItems>
    </AddNewNoteContainer>)
}



// const SavedNoteContainer=styled.div`
// display: flex;
// flex-direction: column;
// justify-content:space-between ;
// padding: 15px;
// background:#67d7cc;
// min-height: 170px;
// border-radius:10px;`;

const AddNewNoteContainer=styled.div`
display: flex;
flex-direction: column;
justify-content:space-between ;
padding: 15px;
background:#67d7cc;
min-height: 170px;
border-radius:10px;`;
const AddNoteItems=styled.div`
display: flex;
flex-direction: row;
justify-content:space-between ;

`;
const ButtonSave=styled.button`
background-color: #e1e1e1;
border-radius: 15px;
border:none;
padding:5px 10px ;
:hover{
    background-color: #ededed;
    cursor:pointer;

}
`;
const TextArea=styled.textarea`
border:none;
resize:none;
outline: none;
:focus{
    outline: none;
}

`;


