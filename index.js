let computerScore=0
let userScore=0
const userScore_span=document.getElementById("user-score")
const computerScore_span=document.getElementById("comp-score")
const scoreboard_div=document.querySelector(".scoreboard")
const result_div=document.querySelector(".result >p")
const rock_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissor_div=document.getElementById("s")


function getComputerChoice(){

    const choices=['r','p','s'];

    const randomNumber=Math.floor(Math.random()*3);

    return choices[randomNumber];
}

function convertLetter(letter){

if (letter=="r"){return "Rock"}
else if (letter=="p"){return "Paper"}
else if (letter== "s"){ return "Scissor"}

}

function win(user,computer){
userScore++;
userScore_span.innerHTML=userScore
computerScore_span.innerHTML=computerScore;
const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
const userChoice_div=document.getElementById(user)

result_div.innerHTML=`${convertLetter(user)}${smallUserWord}  beats ${convertLetter(computer)}${smallCompWord}. You win`
userChoice_div.classList.add("green-glow")
setTimeout(()=>userChoice_div.classList.remove('green-glow'),200)

}
function lose(user,computer){
computerScore++;
userScore_span.innerHTML=userScore
computerScore_span.innerHTML=computerScore;
const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
const userChoice_div=document.getElementById(user)


result_div.innerHTML=`${convertLetter(user)}${smallUserWord}  loeses ${convertLetter(computer)}${smallCompWord}. Computer win`
userChoice_div.classList.add("red-glow")
setTimeout(()=>userChoice_div.classList.remove('red-glow'),200)



}
function draw(user,computer){
    userScore_span.innerHTML=userScore
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(user)

    result_div.innerHTML=`${convertLetter(user)}${smallUserWord}   ${convertLetter(computer)}${smallCompWord}. It's a draw`
    userChoice_div.classList.add("gray-glow")
    setTimeout(()=>userChoice_div.classList.remove('gray-glow'),200)


}


function game(userChoice){



    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){

        case "rs":
        case "sp":
        case "pr":
            win(userChoice,computerChoice);

            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,computerChoice);
        break;
        case "rr":
        case "ss":
        case "pp":
        draw(userChoice,computerChoice);
        break;
                
    }

}



function main(){
rock_div.addEventListener('click',()=>game("r"));

paper_div.addEventListener('click',()=>game("p"));

scissor_div.addEventListener('click',()=>game("s"));
}
main();