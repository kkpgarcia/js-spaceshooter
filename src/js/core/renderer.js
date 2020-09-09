import * as PIXI from 'pixi.js'

export default class Renderer {
    constructor(texture) {
        this.sprite = new PIXI.Sprite(texture)
        this.sprite.anchor.set(0.5)
        console.log(texture.textureCacheIds)
    }

    draw(transform) {
        // console.log(this.sprite.texture.textureCacheIds)
        this.sprite.position.x = transform.position.x
        this.sprite.position.y = transform.position.y
    }
}