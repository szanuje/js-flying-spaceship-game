export default class Obstacle {
    constructor(htmlElem, scoreUpdater) {
        this.timer;
        this.elem = htmlElem;
        this.speed = 1.0;
        this.elem.style.top = (this.randInt(0, 3) * 100) + 50 + 'px';
        this.backgroundElem = htmlElem.childNodes[1];
        this.backgrounds = [
            'img/planet_1.png',
            'img/planet_2.png',
            'img/planet_3.png',
            'img/planet_4.png',
            'img/planet_5.png',
            'img/planet_6.png',
            'img/planet_7.png',
            'img/planet_8.png',
        ]
        this.scoreUpdater = scoreUpdater;
    }

    switchBackground() {
        let randomIdx = this.randInt(0, 8);
        this.backgroundElem.src = this.backgrounds[randomIdx];
    }

    getTopHeight() {
        return parseInt(this.elem.style.top);
    }

    getLeftHeight() {
        return parseInt(this.elem.style.left);
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    respawn() {
        this.elem.style.left = '800px';
        this.elem.style.top = (this.randInt(0, 3) * 100) + 50 + 'px';
        this.increaseSpeed();
        this.switchBackground();
        this.scoreUpdater();
    }

    increaseSpeed() {
        this.speed += Math.random() / 5.0;
        console.log(this.elem.id + ' speed = ' + this.speed);
    }

    async move() {
        if (this.timer) return;
        this.timer = setInterval(() => this.moveObstacle(), 4);
    }

    moveObstacle() {

        if (parseInt(this.elem.style.left) <= -100) {

            this.respawn();
        }
        this.elem.style.left = (parseInt(this.elem.style.left) - this.speed) + 'px';
    }

    randInt(low, high) {
        return (Math.floor(Math.random() * 10000) % (high - low)) + low;
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

}