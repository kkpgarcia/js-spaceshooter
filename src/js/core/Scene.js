import NotificationCenter from './notification_center'

var _this = null
export default class Scene {
    constructor(app) {
        this.app = app
        _this = this
    
        NotificationCenter.addObserver(this.add, 'CORE_INSTANTIATION')
        NotificationCenter.addObserver(this.remove, 'CORE_DESTROY')
    }

    add(sender, args) {
        console.log(args)
        _this.app.stage.addChild(args.renderer.sprite)
    }

    remove(sender, args) {
        _this.app.stage.removeChild(args.renderer.sprite)
    }
}