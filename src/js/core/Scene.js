import NotificationCenter from './notification_center'
import _ from 'lodash'
import Time from './time'

var _this = null
var forcePause = false
export default class Scene {
    constructor(app) {
        this.entities = []
        this.app = app
        _this = this

        this.app.ticker.add(this.gameLoop)
        this.app.ticker.add(this.collisionUpdate)
    }

    add(args) {
        if(_.has(args, 'renderer')) {
            _this.app.stage.addChild(args.renderer.sprite)
            _this.entities.push(args)
        } else
            _this.app.stage.addChild(args)

        console.log(args)
    }

    remove(args) {
        if(_.has(args, 'renderer')) {
            _this.app.stage.removeChild(args.renderer.sprite)
            _this.entities.remove(args)
        } else
            _this.app.stage.removeChild(args)

    }

    gameLoop(delta) {
        for(let i = 0; i < _this.entities.length; i++) {
            let entity = _this.entities[i]
            entity.update()
        }
        Time.deltaTime = delta
    }

    collisionUpdate(delta) {
        for(let i = 0; i < _this.entities.length; i++) {
            let entity_a = _this.entities[i]
            for(let j = 0; j < _this.entities.length; j++) {
                if(i == j)
                    continue

                let entity_b = _this.entities[j]

                if(entity_a.isOverlapping(entity_b)) {
                    entity_a.onCollisionEnter(entity_b)
                }
            }
        }
    }
}