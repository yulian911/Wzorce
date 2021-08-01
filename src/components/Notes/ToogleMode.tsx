import React from 'react'
import styled from 'styled-components';
import { Button } from '../Todo/ListTodo'


interface ToggleProps{
    handleTheme():void
}
function ToogleMode({handleTheme}:ToggleProps) {

    
    return (
        <ToogleContainer>
            <Button onClick={()=>handleTheme()}>Toogle Mode</Button>
            
        </ToogleContainer>
    )
}

export default ToogleMode

const ToogleContainer =styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding:30px 20px 30px 20px ;
`;

