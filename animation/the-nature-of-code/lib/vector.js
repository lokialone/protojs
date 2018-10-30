import { getRandom } from '../lib/tool'

class Vector {

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    set(x, y) {
        this.x = x
        this.y = y
    }

    add(vector) {
        this.x += vector.x
        this.y += vector.y  
    }

    sub(vector) {
        this.x -= vector.x
        this.y -= vector.y
    }

    // 向量乘法
    mult(n) {
        this.x *= n
        this.y *= n
    }

    // 向量除法
    div(n) {
        this.x = this.x / n
        this.y = this.y / n
    }
    // 获取向量长度
    mag() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
    // 将向量变为单位向量
    normalize() {
        let m = this.mag()
        if (m !== 0) {
            this.div(m)
        }  
    }
    // 限制最大值
    limit(max) {
        if (this.x > 0) {
            this.x = Math.min(this.x, max)
        } else {
            this.x = Math.max(this.x, -1 * max)
        }

        if (this.y > 0) {
            this.y = Math.min(this.y, max)
        } else {
            this.y = Math.max(this.y, -1 * max)
        }
       
    } 
}

// 返回向量长度为1的随机向量
Vector.random2D = function() {
    let deg = getRandom(0, Math.PI * 2)
    return new Vector(Math.cos(deg), Math.sin(deg))
}
// 根据2个向量返回一个新向量
Vector.sub = function(vector1, vector2) {
    return new Vector(vector1.x - vector2.x, vector1.y - vector2.y)
}

export default Vector