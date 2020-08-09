import {update as updateSnake,draw as drawSnake,SNAKE_SPEED, getSnakeHead, snakeIntersection, scoreNow} from './snake.js'
import {update as updateFood,draw as drawFood} from './food.js'
import { outsideGrid } from "./grid.js"

let lastRenderTime = 0
let gameOver = false
const game = document.getElementById('game');
const gameBoard = document.getElementById('gameboard');
const lose = document.getElementById("loseaudio"); 
const loopaudio = document.getElementById("loopaudio");
const nowscore = document.getElementById("scorefinish");  
const finish = document.getElementById("finishboard");
loopaudio.loop = true
loopaudio.play()


function main(currentTime){
    if(gameOver){
        lose.play(); 
        loopaudio.loop=false
        loopaudio.pause()
        game.style.animation='shake 0.5s ease-out'
        nowscore.innerHTML = scoreNow
        finish.style.display='flex'
        // if(confirm('You lost, Press okay to restart')){
        //     window.location = '/'
        // }
       return
    }


    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000
    window.requestAnimationFrame(main)
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    // console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)



function update(){
  updateSnake()
  updateFood()
  checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

  
  function disableLoop() { 
    x.loop = false;
    x.load();
  } 
  
