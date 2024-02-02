import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = ({selectedNumber,setSelectedNumber,error,seterror}) => {
    const arrNumber=[1,2,3,4,5];
    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        seterror("")
    }
    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrNumber.map((value,index)=>(
                    <Box key={index} 
                    onClick={()=>numberSelectorHandler(value)}
                    isSelected={value === selectedNumber}>
                        {value}
                    </Box>
                ))}
            </div>
            <p>SELECT NUMBER</p>
        </NumberSelectorContainer>

    )
}

export default NumberSelector

const NumberSelectorContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap:24px
    }
    p{
        font-size:20px;
        font-weight:900px;
    }
    .error{
        color: red;
    }
`
const Box=styled.div`
    height:72px;
    width:72px;
    border:2px solid black;
    display: grid;
    place-items:center;
    font-size: 24px;
    font-weight: 900px;
    cursor:pointer;
    background-color: ${(props)=> (props.isSelected ? "black" : "white")};
    color: ${(props)=> (props.isSelected ? "white" : "black")};
`

