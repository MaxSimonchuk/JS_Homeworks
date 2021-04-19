class Garland {
    constructor(id) {
        this.lamps = [];
        this.id = id;
        // lamps.push(new BlinkCircle(id, speed));
    }

    create(speed, number) {
        for (let i = 0; i < number; i++) {
            let element = document.createElement("div");
            let section = document.getElementById("container");
            element.idName = 'circle';
            element.id = "circle" + i;
            section.append(element);
            this.lamps.push(new BlinkCircle("circle" + i, speed ));
        }
    }

    blink() {
        for (let i = 0; i < this.lamps.length; i++) {
            this.lamps[i].blink();
        }
    }

    stop() {
        for (let i = 0; i < this.lamps.length; i++) {
            this.lamps[i].stop();
        }
    }
}

class BlinkCircle {
    constructor(id, speed, color){
        this.speed = speed;
        this.element = document.getElementById(id);
        this.color = color;
        this.isSwitchedOn = true;
    }

    blink() {
        this.intervalId = setInterval(() => {
            if(this.color){
                this.element.style.backgroundColor = this.isSwitchedOn ? this.color : 'gray' ;
                // this.isSwitchedOn = this.isSwitchedOn == true ? false : true;
                // this.isSwitchedOn = this.isSwitchedOn ? false : true;
                this.isSwitchedOn = !this.isSwitchedOn ;
            }
            else {
                let r = Math.round(Math.random() * 255);
                let g = Math.round(Math.random() * 255);
                let b = Math.round(Math.random() * 255);
                let circleBg = "background : rgb(" + r + ", "+ g + ", "+ b +");";
                this.element.style = circleBg;
            }
        }, this.speed);
    }

    // blinkTwoColours() {
    //     let colors = [
    //         'gray',
    //         'yellow',
    //     ];
    //     this.intervalId = setInterval(() => {
    //         this.element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    //     }, this.speed);
    // }

    stop() {
        if (this.intervalId)
            clearInterval(this.intervalId);
    }
}
