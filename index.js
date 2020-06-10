var numSquares =  6;
var colors = generateRandomColors(numSquares);

var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");


modeBtns.forEach(function(modeBtn){
    modeBtn.addEventListener("click", function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        modeBtn.classList.add("selected");
        modeBtn.textContent === "Easy" ? numSquares=3 : numSquares=6; 
        reset();
    });
});

function reset(){
    h1.style.backgroundColor = "#232323";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";

    squares.forEach(function(square, num){
            if(colors[num]){
                square.style.backgroundColor = colors[num];
                square.style.display = "block";

            }else{
                square.style.display = "none";
            }
    });

    resetButton.textContent = "New Colors"
}


resetButton.addEventListener("click", function(){
    reset();
});

squares.forEach(function(square, num){
square.style.backgroundColor = colors[num];
square.addEventListener("click",function(){
    var choosenColor = this.style.backgroundColor;
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

function changeColors(color){
    squares.forEach(function(square){
        square.style.backgroundColor = color;
    });
}

function pickColor(colors){
    var random = Math.floor(Math.random()*colors.length );
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*255+1);
    var g = Math.floor(Math.random()*255+1);
    var b = Math.floor(Math.random()*255+1);
    return "rgb("+r+", "+g+", "+b+")";
}