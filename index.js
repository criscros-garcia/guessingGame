var numSquares =  6;
var colors = generateRandomColors(numSquares);

var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    squares.forEach(function(square, num){
        if(colors[num]){
            square.style.backgroundColor = colors[num];
        }else{
            square.style.display = "none";
        }
    });
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    squares.forEach(function(square, num){
        square.style.backgroundColor = colors[num];
        square.style.display = "block";
    });
    
});




resetButton.addEventListener("click", function(){
    h1.style.backgroundColor = "#232323";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    
    squares.forEach(function(square, num){ 
        square.style.backgroundColor = colors[num];        
    });

    resetButton.textContent = "New Colors"

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