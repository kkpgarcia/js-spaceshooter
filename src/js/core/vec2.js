export default class Vec2 {
    constructor(x, y) {
        this.set(x, y)
    }

    set(vec) {
        this.set(vec.x, vec.y)
    }

    set(x, y) {
        this.x = x
        this.y = y
    }

    add(vec) {
        this.x += vec.x
        this.y += vec.y
    }

    sub(vec) {
        this.x -= vec.x
        this.y -= vec.y
    }

    div(scale) {
        this.x /= scale
        this.y /= scale
    }

    mul(vec) {
        this.x *= vec.x
        this.y *= vec.y
    }

    scale(scale) {
        this.x *= scale
        this.y *= scale
    }

    lengthSq() {
        return x * x + y * y
    }

    magnitude() {
        return Math.sqrt(this.lengthSq())
    }

    rotate(radians) {
        cos = Math.cos(radians)
        sin = Math.sin(radians)

        _x = x * cos - y * sin
        _y = x * sin + y * cos

        x = _x
        y = _y
    }
    
    normalize() {
        //Epsilon = 0.0002
        if(this.lengthSq() >  0.0002 *  0.0002)  {
            invLen = 1 / Math.sqrt(this.lengthSq())
            x *= invLen
            y *= invLen
        }
    }

    static dot(a, b) {
        return a.x * b.x + a.y * b.y
    }

    static cross(a, b) {
        return a.x * b.y - a.y * b.x
    }

    static distanceSq(a, b) {
        dx = a.x - b.x
        dy = a.y - b.y
        
        return dx * dx + dy * dy
    }

    static distance(a, b) {
        dx = a.x - b.x
        dy = a.y - b.y

        return Math.sqrt(dx * dx + dy * dy)
    }
}