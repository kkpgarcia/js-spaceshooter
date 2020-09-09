import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'
import GameScene from '../core/engine'

export default class EnemyShip extends GameObject {
    constructor(texture) {
        super(texture)
    }

    update(sender, args) {
        this.transform.position.x -= Time.deltaTime
        super.update()
    }

    onCollisionEnter(other) {
        GameScene.remove(this)
    }
}