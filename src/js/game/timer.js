import Time from '../core/time'

export default class Timer {
    constructor(duration) {
        this.duration = duration
    }

    update() {
        this.duration -= Time.deltaTime / 10
    }

    hasElapsed() {
        return this.duration <= 0
    }
}
