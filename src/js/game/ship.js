import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'
import * as PIXI from 'pixi.js'
import Timer from './timer'
import GameScene from '../core/engine'

export default class Ship extends GameObject {
    constructor(texture) {
        super(texture)
        this.bulletTexture = PIXI.Texture.from('assets/bullet.png')

        this.speed = 5
        this.fireRate = 5
        this.nextShoot = 0
    }

    update() {
        if(InputManager.onKeyDown(InputManager.Keys.RIGHT)) {
            this.transform.position.x += this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.LEFT)) {
            this.transform.position.x -= this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.UP)) {
            this.transform.position.y -= this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.DOWN)) {
            this.transform.position.y += this.speed * Time.deltaTime
        }
        if(InputManager.onKeyDown(InputManager.Keys.SPACE)) {
            //Shoot
            if(this.nextShoot <= 0) {
                var bullet = new Bullet(this.bulletTexture)
                bullet.transform.position.set(this.transform.position.x + this.renderer.sprite.width/2, this.transform.position.y)
                this.nextShoot = this.fireRate
            } 
        }

        if(this.transform.position.x < 0) {
            this.transform.position.x = 0
        }
        if(this.transform.position.x > 1280) {
            this.transform.position.x = 1280
        }
        if(this.transform.position.y < 0) {
            this.transform.position.y = 0 
        }
        if(this.transform.position.y > 720) {
            this.transform.position.y = 720 
        }

        if(this.nextShoot > 0) {
            this.nextShoot -= 1;   
        }
        super.update()
    }
}

class Bullet extends GameObject {
    constructor(texture) {
        super(texture)
        
        this.timer = new Timer(10)
        this.renderer.sprite.width = 50
        this.renderer.sprite.height = 25
    }

    update() {
        if(this.timer == undefined)
            return

        if(!this.timer.hasElapsed()) {
            this.transform.position.x += 20 * Time.deltaTime
            this.timer.update()
        } else {
            GameScene.remove(this)
        }
        super.update()
    }
}