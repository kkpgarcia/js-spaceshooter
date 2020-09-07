import NotificationCenter from './notification_center'
import Transform from './transform'
import * as PIXI from 'pixi.js'
import InputManager from './input_handler'
import Time from './time'

var _this = null

export default class GameObject {
    constructor(texture) {
        // this.tag = ''
        this.transform = new Transform()
        
        //To Sprite class
        this.sprite = new PIXI.Sprite(texture)
        this.sprite.anchor.set(0.5)
        this.sprite.x = 160
        this.sprite.y = 160

        _this = this
        
        NotificationCenter.addObserver(this.update, 'CORE_UPDATE')
    }

    update(sender, args) {

        if(InputManager.onKeyDown(InputManager.Keys.D)) {
            _this.transform.position.x += 150 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.A)) {
            _this.transform.position.x -= 150 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.W)) {
            _this.transform.position.y -= 150 * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.S)) {
            _this.transform.position.y += 150 * Time.deltaTime
        }

        _this.sprite.x = _this.transform.position.x
        _this.sprite.y = _this.transform.position.y
    }
    
    destroy() {
        NotificationCenter.removeObserver(update, 'CORE_UPDATE')
        delete this
    }
}