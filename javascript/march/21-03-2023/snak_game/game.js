let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
let box = 32;
var move;

// images
let ground = new Image();
ground.src = "img/ground.jpg";
let food = new Image();
food.src = "img/food.png";



// snak 
let snake = [];
snake[0] =
{
    x: 4 * 32,
    y: 7 * 32
}
// food object
let foodi =
{
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,

}
// event listener
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 37 && move != "right") {
        move = "left";
    }
    else if (event.keyCode == 38 && move != "down") {
        move = "top";
    }
    else if (event.keyCode == 39 && move != "left") {
        move = "right";
    }
    else if (event.keyCode == 40 && move != "up") {
        move = "down";
    }
    console.log(move)
})

function draw() {
    for (i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "black" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box,);
        ctx.strokeStyle="#000000";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box,);
    }

    // snake old position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
   
    if (move == "left" && snakeX != box) {
        snakeX = snakeX - box;
    }
    else if (move == "top" && snakeY != 3 * box) {
        snakeY = snakeY - box;
    }
    else if (move == "right" && snakeX != 17 * box) {
        snakeX = snakeX + box;
    }
    else if (move == "down" && snakeY != 17 * box) {
        snakeY = snakeY + box;
    }
    // snake new head
    let newHead =
    {
        x: snakeX,
        y: snakeY,
    }
    if (snakeX == foodi.x && snakeY == foodi.y) {
        foodi.x = Math.floor(Math.random() * 17 + 1) * box;
        foodi.y = Math.floor(Math.random() * 15 + 1) * box;
    }else{
        snake.pop();
    }
    snake.unshift(newHead)

    ctx.drawImage(food, 0, 0, box, box, foodi.x, foodi.y, box, box);
}

function loop() {
    ctx.drawImage(ground, 0, 0, 608, 608, 0, 0, 608, 608);
    draw();
}
let game = setInterval(loop, 250);