import GameObject from '../core/gameobject'
import InputManager from '../core/input_handler'
import Time from '../core/time'
import * as PIXI from 'pixi.js'
import Timer from './timer'
import GameScene from '../core/game_scene'

export default class Ship extends GameObject {
    constructor(texture) {
        super(texture)
        this.bulletTexture = PIXI.Texture.from('assets/bullet.png')

        this.speed = 5
        this.fireRate = 5
        this.nextShoot = 0
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
            if(this.nextShoot <= 0) {
                var bullet = new Bullet(this.bulletTexture)
                bullet.transform.position.set(this.transform.position.x + this.renderer.sprite.width/2, this.transform.position.y)
                this.nextShoot = this.fireRate
            } 
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
            delete this.timer
            GameScene.remove(this)
        }
        super.update()
    }
}