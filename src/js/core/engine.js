import NotificationCenter from './notification_center'
import _ from 'lodash'
import Time from './time'
import StateMachine from './statemachine'

var _this = this
class Engine {
    constructor() {
        if(!Engine.instance)
            Engine.instance = this

        _this = this
        
        return Engine.instance
    }

    init(app) {
        this.entities = []
        this.app = app
        this.app.ticker.add(this.gameLoop)
        this.app.ticker.add(this.collisionUpdate)
        this.stateMachine = new StateMachine()
    }

    add(args) {
        if(_.has(args, 'renderer')) {
            this.app.stage.addChild(args.renderer.sprite)
            this.entities.push(args)
        } else
        _this.app.stage.addChild(args)
    }

    remove(args) {
        if(_.has(args, 'renderer')) {
            _this.app.stage.removeChild(args.renderer.sprite)
            _this.entities.filter((value, index, arr) => {
                return value == args
            })
        } else
            _this.app.stage.removeChild(args)

    }

    gameLoop(delta) {
        // if(this.stateMachine == undefined)
        //     return

        // if(this.stateMachine.currentState != undefined)
        //     this.stateMachine.currentState.update()
        if(_this.stateMachine != null && _this.stateMachine.currentState != null) {
            _this.stateMachine.currentState.update()
        }

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

const instance = new Engine()

export default instance