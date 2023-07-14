class Light {
    constructor(x, y, brightness, hue, r) {
        this.x = x
        this.y = y
        this.brightness = brightness
        this.initialHue = hue
        this.hue = hue
        this.r = r
    }

    calculateBrightness() {
        let speed = 1
        if(this.brightness >= 255) {
            speed *= -1
        } else if (this.brightness <= 0) {
            speed *= -1
        }
        this.brightness += speed
    }

    calculateHue() {
        let speed = 1
        if (this.hue >= (this.initialHue + 50) || this.hue > 255) {
            speed = speed * -1
        } 
        // if (this.hue <= (this.initialHue - 50) || this.hue < 0) {
        //     speed = speed * -1
        // }
        this.hue += speed
    }

    draw() {
        
        // this.calculateHue()
        // this.calculateBrightness()
        fill(this.hue, 255, 100, 10)
        ellipse(this.x, this.y, this.r)
    }
}

const count = 50
let lights = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    colorMode(HSB)
    for(let i = 0; i < count; i++) {
        const x = Math.floor(random(windowWidth))
        const y = Math.floor(random(windowHeight))
        const brightness = Math.floor(random(0,255))
        const hue = Math.floor(random(0,255))
        const r = Math.floor(random(3,8)) + 1
        lights.push(new Light(x, y, brightness, hue, r))
    }
}

function draw() {
    // console.log(lights)
    lights.forEach(l => {
        l.draw()
    })
    // console.log(lights[0].hue, lights[0].initialHue)

}

// light
    // x, y
    // brightness
    // hue
    // size
    