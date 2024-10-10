let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg  = document.querySelector("#msg");

let turno = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,5],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const resetgame = () => {
    turno=true;
    enable();
    msgcontainer.classList.add("hide");
}

boxes.forEach ((box) => {
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if (turno) {
            box.innerText="O";
            turno=false;
        }
        else {
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();

    });
});

const disable= () => {
    for(let box of boxes) {
        box.disabled=true;
    }
}

const enable= () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner = (winner) => {
    msg.innerText = `congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();

}

const checkwinner = () => {
    for(let pattern of winpatterns) {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;

        if (p1!="" && p2!="" && p3!="") {
            if (p1==p2 && p2==p3) {
                console.log("winner",p1);
                showwinner(p1);
            }
        }

    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);