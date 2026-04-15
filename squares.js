let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50 squares

for (let i = 0; i < squareCount; i++){
    //make a square
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650) + "px";
    square.style.top = parseInt(Math.random()*250) + "px";
    square.style.backgroundColor = getRandomColor();
    //put it on screen
    squareArea.append(square);
}

function getRandomColor(){
    //make a color
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters.charAt(parseInt(Math.random()*letters.length));
    }
    return color;
}