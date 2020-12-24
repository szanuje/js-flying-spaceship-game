export default class Spaceship {
    constructor(htmlElem) {
        this.elem = htmlElem;
        this.timer;
    }

    moveVertical(px) {
        let topHeight = parseInt(this.elem.style.top)
        if (topHeight >= 50 && topHeight <= 270) {
            this.elem.style.top = (topHeight + px) + 'px';
        } else {
            if (topHeight <= 50) this.elem.style.top = '50px';
            if (topHeight >= 270) this.elem.style.top = '270px';
        }
    }

    moveUp() {
        if (this.timer) return;
        this.timer = setInterval(() => this.moveVertical(-2), 2);
    }

    moveDown() {
        if (this.timer) return;
        this.timer = setInterval(() => this.moveVertical(2), 2);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }

    getTopHeight() {
        return parseInt(this.elem.style.top);
    }
}