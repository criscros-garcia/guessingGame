let numSquares = 6;
let colors = [];
let pickedColor;

let squares =  document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

init();

function init(){
    setupBtns();
    setupSquares();
    reset();
}

function setupBtns(){
    modeBtns.forEach(function(modeBtn){
        modeBtn.addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            modeBtn.classList.add("selected");
            modeBtn.textContent === "Easy" ? numSquares=3 : numSquares=6; 
            reset();
        });
    });
}

function setupSquares(){
    squares.forEach(function(square, num){
        square.addEventListener("click",function(){
            let choosenColor = this.style.backgroundColor;
            if(choosenColor == pickedColor){
                messageDisplay.textContent = "Correct";
                changeColors(choosenColor);
                resetButton.textContent = "Play Again?"
                h1.style.backgroundColor = choosenColor;
            }else{
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    });    
}

function reset(){
    h1.style.backgroundColor = "#232323";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    printSquares();
}

function printSquares(){
    squares.forEach(function(square, num){
        if(colors[num]){
            square.style.backgroundColor = colors[num];
            square.style.display = "block";
        }else{
            square.style.display = "none";
        }
    });
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    squares.forEach(function(square){
        square.style.backgroundColor = color;
    });
}

function pickColor(colors){
    let random = Math.floor(Math.random()*colors.length );
    return colors[random];
}

function generateRandomColors(num){
    let arr = [];
    for(let i=0; i<num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random()*255+1);
    let g = Math.floor(Math.random()*255+1);
    let b = Math.floor(Math.random()*255+1);
    return "rgb("+r+", "+g+", "+b+")";
}