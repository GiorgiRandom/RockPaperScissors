let selectfrom=['rock','paper','scissors']
let playerchoice
let compscore=0
let playerscore=0;
function getComputerChoice(){
    return selectfrom[Math.floor(Math.random()*3)]
}
function playRound(playerSelection,computerSelection){
    if(playerSelection==='rock' && computerSelection==='scissors'){
        playerscore++
        console.log("you win. score you:",playerscore,"computer",compscore)
    }
    else if(playerSelection==='rock' && computerSelection==='paper'){
        compscore++
        console.log("you lose. score you:",playerscore,"computer",compscore)
    }
    else if(playerSelection==='rock' && computerSelection==='rock'){

        console.log("tie. score you:",playerscore,'computer score',compscore)

    }else if(playerSelection==='scissors' && computerSelection==='scissors'){
        
        console.log("tie. score you:",playerscore,'computer score',compscore)
    }
    else if(playerSelection==='scissors' && computerSelection==='rock'){
        compscore++
        console.log("you lose. score you:",playerscore,"computer",compscore)
    }
    else if(playerSelection==='scissors' && computerSelection==='paper'){
        playerscore++
        console.log("you win. score you:",playerscore,"computer",compscore)
    }
    else if(playerSelection==='paper' && computerSelection==='rock'){
        playerscore++
        console.log("you win. score you:",playerscore,"computer",compscore)
    }
    else if(playerSelection==='paper' && computerSelection==='paper'){
     
        console.log("tie. score you:",playerscore,'computer score',compscore)
    }
    else if(playerSelection==='paper' && computerSelection==='scissors'){
        compscore++
        console.log("you lose. score you:",playerscore,"computer",compscore)
    }
    else{
        console.log("some eror")
    }


    
    console.log(playerSelection)

}
function playGame(){
    for(let i = 0;i<5;i++)
    {
        playerchoice=window.prompt("Rock,paper,scissors").toLowerCase();

         playRound(playerchoice,getComputerChoice())
    }
}
playGame()
