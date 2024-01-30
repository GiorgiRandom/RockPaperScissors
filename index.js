
let selectfrom=['rock','paper','scissors']
let compscore=0;
let playerscore=0;
const div=document.createElement(`div`)
const label=document.createElement(`label`)

div.setAttribute(`id`,'result')
document.body.append(div)
label.setAttribute(`id`,'label')
div.appendChild(label)

function getComputerChoice(){
    return selectfrom[Math.floor(Math.random()*3)]
}
function chosensrock(playerchoice,computerSelection){
    if( computerSelection==='scissors'){
        playerscore++
        label.textContent=`Computer chose rock.you win. score you:${playerscore} computer ${compscore}`
    }
    else if(computerSelection==='paper'){
        compscore++
        label.textContent= `Computer chose scissors .you lose. score you:${playerscore} computer ${compscore}`

    }
    else if(computerSelection==='rock'){
        label.textContent=`Computer chose paper.tie. score you:${playerscore} computer score ${compscore}`}
    if(playerscore===5){
       alert("You got 5 points you win")   
       playerscore=0
       compscore=0
       display()

    }
}
function chosenscissors(playerchoice,computerSelection){
     if(computerSelection==='scissors'){
        label.textContent=`Computer chose paper.tie. score you:${playerscore} computer score ${compscore}`
    }
    else if(computerSelection==='rock'){
        compscore++
        label.textContent= `Computer chose scissors .you lose. score you:${playerscore} computer ${compscore}`
    }
    else if(computerSelection==='paper'){
        playerscore++
        label.textContent=`Computer chose rock.you win. score you:${playerscore} computer ${compscore}`
 
    }
    if(playerscore===5){
        alert("You got 5 points you win")   
        playerscore=0
       compscore=0
       display()
    }

}
function chosenpaper(playerchoice,computerSelection){
    if( computerSelection==='rock'){
        playerscore++
        label.textContent=`Computer chose rock.you win. score you:${playerscore} computer ${compscore}`
        
    }
    else if( computerSelection==='paper'){
        label.textContent=`Computer chose paper.tie. score you:${playerscore} computer score ${compscore}`
    }
    else if(computerSelection==='scissors'){
        compscore++
        label.textContent= `Computer chose scissors .you lose. score you:${playerscore} computer ${compscore}`
    }
    if(playerscore===5){
       alert("You got 5 points you win") 
       playerscore=0
       compscore=0
       display()
     
        
    }
}
const rock=document.getElementById('rock').addEventListener(`click`,function (evenet){chosensrock(`rock`,getComputerChoice())})
const scissors=document.getElementById(`scissors`).addEventListener(`click`,function(something){chosenscissors(`scissors`,getComputerChoice())})
const paper=document.getElementById(`paper`).addEventListener('click',function(somealso){chosenpaper('paper',getComputerChoice())})
function display(){
    label.textContent=`Player score:${playerscore},Computer Score ${compscore}`
}
