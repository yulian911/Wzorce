import React from 'react'
import styled from 'styled-components'
import { CoinsState } from '../../pages/CryptoApi'


interface CoinsProps{
    coin:CoinsState
}

export function CryptoList({coin}:CoinsProps) {
    return (
        <CryptoItem>
           <Text>{coin.market_cap_rank}</Text>
                <Text>{coin.id}</Text>
               
                <Text>{coin.symbol}</Text>
                <Text>{coin.name}</Text>
                <Image src={coin.image} alt='crypto'/>
                <Text>{coin.current_price} PLN</Text>  
        </CryptoItem>
    )
}

export default CryptoList;

const Text =styled.p`

line-height: 10px;

`
const Image =styled.img`
width: 40px;
`
const CryptoItem= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;;
border:1px solid black;
border-radius: 10px;
margin:10px 0;
padding: 0 15px;
`;