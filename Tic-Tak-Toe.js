let butts = document.querySelectorAll(".butt");
let resets = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let winn = document.querySelector("#winn");
let nb = document.querySelector(".nb");
let newb = document.querySelector("#new");
let turnO = true; //playerX,playerO

const winpett = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetG = () => {
  turnO = true;
  enbutton();
  msg.classList.add("hide");
};

butts.forEach((butt) => {
  butt.addEventListener("click", () => {
    // console.log("button");
    if (turnO) {
      butt.innerText = "O";
      turnO = false;
    } else {
      butt.innerText = "X";
      turnO = true;
    }
    butt.disabled = true;

    checkWinner();
  });
});

const disbutton = () => {
  for (let butt of butts) {
    butt.disabled = true;
  }
};

const enbutton = () => {
  for (let butt of butts) {
    butt.disabled = false;
    butt.innerText = "";
  }
};

const msgWinner = (winner) => {
  disbutton();
  msg.classList.remove("hide");
  winn.innerText = `Congratulation Winner is ${winner}`;
 
};
const checkWinner = () => {
  for (let pettern of winpett) {
    
    let pos0val = butts[pettern[0]].innerText;
    let pos1val = butts[pettern[1]].innerText;
    let pos2val = butts[pettern[2]].innerText;

    if ((pos0val != "") & (pos1val != "") & (pos2val != "")) {
      if (pos0val === pos1val && pos1val === pos2val) {
        //    console.log("Winner",pos0val);
        msgWinner(pos0val);
      }
    } 
  }
};


newb.addEventListener("click", resetG);
resets.addEventListener("click", resetG);
