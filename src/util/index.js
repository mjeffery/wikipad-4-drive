export function once(fn) {
    let result, called = false;
    
    return function(...args) {
        if(!called) {
            called = true
            result = fn(...args)
        }
           
        return result
    }
}

export function pick(object, keys) {
    return (keys || []).reduce( (result, key) => {
        if(key in object) result[key] = object[key]
        return result
    }, {})
}

export function promisify(fn, context) {
    return function(...args) {
        context = context || this
        
        return new Promise( (resolve, reject) => {
            const callback = (err, retVal) => {
                err ? reject(err) : resolve(retVal)
            }
            fn.call(context, ...args, callback)
        })
    }
}

export function promisifyAll(object) {
    let promisified = [] 
    
    for(let [key, value] of Object.entries(object)) {
        if('function' == typeof value) {
            promisified[key] = promisify(value, object)
        }
    }

    return promisified 
}
