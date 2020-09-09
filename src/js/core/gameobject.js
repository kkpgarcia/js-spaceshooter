import NotificationCenter from './notification_center'
import Transform from './transform'
import Renderer from './renderer'
import Aabb2D from './aabb'
import Vec2 from './vec2'
import Engine from './engine'

var _this = null

export default class GameObject {
    constructor(texture) {
        this.transform = new Transform()
        this.renderer = new Renderer(texture)
        Engine.add(this)
        // this.aabb = new Aabb2D(new Vec2(100,100), new Vec2(200, 200), this.renderer.sprite)
        //console.log('Called')
        // NotificationCenter.addObserver(this.update, 'CORE_UPDATE')
        
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