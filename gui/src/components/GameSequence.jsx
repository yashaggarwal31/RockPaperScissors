import React, { useEffect, useState } from 'react'
import PickWinnerx from './PickWinnerx';
import BetterButton from './BetterButton';
import ScoreCard from './ScoreCard';

export default function GameSequence() {

    let userName = "User";
    let buttonClicks = 0;

    const victorComputer = "Computer Won!";
    const victorUser = `${userName} Won!`
    const tieMessage = "Its a TIE!";

    const move = { 1: "Rock", 2: "Paper", 3: "Scissors" };
    const [nextMove,setNextMove] = useState(1);
    console.log(move[nextMove])

    const powerUpOptions = { 1: "Elemental Boost", 2: "Double Points", 3: "Shield", 4:"Prediction", 5:"Elemental Swap" };

    const [round, setRound] = useState(0);
    const [powerup3,setPowerUp3] = useState();
    const [powerUp,setPowerUp] = useState(0);
    const [userChoice, setUser] = useState(null);
    const [computerChoice, setComputer] = useState(null);
    const [winner, setWinner] = useState(null);
    const [userScore,setUserScore] = useState(0);
    const [computerScore,setComputerScore] = useState(0);
    const [scoreCard,setScoreCard] = useState(false);
    const [userScoreList,setUserScoreList] = useState([]);
    const [computerScoreList,setComputerScoreList] = useState([]);
    const [winnerList,setWinnerList] = useState([]);
    const [itrV,setItr] = useState(round);
    const [powerUpMessage,setPowerUpMessage] = useState("");
    const [test,setTest] = useState(0)
     useEffect(()=>{setTest(1)})
    
    
    //const [prediction,getPrediction] = useState("");

    let booleanValue = false;
    let booleanValueT = true;
    

    /*
    Powers 1: "Elemental Boost", 4:"Prediction", 5:"Elemental Swap"
    */
    

    function setItrV(){
        setItr(round);
    }

    function settingLists(userScore,computerScore,victor){
        setUserScoreList((arr) => [...arr ,userScore]);
        setComputerScoreList((arr)=>[...arr,computerScore]);
        setWinnerList((arr)=>[...arr,victor]);
    }

    function computerVictory(){
        setWinner(2);
        setComputerScore((computerScore) => computerScore+1);
        if(powerUp==3){
            setComputerScore((computerScore) => computerScore-1);
            setPowerUpMessage("Shield Activated! Computer -1");
        }
        settingLists(userScore,computerScore,victorComputer);
    }
    function userVictory(){
        setWinner(1);
        if(powerUp==2) setUserScore(userScore+1);
        setUserScore(userScore+1);
        settingLists(userScore,computerScore,victorUser);
    }

    function bothTie(){
        setWinner(3);
                settingLists(userScore,computerScore,tieMessage);
    }

    const gameLogic = (userChoice,computerChoice) =>{

        if (userChoice == 1) {
            if (computerChoice == 3) {
                userVictory();
            }
            else if (computerChoice == 2) {
                computerVictory();
            }
            else {
                bothTie();
            }
        }
        else if (userChoice == 2) {
            if (computerChoice == 3) {
                computerVictory();
            }
            else if (computerChoice == 2) {
                bothTie();
            }
            else {
                userVictory();
            }
        }
        else if (userChoice == 3) {
            if (computerChoice == 3) {
                bothTie();
            }
            else if (computerChoice == 2) {
                userVictory();
            }
            else {
                computerVictory();
            }
        }

    }

    function gameSequence(userChoice) {
        // buttonClicks++;
        // setPowerUp((powerUp) => 4);
        // //setPowerUp3(4)
        // //checkPowerUp()

        // setRound(round + 1);
        // let computerChoice = Math.floor(Math.random()*3+1);
        // setUser(move[userChoice]);
        // setComputer(move[computerChoice]);

        // if(nextMove!=null){
        //     computerChoice = nextMove;
        //     setNextMove(1);
        //     setPowerUpMessage("");
        // }

        // console.log("yeash")
        // console.log(powerUp)
        // console.log(typeof powerUp)
        console.log('5')
        setTest(4)
        let y = 4
        setTest(y)
        // setPowerUp(4)
        // console.log(powerUp)
        console.log(test)


        if(test==4){
            console.log("yeashs dddd")
            let value = Math.floor(Math.random()*3) + 1;
            setNextMove(value);
            console.log(powerUpMessage)
            setPowerUpMessage("Next Move is:" + move[nextMove]);
            console.log(powerUpMessage)
        }

        

        gameLogic(userChoice,computerChoice);
    }

    const showScoreCard = () => {
        setScoreCard(true);
    }

    function checkPowerUp(){
        let booleanPower = false;
        if(buttonClicks%10==0){
            booleanPower = true;
        }

        if(userScore[round-3] == userScore[round-2] && userScore[round-2] == userScore[round-1]){
            booleanPower = true;
        }

        if(Math.random()==0) booleanPower = true;

        if(booleanPower==true){
            return Math.floor(Math.random()*6+1);
        } 
        else return null;
    }

 

    return (
        <div>
            <main>
                <div>
                    <header id="headContent">
                        <p>
                            <div>Round: {round}</div>
                            <div>Pick your choice</div>
                            <br/>
                            <div id="scores">
                            {
                                (userScore!=0 || computerScore!=0) && <div>User's Score: {userScore}</div>
                            }
                            {
                                (computerScore!=0 || userScore!=0) && <div>Computer's Score: {computerScore}</div>
                            }
                            </div>
                        </p>
                    </header>
                    <section id="gameChoices">
                        <menu>
                            <div>
                                <button onClick={()=>gameSequence(1)}> dev</button>
                                <BetterButton isSelected={scoreCard}
                                    onSelect={() => gameSequence(1)}
                                     option={booleanValue}>
                                    Rock
                                </BetterButton>
                                <BetterButton isSelected={scoreCard}
                                    onSelect={() => gameSequence(2)} option={booleanValue}>
                                    Paper
                                </BetterButton>
                                <BetterButton isSelected={scoreCard}
                                    onSelect={() => gameSequence(3)} option={booleanValue}>
                                    Scissors
                                </BetterButton>
                            </div>
                        </menu>
                    </section>
                </div>

                <section id="result">

                    <div>
                        <div>
                            {
                                { userChoice } && <div><h3>User's Choice:  <h3 class="inlineHead">{userChoice}</h3></h3></div>
                            }
                        </div>
                        <div>
                            {
                                { computerChoice } && <div><h3>Computer's Choice:  <h3 class="inlineHead">{computerChoice}</h3></h3></div>
                            }
                        </div>
                        <div>
                            {
                                <PickWinnerx winner={winner}/>
                            }
                        </div>
                        <div id="powerUp">
                            {
                                ({powerUp}!=null) && (<div>Your Got a Power Up!, Your Power: {powerUpOptions[powerUp]}</div>)
                            }
                            {
                                (powerUpMessage.length>0) && <div>{powerUpMessage}</div>
                            }
                        </div>
                    </div>
                </section>
            </main>
            <section id="gameChoices">
                <menu>
                    <div>
                        <BetterButton onSelect={()=>showScoreCard()} option={booleanValueT} isSelected={scoreCard}>
                            ScoreCard
                        </BetterButton>
                        
                    </div>
                </menu>
            </section>

            <div>
                {
                   scoreCard && <ScoreCard itr={itrV} onClick={setItrV} userScores = {userScoreList}
                   computerScores = {computerScoreList}
                   winners = {winnerList} rounds={round} />
                }
            </div>
        </div>
    )

}
