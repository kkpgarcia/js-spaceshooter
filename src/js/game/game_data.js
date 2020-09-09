class GameData {
    constructor() {
        if(!GameData.instance)
            GameData.instance = this

        return GameData.instance
    }
}

const instance = new GameData()

export default instance