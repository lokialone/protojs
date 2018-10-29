import Vector from '../lib/vector'
import { getRandom } from '../lib/tool'

export default class Mover {
    constructor(ctx, x = 30, y = 30, xSpeed = 2, ySpeed = 2 ) {
        this.ctx = ctx
        this.radius = 4

        this.width = ctx.canvas.width
        this.height = ctx.canvas.height
        this.location = new Vector(getRandom(0, this.width), getRandom(0, this.height))
        this.speed = new Vector(xSpeed, ySpeed)
        this.acceleration = new Vector(getRandom(-0.01, 0.01), getRandom(-0.01, 0.01))
        let i = getRandom(0, 4)
        let j = getRandom(0, 4)
        // fillColor
        this.style = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ')'
    }

    draw() {
        let ctx = this.ctx
        this.display()
        let mouse = new Vector(ctx.mouse.x, ctx.mouse.y)
        let dir = Vector.sub(mouse, this.location)
        dir.normalize()
        dir.mult(0.5)
        this.acceleration = dir
        // this.acceleration = Vector.random2D()
        this.speed.add(this.acceleration)
        this.speed.limit(4)
        this.location.add(this.speed)
        
    }

    display() {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.fillStyle = this.style
        ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        this.isEdge()
    }

    isEdge() {
        if (this.location.x > this.width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = this.width;
        }
    
        if (this.location.y > this.height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = this.height;
        }
    }
}