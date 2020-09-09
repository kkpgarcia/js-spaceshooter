import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'

export default class Ship extends GameObject {
    constructor(texture) {
        super(texture)
    }

    update() {
        if(InputManager.onKeyDown(InputManager.Keys.D)) {
            this.transform.position.x += 1 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.A)) {
            this.transform.position.x -= 1 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.W)) {
            this.transform.position.y -= 1 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.S)) {
            this.transform.position.y += 1 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.SPACE)) {
            //Shoot
        }
        
        super.update()
    }
}

class Bullet extends GameObject {
    constructor(texture) {
        super(texture)
    }

    update() {
        super.update()
    }
}