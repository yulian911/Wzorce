import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CryptoList } from '../components/Crypto/CryptoList'

 export interface CoinsState{
    id:string,
    symbol:string,
    name:string,
    image:string,
    current_price:number,
    market_cap_rank:number,


}

function CryptoApi() {


    const[coins ,setCoins]=useState<CoinsState[]>([])
    useEffect(() => {
   
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false')

        .then(res=>{
            setCoins(res.data)
            console.log(res.data)
        }).catch(error=>console.log('error'))
        
        
    }, [])
    
    const[value ,setValue]=useState<string>('')
    const handleSearch =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return (
        <div>


        <SearchCointainer>
            <input type="text" onChange={handleSearch}/>
        </SearchCointainer>
        <CryptoContainer>
            {coins.filter(coins=>coins.name.toLowerCase().includes(value)).map(coin=><CryptoList coin={coin}/>
               
            
            )}
        </CryptoContainer>
        </div>
    )
}
const SearchCointainer =styled.div`


`

const CryptoContainer= styled.div`
width:100%;
`;





export default CryptoApi
