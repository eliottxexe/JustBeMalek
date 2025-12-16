const canvas = document.getElementById('background')
const ctx = canvas.getContext('2d')

let w, h, cx, cy

function resize() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
    cx = w / 2
    cy = h / 2
}
window.addEventListener('resize', resize)
resize()

const particles = Array.from({ length: 40 }, () => spawn())

function spawn() {
    const offset = Math.min(w, h) * 0.15
    const angle = Math.random() * Math.PI * 2
    return {
        x: cx + Math.cos(angle) * (Math.random() * offset),
        y: cy + Math.sin(angle) * (Math.random() * offset),
        angle,
        length: 30 + Math.random() * 25,
        speed: 5 + Math.random() * 0.8,
        opacity: 0.18 + Math.random() * 0.25
    }
}

function draw() {
    ctx.clearRect(0, 0, w, h)

    particles.forEach((p, i) => {
        ctx.strokeStyle = `rgba(90,174,214,${p.opacity})`
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(
            p.x + Math.cos(p.angle) * p.length,
            p.y + Math.sin(p.angle) * p.length
        )
        ctx.stroke()

        p.x += Math.cos(p.angle) * p.speed
        p.y += Math.sin(p.angle) * p.speed

        if (
            p.x < -100 || p.x > w + 100 ||
            p.y < -100 || p.y > h + 100
        ) {
            particles[i] = spawn()
        }
    })

    requestAnimationFrame(draw)
}

draw()