import pathToRegexp from 'path-to-regexp'

// based on https://github.com/visionmedia/page.js
export default class Route {

    constructor(path) {
        this.keys = []
        this.regex = pathToRegexp(path, this.keys)
    }

    middleware(fn) {
        return (ctx, next) => this.match(ctx.path, ctx.params) ? fn(ctx, next) : next()
    }

    match(path, params) {
        let match = this.regex.exec(path) 
        
        if(!match) return false;

        for(let i = 1; i < match.length; i++) {
            let key = this.keys[i - 1]
            let value = match[i]

            if( value !== undefined && !params.hasOwnProperty(key.name) ) {
                params[key.name] = value
            }
        }

        return true;
    }
}
