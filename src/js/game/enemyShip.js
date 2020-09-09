import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'
import GameScene from '../core/game_scene'

export default class EnemyShip extends GameObject {
    constructor(texture) {
        super(texture)
    }

    update(sender, args) {
        super.update()
    }

    onCollisionEnter(other) {
        GameScene.remove(this)
    }
}