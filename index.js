import Spaceship from './spaceship.js'
import Obstacle from './obstacle.js'
import Game from './game.js'

document.addEventListener("DOMContentLoaded", function(event) {

    let spaceship = new Spaceship(document.getElementById('spaceship'));
    let obstacle1 = new Obstacle(document.getElementById('obstacle_1'));
    let obstacle2 = new Obstacle(document.getElementById('obstacle_2'));
    let game = new Game(spaceship, obstacle1, obstacle2);
    game.start();

});