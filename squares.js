let squareArea = document.querySelector("#squarearea");
let squareCount = parseInt(Math.random() * 21) + 30; //30-50 squares
let zIndex = 100;
console.log(squareCount);

function addSquares() {
    //make a square
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random() * 650) + "px";
    square.style.top = parseInt(Math.random() * 250) + "px";
    square.style.backgroundColor = getRandomColor();
    square.onclick = bringToFront;
    squareArea.append(square);
}


function getRandomColor() {
    //make a color
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters.charAt(parseInt(Math.random() * letters.length));
    }
    return color;
}

function changeColor() {
    //an array
    let allSquares = document.querySelectorAll(".square");
    for (i = 0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}

function bringToFront() {
    if (this.style.zIndex == zIndex - 1) {
        this.remove();
        console.log("removed");
    } else {
        this.style.zIndex = zIndex;
        zIndex++;
    }
}


window.onload = function() {
    for (let i = 0; i < squareCount; i++) {
        //make a square
        addSquares();
    }
};


//make a function that add one square (make sure that it is the onclick for the button)
//make a funtion that changes all the colors of all the squares (make sure the color button calls it)
//clicking on the square makes it move on top (z-index = 100)
//clicking on teh square again deletes the square
//randomize the square size 