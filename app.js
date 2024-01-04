let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGmaebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winplayer = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinnerPlayer();
  });
});
const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}
const shoWinner = (Winner) =>{
  msg.innerHTML = `Congratulations, Winner is ${Winner}`
  msgContainer.classList.remove("hide");
  disableBoxes();
}
const checkWinnerPlayer = () => {
  for (let pattern of winplayer) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val ===  pos2val && pos3val === pos3val){
            shoWinner(pos1val);
        }
    }
  }
};

const restGame = () =>{
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");

}

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

newGmaebtn.addEventListener("click",restGame)
resetBtn.addEventListener("click",restGame)