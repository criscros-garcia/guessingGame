var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)"
];

var squares =  document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;

squares.forEach(function(square, num){
square.style.backgroundColor = colors[num];
square.addEventListener("click",function(){
    var choosenColor = this.style.backgroundColor;
    if(choosenColor == pickedColor){
        messageDisplay.textContent = "Correct";
    }else{
        messageDisplay.textContent = "Try Again";
        this.style.backgroundColor = "lightgoldenrodyellow";
    }
});
});