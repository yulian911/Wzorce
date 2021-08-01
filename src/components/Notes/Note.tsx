import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
import styled from 'styled-components'



interface NoteItemProps{
    title:string,
    date:string,
    onRemove(id:number):void
    id:number
}
function Note({title ,date,onRemove ,id}:NoteItemProps) {

    const handleDelite =(id:number)=>{
        onRemove(id)
    }

    return (
        <NoteContainer>
            <p style={{color:'red',textAlign:'justify'}}>{title}</p>
            <NoteItems>
            <small>{date}</small>
            <MdDeleteForever onClick={()=>handleDelite(id)}/>
            </NoteItems>
           
        </NoteContainer>
    )
}

export default Note

const NoteContainer =styled.div`
display: flex;
flex-direction: column;
justify-content:space-between ;
padding: 15px;
background:yellow;
min-height: 170px;
border-radius:10px;




`;
const NoteItems =styled.div`
display: flex;
flex-direction: row;
justify-content:space-between ;

`;

