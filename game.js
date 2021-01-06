import Spaceship from './spaceship.js'
import Obstacle from './obstacle.js'

export default class Game {

    constructor() {
        this.timer = null;
        this.spaceship = new Spaceship(document.getElementById('spaceship'));
        this.obstacle1 = new Obstacle(document.getElementById('obstacle_1'), this.updateScore.bind(this));
        this.obstacle2 = new Obstacle(document.getElementById('obstacle_2'), this.updateScore.bind(this));
        this.score = 0;
    }

    moveShip(e) {
        switch (e.key) {
            case "ArrowUp":
                this.spaceship.moveUp();
                break;
            case "ArrowDown":
                this.spaceship.moveDown();
                break;
        }
    }

    stopShip(e) {
        switch (e.key) {
            case "ArrowUp":
                this.spaceship.stop();
                break;
            case "ArrowDown":
                this.spaceship.stop();
                break;
        }
    }

    checkCollision() {
        let s_y1 = this.spaceship.getTopHeight();
        let s_x1 = 200;

        let s_center = [s_x1 + 50, s_y1 + 40];
        let s_radius = 40;

        let o1_y1 = this.obstacle1.getTopHeight();
        let o1_x1 = this.obstacle1.getLeftHeight();

        let o1_center = [o1_x1 + 40, o1_y1 + 40];
        let o1_radius = 40;

        let o2_y1 = this.obstacle2.getTopHeight();
        let o2_x1 = this.obstacle2.getLeftHeight();

        let o2_center = [o2_x1 + 40, o2_y1 + 40];
        let o2_radius = 40;

        if (Math.pow(s_center[0] - o1_center[0], 2) + Math.pow(s_center[1] - o1_center[1], 2) < Math.pow(s_radius + o1_radius, 2)) {
            this.stopGame();
        }

        if (Math.pow(s_center[0] - o2_center[0], 2) + Math.pow(s_center[1] - o2_center[1], 2) < Math.pow(s_radius + o2_radius, 2)) {
            this.stopGame();
        }
    }

    stopGame() {
        this.obstacle1.stop();
        this.obstacle2.stop();
        clearInterval(this.timer)
        this.timer = null;
    }

    updateScore() {
        this.score++;
        document.getElementById('score-value').innerHTML = this.score;
        console.log(this.score);
    }

    async start() {

        document.onkeydown = (e) => this.moveShip(e);
        document.onkeyup = (e) => this.stopShip(e);

        this.obstacle1.move();
        await new Promise((r) => setTimeout(r, 2000));
        this.obstacle2.move();

        if (this.timer) return;
        this.timer = setInterval(() => this.checkCollision(), 3);
    }
}