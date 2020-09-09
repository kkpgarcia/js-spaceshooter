import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'

let _this = null

export default class Ship extends GameObject {
    constructor(texture) {
        super(texture)
        _this = this
    }

    update(sender, args) {
        if(InputManager.onKeyDown(InputManager.Keys.D)) {
            _this.transform.position.x += 1 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.A)) {
            _this.transform.position.x -= 1 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.W)) {
            _this.transform.position.y -= 1 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.S)) {
            _this.transform.position.y += 1 * Time.deltaTime
        }
        
        super.update(sender, args)
    }
}