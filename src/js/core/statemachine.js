export default class StateMachine {
    constructor() {
        this.currentState = {
            enter: () => {},
            exit: () => {}
        }
        this.inTransition = false
    }

    getState() {
        return this.currentState
    }

    changeState(value) {
        if(this.currentState == value || this.inTransition)
            return
        
        this.inTransition = false

        if(this.currentState != null)
            this.currentState.exit()

        this.currentState = value

        if(this.currentState != null)
            this.currentState.enter()

        this.inTransition = false
    }
}