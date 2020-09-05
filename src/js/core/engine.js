import Time from './time'
import NotificationCenter from './notification_center'

export default class Engine {
    run() {
        //this.frameInterval, startTime, now, then, elapsed
        
        this.tick = (timeStamp) => {
            var fpsInterval = 1 / 30
            Time.deltaTime = (timeStamp - Time.lastUpdate) * fpsInterval
            
            if(Time.deltaTime > fpsInterval) {
                NotificationCenter.postNotification('CORE_UPDATE')
                Time.lastUpdate = timeStamp - (Time.deltaTime % fpsInterval)
            }
            
            window.requestAnimationFrame(this.tick)
        }
        
        window.requestAnimationFrame(this.tick)
    }
}
