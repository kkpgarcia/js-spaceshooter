import _ from 'lodash'

class NotificationCenter {
    constructor() {
        if(!NotificationCenter.instance) {
            NotificationCenter.instance = this
        }

        this.table = new Array()
        this.invoking = new Array()

        return NotificationCenter.instance
    }

    addObserver(callback, name) {
        this.addObserver(callback, name, null)
    }

    addObserver(callback, name, sender) {
        if(callback == null) {
            console.log('Can\'t add a null callback for notification, ' + name)
            return
        }

        if(_.isEmpty(name) || name == '') {
            console.log('Can\'t observe an unnamed notification')
            return
        }

        if(!(name in this.table))
            this.table[name] = new Array()

        let subTable = this.table[name]
        let key = (sender != null) ? sender : this

        if(!(key in subTable))
            subTable[key] = new Array()
        
        let list = subTable[key]
        
        if(!(callback in list)) {
            if((list in this.invoking))
                subTable[key] = list = new Array(list)
            
            list.push(callback)
        }
    }

    removeObserver(callback, name) {
        this.removeObserver(callback, name, null)
    }

    removeObserver(callback, name, sender) {
        if(callback == null) {
            console.log('Can\'t remove a null callback for notification, ' + name)
            return
        }

        if(_.isEmpty(name) || name == '') {
            console.log('Can\'t observe an unnamed notification')
            return
        }

        if(!(name in this.table))
            return

        let subTable = this.table[name]
        let key = (sender != null) ? sender : this

        if(!(key in subTable))
            return
            
        let list = subTable[key]
        let index = list.indexOf(callback)
        
        if(index != -1) {
            if(list in this.invoking)
                subTable[key] = list = new Array(list)
            delete list[index] 
        }
    }

    clean() {}

    postNotification(name) {
        this.postNotification(name, null)
    }

    postNotification(name, sender) {
        this.postNotification(name, sender, null)
    }

    postNotification(name, sender, args) {
        if(_.isEmpty(name) || name == '') {
            console.log('A notification name is required')
            return
        }

        if(!(name in this.table))
            return
        
        let subTable = this.table[name]

        if(sender != null && (sender in subTable)) {
            let handlers = subTable[sender]
            this.invoking.push(handlers)

            for(let i = 0; i < handlers.length; ++i)
                handlers[i](sender, args)
            
            _.remove(this.invoking, item => item == handlers)
        }

        if((this in subTable)) {
            let handlers = subTable[this]
            this.invoking.push(handlers)

            for(let i = 0; i < handlers.length; ++i) {
                if(handlers[i] == null)
                    continue
                handlers[i](sender, args)
            }
            
            _.remove(this.invoking, item => item == handlers)
        }
    }
}

const instance = new NotificationCenter()
Object.freeze(instance)

export default instance