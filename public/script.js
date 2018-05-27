var socket = io();
var matrix = [];
var exanak = "garun";
var m = 34;
var n = 34;
var side = 18;

socket.on("a", function (data) {
    matrix = data[0];
    exanak = data[1];
    document.getElementById('exanak').innerText = exanak;
});

socket.on("gameOver", function () {
    document.body.innerHTML = '';
    var image = document.createElement("img");
    image.setAttribute("src", "http://orig07.deviantart.net/17c7/f/2013/145/f/6/game_over_wallpaper_by_3971450-d66kbai.png");
    document.body.appendChild(image);
});

function setup() {
    document.getElementById('exanak').innerText = exanak;
    frameRate(100);
    createCanvas(34 * side, 34 * side);
    background('#acacac');
}

function draw() {

    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (exanak == "garun"|| exanak=="amar") {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (exanak == "ashun") {
                    fill("#bf7c29");
                    rect(x * side, y * side, side, side);
                }
                else if(exanak=="dzmer"){
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
          
   
}
}
}