import Vector from '../lib/vector'

class Ball {

    constructor(ctx, r = 20, x = 30, y = 30 ) {
        this.ctx = ctx
        this.radius = r
        this.mass = this.radius * 1
        this.width = ctx.canvas.width
        this.height = ctx.canvas.height
        this.location = new Vector(x, y)
        this.speed = new Vector(0, 0)
        this.acceleration = new Vector(0, 0)
        this.wind = new Vector(1, 0)
        this.gravity = new Vector(0, 1 * this.mass)
        this.u = 0.004

    }

    update() {
        this.display()
        // 空气阻力
        let friction = new Vector(this.speed.x, this.speed.y)
        friction.normalize()
        friction.mult( -1* this.u)
        // 空气阻力
        this.applyForce(friction)
        this.applyForce(this.wind)
        this.applyForce(this.gravity)
        this.speed.add(this.acceleration)
        this.location.add(this.speed)
    }
    // 绘制函数
    display() {
        let ctx = this.ctx
        ctx.beginPath()
        ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        this.isEdge()
    }

    applyForce(f) {
        f.div(this.mass)
        this.acceleration.add(f)
    }

    isEdge() {
        if (this.location.x < this.radius) {
            this.speed.x = -1 * Math.abs(this.speed.x)
        }

        if (this.location.x + this.radius >= this.width) {
            this.speed.x = -1 * Math.abs(this.speed.x)
            this.location.x = this.width - this.radius
        }

        if (this.location.y < this.radius) {
            this.speed.y = -1 * Math.abs(this.speed.y)
        }
        if (this.location.y + this.radius >= this.height) {
            this.location.y = this.height - this.radius
            this.speed.y = -1 * Math.abs(this.speed.y)
        }
    }
}

export default Ball