import React from 'react'
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';


interface SearchProps{
    handleSearch:any
}
function Search({handleSearch}:SearchProps) {
    return (
        <SearchContainer>
            <SearchIcon/>
            <input type="text" placeholder='type to serach...' onChange={(e)=>handleSearch(e.target.value)}/>
        </SearchContainer>
    )
}

export default Search

const SearchContainer =styled.div`
display: flex;
flex-direction: row;


`;
const SearchIcon =styled(MdSearch)`
font-size:30px;
margin-top:12px;

`