let userscore=0;
let computerscore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const computerscorePara = document.querySelector("#computer-score");

const getcompuchoice = () =>{
    const options=["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3); 
    return options[rand];
}

const draw=()=>{
    console.log("Game Draw! Play again.")
    msg.innerText="Game Draw! Play again."
    msg.style.backgroundColor="black"
}

const showwin=(userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log(`You Win! Your ${userchoice} beats ${compchoice}`);
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        computerscorePara.innerText=computerscore;
        console.log(`You Loose! ${compchoice} beats Your ${userchoice}`);
        msg.innerText=`You Loose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};


const playgame = (userchoice) =>{
    console.log("userchoice= ", userchoice);
    const compchoice= getcompuchoice();
    console.log("computerchoice= ", compchoice)
    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==='rock'){
            userwin=compchoice==='paper' ? false : true;
        }
        else if(userchoice==='paper'){
            userwin=compchoice==='scissors' ? false : true;
        }
        else{
            userwin=compchoice==='rock' ? false : true;
        }
        showwin(userwin, userchoice, compchoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
