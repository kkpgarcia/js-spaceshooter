import NotificationCenter from './notification_center'
import Transform from './transform'
import Renderer from './renderer'
import Aabb2D from './aabb'
import Vec2 from './vec2'

var _this = null

export default class GameObject {
    constructor(texture) {
        this.transform = new Transform()
        this.renderer = new Renderer(texture)
    }

    update() {
        this.renderer.draw(this.transform)
    }

    isOverlapping(other) {
        var ab = this.renderer.sprite.getBounds();
        var bb = other.renderer.sprite.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }

    onCollisionEnter(other) {
        // console.log('Collided!')
    }
}