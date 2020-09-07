import Vec2 from './vec2'

export default class Transform {
    constructor() {
        this.position = new Vec2(0,0)
        this.scale = new Vec2(0,0)
        this.rotation = 0
    }
}