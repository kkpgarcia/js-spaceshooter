import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'

let _this = null

export default class EnemyShip extends GameObject {
    constructor(texture) {
        super(texture)
        
        _this = this
    }

    update(sender, args) {
        super.update(sender, args)
    }

    onCollisionEnter(other) {
        console.log('Enemy collided')
    }
}