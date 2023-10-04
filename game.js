// October 1 2023. Pursuit: John Goodman class
const canvas=document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let duckImage = new Image()
duckImage.src = "sun.png"

// setTimeout(() => { ctx.drawImage(duckImage, 100, 200)},100)


class GameObject {
    constructor(x=0, y=0){
        this.image = null
        this.position = {
            x: x,
            y: y
        }
        this.speed = {
            x: 5,
            y: 2
        }
    }

    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

    move(){
        //this.position.x += this.speed.x
        this.position.y += this.speed.y

        if (this.position.y >= canvas.height-40){
            this.position.y=canvas.height-40
        }
        //duck.position.y += 8
        this.speed.y += 1  //speeding up
    }

    jump(){
        this.speed.y = -10
    }
}


let duck = new GameObject();

duck.image = duckImage;
duck.position.y = 1


document.addEventListener("keydown", (event) => {
    console.log(event.code)
    if(event.code === "ArrowUp") {
        duck.jump()
    }
})

setInterval(() => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    duck.move()
    duck.draw()

}, 80)