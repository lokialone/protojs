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
    canvas.style = 'height: 500px; width: 500px'
    document.body.appendChild(canvas)
    return canvas
}

let canvas = createCanvas()

function getPointOnCanvas(canvas, x, y) {
    let bbox =canvas.getBoundingClientRect();
    return { 
        x: x - bbox.left *(canvas.width / bbox.width),
        y: y - bbox.top  * (canvas.height / bbox.height)
    }
}

if (canvas.getContext) {
    let ctx = canvas.getContext('2d')
    ctx.mouse = {x: 250, y: 250}

    window.addEventListener('mousemove', (e) => {
        ctx.mouse = getPointOnCanvas(canvas, e.pageX, e.pageY)
    })
    
    const balls = []
    Array.from({length: 20}).forEach((item) => {
        balls.push(new BallWithMass(ctx, getRandom(5, 20), getRandom(0, 450), getRandom(0, 450)))
    })
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        balls.forEach(item => {
            item.update()
        })
        window.requestAnimationFrame(render)
    }
    
    render() 
}








