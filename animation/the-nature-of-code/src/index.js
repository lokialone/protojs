import Ball from './Ball'
import Mover from './Mover'
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
        x: x- bbox.left *(canvas.width / bbox.width),
        y: y - bbox.top  * (canvas.height / bbox.height)
    }
}

if (canvas.getContext) {
    let ctx = canvas.getContext('2d')
    ctx.mouse = {x: 30, y: 30}

    window.addEventListener('mousemove', (e) => {
        ctx.mouse = getPointOnCanvas(canvas, e.pageX, e.pageY)
    })
    
    // let ball = new Ball(ctx)
    const mover = new Mover(ctx)
    let moverList = []
    Array.from({length: 100}).forEach((item) => {
        moverList.push(new Mover(ctx))
    })
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // ball.draw()
        // mover.draw()
        moverList.forEach(item => {
            item.draw()
        }) 
        window.requestAnimationFrame(render)
    }
    
    render() 
}








