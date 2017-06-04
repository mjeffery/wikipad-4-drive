import createHistory from 'history/createHashHistory'
import queryString from 'query-string'

import Route from './Route'

let nextDispatchId = 0

export default class Router {

    constructor() {
        this._running = false
        this._callbacks = []
    }

    on(path, ...callbacks) {
        let route = new Route(path)
        for(let callback of callbacks) {
            this._callbacks.push( route.middleware(callback) )
        }
       
        return this
    }

    start() {
        if(this._running) return false;

        this._running = true

        let listener = (location, action) => {
            let context = {
                path: location.pathname,
                query: queryString.parse(location.search),
                params: {},
                redirect: path => history.replace(path)
            }

            this.dispatch(context)
        }

        let history = createHistory()

        listener(history.location, 'START')
        history.listen(listener)
    }

    dispatch(ctx) {
        let dispatchId = this._currentDispatchId = nextDispatchId++
        let i = 0
        let next = () => {
            let callback = this._callbacks[i++] 
            if(callback && dispatchId == this._currentDispatchId) {
                callback(ctx, next) 
            }
        }

        next()
    }
}
