import React ,{useState}from 'react'
import styled from 'styled-components'

const RollDice = ({diceFace,tapDice}) => {
  return (
    <DiceContainer>
        <div className='dice' onClick={tapDice}>
            <img 
            // src='/images/dice/dice_1.png'
            src={`/images/dice/dice_${diceFace}.png`} 
            />
        </div>
        <p>Click on Dice To Roll</p>
    </DiceContainer>
  )
}

export default RollDice

 const DiceContainer=styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;
    }
    .dice{
      cursor:pointer;
    }

 `

