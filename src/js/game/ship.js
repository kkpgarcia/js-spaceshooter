import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'
import * as PIXI from 'pixi.js'

export default class Ship extends GameObject {
    constructor(texture) {
        super(texture)
        this.bulletTexture = PIXI.Texture.from('assets/bullet.png')

        this.speed = 5
    }

    update() {
        if(InputManager.onKeyDown(InputManager.Keys.D)) {
            this.transform.position.x += this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.A)) {
            this.transform.position.x -= this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.W)) {
            this.transform.position.y -= this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.S)) {
            this.transform.position.y += this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.SPACE)) {
            //Shoot
            
            var bullet = new Bullet(this.bulletTexture)
            bullet.transform.position.set(this.transform.position.x, this.transform.position.y)
            
        }
        
        super.update()
    }
}

class Bullet extends GameObject {
    constructor(texture) {
        super(texture)

        this.renderer.sprite.width = 50
        this.renderer.sprite.height = 25
    }

    update() {
        this.transform.position.x += 20 * Time.deltaTime
        super.update()
    }
}