import * as PIXI from 'pixi.js'

export default class Renderer {
    constructor(texture) {
        this.sprite = new PIXI.Sprite(texture)
        this.sprite.anchor.set(0.5)
    }

    draw(transform) {
        this.sprite.x = transform.position.x
        this.sprite.y = transform.position.y
    }
}