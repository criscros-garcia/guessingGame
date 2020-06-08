
var colors = generateRandomColors(6);

var squares =  document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


resetButton.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    colors = generateRandomColors(6);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    
    squares.forEach(function(square, num){
        square.style.backgroundColor = colors[num];        
    });
});

squares.forEach(function(square, num){
square.style.backgroundColor = colors[num];
square.addEventListener("click",function(){
    var choosenColor = this.style.backgroundColor;
    if(choosenColor == pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(choosenColor);
        h1.style.backgroundColor = choosenColor;
    }else{
        messageDisplay.textContent = "Try Again";
        this.style.backgroundColor = "lightgoldenrodyellow";
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