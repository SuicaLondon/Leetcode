type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}


class EventEmitter {
    emitters: { string?: Callback[] } = {}
    subscribe(eventName: string, callback: Callback): Subscription {
        if (this.emitters[eventName] == undefined) {
            this.emitters[eventName] = []
        }
        this.emitters[eventName].push(callback)
        return {
            unsubscribe: () => {
                if (this.emitters[eventName].length > 0) {
                    this.emitters[eventName].shift()
                } else {
                    delete this.emitters[eventName]
                }
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        if (this.emitters[eventName] === undefined) {
            return []
        }
        const keys = Object.keys(this.emitters)
        for (let i = 0; i < keys.length; i++) {

        }
        return this.emitters[eventName].map((callback: Callback) => callback(...args))
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
