import NotificationCenter from './notification_center'
import Transform from './transform'
import Renderer from './renderer'

var _this = null

export default class GameObject {
    constructor(texture) {
        this.transform = new Transform()
        this.renderer = new Renderer(texture)

        _this = this
        
        NotificationCenter.addObserver(this.update, 'CORE_UPDATE')
        NotificationCenter.postNotification('CORE_INSTANTIATION', _this, _this)
    }

    update(sender, args) {
        _this.renderer.draw(_this.transform)
    }
}