import Ball from './Ball'
import Mover from './Mover'
import BallWithMass from './BallWithMass'
import { getRandom } from '../lib/tool'
import '../lib/shim'

let canvasId = 0
function createCanvas(width = 500, height = 500) {
    let canvas = document.createElement('canvas')
    canvas.id = 'canvas' + canvasId
    canvasId++
    canvas.width = width
    canvas.height = height
    canvas.style = 'height: 500px; width: 500px;border:1px solid gray;'
    document.body.appendChild(canvas)
    return canvas
}

let canvas = createCanvas()

// cacheCanvas
let cacheCanvas = document.createElement('canvas')
cacheCanvas.width = canvas.width
cacheCanvas.height =canvas.height

function getPointOnCanvas(canvas, x, y) {
    let bbox =canvas.getBoundingClientRect();
    return { 
        x: x - bbox.left *(canvas.width / bbox.width),
        y: y - bbox.top  * (canvas.height / bbox.height)
    }
}

if (canvas.getContext) {
    let ctx = canvas.getContext('2d', { alpha: false })
    let cacheCtx = cacheCanvas.getContext('2d', { alpha: false })
    ctx.mouse = {x: 250, y: 250}

    window.addEventListener('mousemove', (e) => {
        ctx.mouse = getPointOnCanvas(canvas, e.pageX, e.pageY)
    })
    
    const balls = []
    let ball = new BallWithMass(cacheCtx, 40, 60, 10)
    // Array.from({length: 20}).forEach((item) => {
    //     balls.push(new BallWithMass(ctx, getRandom(5, 20), getRandom(0, 450), getRandom(0, 450)))
    // })
    // 尝试双缓冲技术
 
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        cacheCtx.clearRect(0, 0, canvas.width, canvas.height)
        ball.update()
        ctx.drawImage(cacheCanvas, 0, 0, canvas.width, canvas.height)
        window.requestAnimationFrame(render)
    }
    
    render() 
}








