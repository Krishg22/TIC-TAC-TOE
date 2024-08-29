let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
newGamebtn = document.querySelector(".new-btn");
msg=document.querySelector(".msg");
msgContainer = document.querySelector(".msg-container");

let turn0 = true;
let count =0;
let winning_patterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("button clicked");
        if(turn0){
            box.style.color="#E0A75E"
            box.innerText ="O";
            turn0=false;
        }
        else{
            box.style.color ="black"
            box.innerText ="X";
            turn0=true;
        }
        box.disabled =true;
        count++;

        let iswinner =checkwinner();
        if(count ==9 && !iswinner){
            gameDraw();
        } 
    })
})

const checkwinner = () => {
    for(let patterns of winning_patterns){
        if(boxes[patterns[0]].innerText != "" && boxes[patterns[1]].innerText != "" && boxes[patterns[2]].innerText != ""){
        if(boxes[patterns[0]].innerText === boxes[patterns[1]].innerText && boxes[patterns[1]].innerText === boxes[patterns[2]].innerText){
            showWinner(boxes[patterns[0]].innerText);
            return true;
        }
    }
    }
}

const showWinner = (winner) =>{
    msg.innerText =`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes;
}


const restgame = () =>{
    turn0=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
}


const gameDraw = () =>{
    msg.innerText =`Match is Draw`;
    msgContainer.classList.remove("hide");
    disableboxes();
}


const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


resetBtn.addEventListener("click",restgame);
newGamebtn.addEventListener("click",restgame);