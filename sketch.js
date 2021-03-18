var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4
var car1img,car2img,car3img,car4img
var cars
var form, player, game;
var trackimg ;
var groundimg;
function preload(){

     car1img = loadImage("car1.png");
     car2img = loadImage("car2.png");
     car3img = loadImage("car3.png");
     car4img = loadImage("car4.png");
     
     trackimg = loadImage("track.jpg");
     groundimg = loadImage("ground.png");
    }

function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
