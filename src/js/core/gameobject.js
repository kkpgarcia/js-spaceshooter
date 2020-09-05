import NotificationCenter from './notification_center'

export default class GameObject {
    constructor() {
        // this.tag = ''
        // this.transform = ''
        // this.aabb = ''
        // this.renderer = ''
        NotificationCenter.addObserver(update, 'CORE_UPDATE')
    }

    update(sender, args) {}
    
    destroy() {
        NotificationCenter.removeObserver(update, 'CORE_UPDATE')
        delete this
    }
}