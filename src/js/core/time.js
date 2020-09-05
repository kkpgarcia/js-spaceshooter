class Time {
    constructor() {
        if(!Time.instance)
            Time.instance = this

        this.deltaTime = 0
        this.lastUpdate = 0

        return Time.instance
    }
}

const instance = new Time()

export default instance