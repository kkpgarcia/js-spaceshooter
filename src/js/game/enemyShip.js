import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'

export default class EnemyShip extends GameObject {
    constructor(texture) {
        super(texture)
    }

    update(sender, args) {
        super.update()
    }

    onCollisionEnter(other) {
        console.log('Enemy collided')
    }
}