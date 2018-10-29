import Vector from '../lib/vector'

class Ball {
    constructor(ctx, x = 30, y = 30, xSpeed = 2, ySpeed = 2) {
        this.ctx = ctx
        this.radius = 20
        this.width = ctx.canvas.width
        this.height = ctx.canvas.height
        this.x = x
        this.y = y
        this.xSpeed = xSpeed
        this.ySpeed = ySpeed
    }

    draw() {
        this.clear()
        let ctx = this.ctx
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        this.isEdge()
        this.x += this.xSpeed
        this.y += this.ySpeed
        window.requestAnimationFrame(() => this.draw())
    }
    
    // clear canvas 
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    isEdge() {
        if (this.x + this.radius >= this.width || this.x < this.radius) {
            this.xSpeed = -1 * this.xSpeed
        }
        if (this.y + this.radius >= this.height || this.y < this.radius) {
            this.ySpeed = -1 * this.ySpeed
        }
    }
}

class BallWithVector {

    constructor(ctx, x = 30, y = 30, xSpeed = 2, ySpeed = 2 ) {
        this.ctx = ctx
        this.radius = 20

        this.width = ctx.canvas.width
        this.height = ctx.canvas.height
        this.location = new Vector(x, y)
        this.speed = new Vector(xSpeed, ySpeed)
    }

    draw() {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        this.isEdge()
        this.location.add(this.speed)
    }

    isEdge() {
        if (this.location.x + this.radius >= this.width || this.location.x < this.radius) {
            this.speed.x = -1 * this.speed.x
        }
        if (this.location.y + this.radius >= this.height || this.location.y < this.radius) {
            this.speed.y = -1 * this.speed.y
        }
    }
}

// 感受是也没啥大区别

export default BallWithVector