function MovingRect(id, x, y, speed){
    this.movingRect = document.getElementById(id);
    this.x = x;
    this.y = y;
    if (speed) {
        this.dx = speed;
        this.dy = speed;
    } else {
        this.dx =  Math.random()*1;
        this.dy = Math.random()* 2.5;
    }

    this.getRandomColor = function() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    this.movingRect.style.backgroundColor = this.getRandomColor();

    this.move = function() {
        const RECT_WIDTH = 100;
        this.intervalId = setInterval( ()=> {
            this.movingRect.style.left = this.x + 'px';
            this.movingRect.style.top = this.y + 'px';
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > window.innerWidth -RECT_WIDTH || this.x < 0) {
                this.dx = -this.dx;
            }
            if (this.y > window.innerHeight -RECT_WIDTH || this.y < 0) {
                this.dy = -this.dy;
            }
        }, 20);
    };

    this.stop = function() {
        clearInterval(this.intervalId);
    };
}

function DisplayedRects(rectNumber, speed) {
    this.rect = [];

    this.create = function () {
        for (let i = 0; i < rectNumber; i++) {
            let element = document.createElement("div");
            element.className = 'rect';
            element.id = "square" + i;
            document.body.append(element);
            this.rect.push(new MovingRect("square" + i , Math.random() * 1400,Math.random() * 550, speed));
        }
        for (let i = 0; i < this.rect.length; i++) {
            this.rect[i].move();
            setTimeout(()=> this.rect[i].stop(), 20000);
        }
    }
}