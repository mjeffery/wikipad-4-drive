import customObjects from './custom'
import modelInitializer from './modelInitializer'
import { tryRefreshToken } from '../auth'

export function createDocumentLoader(gapi) {

    return function loadDocumentForFile(file) {
        let initNewModel = modelInitializer.create(gapi)

        customObjects.register(gapi);

        const load = () => 
            new Promise( (resolve, reject) => {
                gapi.drive.realtime.load(
                    file.id,
                    realtimeDocument => resolve(realtimeDocument),
                    initNewModel,
                    error => tryRefreshToken(error).catch( reject )
                )
            })

        return load()
    }
    
}
