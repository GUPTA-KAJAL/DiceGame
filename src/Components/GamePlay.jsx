import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'

const GamePlay = () => {
  const[selectedNumber,setSelectedNumber]=useState();
  const [diceFace, setDiceFace] = useState(1);
  const[score,setscore]=useState(0);
  const[error,seterror]=useState();
  const [showRules, setShowRules] = useState(false);

  const tapDice = () => {
    if(!selectedNumber) {
      seterror("You have not selected the number");
      return
    }
    
    // Generate a random number between 1 and 6 for the dice face
    const newDiceFace = Math.floor(Math.random() * 6) + 1;
    setDiceFace(newDiceFace);

    if(selectedNumber===newDiceFace){
      setscore(prev=>newDiceFace+prev)
    }
    else{
      setscore(prev=>prev-2);
    }
    setSelectedNumber(undefined)
  };

  const resetScore=()=>{
    setscore(0);
  }

  return (
    <MainContainer>
        <div className='topSection'>
            <TotalScore score={score}/>
            <NumberSelector error={error}  seterror={seterror} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RollDice diceFace={diceFace} tapDice={tapDice} />
        <div className='btn'>
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
        </div>
        {showRules && <Rules />}
    </MainContainer>
   
  )
}

export default GamePlay

const MainContainer=styled.main`
    padding-top: 70px;
    max-width: 1180px;
    margin:0 auto;
    .topSection{
        display: flex;
        justify-content: space-between;
        align-items:end;
      }
      .btn{
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      gap:10px;
      margin-top:40px;
    }
`

const Button=styled.button`
    color:white;
    background-color: black;
    padding:10px 18px;
    border-radius: 5px;
    min-width:220px;
    border: none;
    font-size: 16px;
    border:1px solid transparent;
    cursor:pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border:1px solid black;
        transition: 0.3s background ease-in;
    }
   
`

const OutlineButton=styled(Button)`
  background-color:white;
  border:1px solid black;
  color: black;
   &:hover{
        background-color: black;
        color: white;
        border:1px solid transparent;
        transition: 0.3s background ease-in;
    }
   
`

