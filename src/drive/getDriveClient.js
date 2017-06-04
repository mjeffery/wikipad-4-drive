import { once } from '../util'
import getGapi from './getGapi'
import { ensureAuthorized } from './auth'
import { createDocumentLoader } from './realtime'

function instrumentRestfulApi(gapi, api) {
    let newApi = { }

    for(let [key, value] of Object.entries(api) ) {
        if('function' == typeof value) {
            newApi[key] = (...args) => 
                ensureAuthorized()
                    .then( () => value.call(api, ...args) )
                    .then( response => response.result )
        }
    }

    return newApi
}

const getDriveClient = once( () =>
    getGapi()
        .then( gapi => { 
            const driveClient = {
                realtime: { 
                    loadDocument: createDocumentLoader(gapi) 
                }
            }

            const apis = ['files', 'permissions', 'comments', 'replies']

            for(let apiName of apis) {
                let api = gapi.client.drive[apiName] 
                driveClient[apiName] = instrumentRestfulApi(gapi, api)     
            }

            return driveClient
        }))

export default getDriveClient
