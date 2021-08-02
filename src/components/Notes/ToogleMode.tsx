import React from 'react'
import styled from 'styled-components';
import { Button } from '../Todo/ListTodo'


interface ToggleProps{
    handleTheme():void
    handleLogout():void
}
function ToogleMode({handleTheme,handleLogout}:ToggleProps) {

    
    return (
        <ToogleContainer>
            <Button onClick={()=>handleTheme()}>Toogle Mode</Button>
            <Button onClick={handleLogout}>Wyloguj się</Button>
            
        </ToogleContainer>
    )
}

export default ToogleMode

const ToogleContainer =styled.div`
display: flex;
flex-direction: row;
gap:30px;
justify-content: center;
padding:30px 20px 30px 20px ;
`;

