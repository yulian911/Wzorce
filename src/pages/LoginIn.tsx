import React from 'react'
import styled from 'styled-components'


interface ToggleProps{

    handleLogin():void
}

function LoginIn({handleLogin}:ToggleProps) {
    return (
        <LoginContainer>
            <Button onClick={handleLogin}>Login</Button>
        </LoginContainer>
    )
}

export default LoginIn

const LoginContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

`
const Button=styled.div`
width: 300px;
height: 200px;
border:3px solid violet;
border-radius: 15px;
line-height: 200px;
font-size: 45px;
text-align: center;
cursor: pointer;
transition: .1s easy;
:hover{
    background-color: violet;
    color:white;
}
`
