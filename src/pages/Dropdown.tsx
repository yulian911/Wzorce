import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'


function Dropdown() {
    const[clicked, setClicked]=useState<any>(null)
    const[show,setShow]=useState(false)
    const[selected , setSelected]=useState<number>(1)


    useEffect(() => {
     if(selected===1){
       return;
     }
     if(selected===2){
       return;
     }
    }, [selected])
   
    return (
      <div>
        <div >
            <BoxButton>
                    <Button onClick={()=>setClicked('FirstPage')}>1</Button>
                    <Button onClick={()=>setClicked('SecondPage')} >2</Button>
                    <Button onClick={()=>setClicked('NextPage')}>3</Button>
                   
            </BoxButton>
          {clicked ==='FirstPage'?(<BoxContainer>
              <Button onClick={()=>setShow(!show)}>+</Button>
            {show?<BoxShow></BoxShow>:<Box></Box>}
          </BoxContainer>):null}
          {clicked ==='SecondPage'?(<BoxContainer>SecondPage</BoxContainer>):null}
          {clicked ==='NextPage'?(<BoxContainer>NextPage</BoxContainer>):null}
          
        </div>
        <div>
            <BoxClicked onClick={()=>setSelected(1) } style={{border:selected===1?"3px solid green":'1px solid black'}}></BoxClicked>
            <BoxClicked onClick={()=>setSelected(2) } style={{border:selected===2?"3px solid green":'1px solid black'}}></BoxClicked>

        </div>
      </div>
    )
}

export default Dropdown

const BoxClicked =styled.div`
width: 300px;
height: 250px;
`

const Button =styled.div`width: 150px;
height: 50px;
border:3px solid violet;
border-radius: 15px;
line-height: 50px;
font-size: 15px;
text-align: center;
cursor: pointer;
transition: .1s easy;
:hover{
    background-color: violet;
    color:white;
}`;
const BoxButton =styled.div`
display:flex;
flex-direction: row;
gap:30px;
justify-content: center;


`
const BoxContainer =styled.div`
width:100%;
height:60vh;
border:2px solid black;
margin:30px 0 0 0;
border-radius:15px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;
const BoxShow =styled.div`
width: 200px;
height:100%;
background-color: black;
position:absolute;
left:0;
transition: all 0.3s ease-in-out;



`;
const Box =styled.div`
width: 200px;
height:100%;
background-color: transparent;
position:absolute;
left:-200px;

`;