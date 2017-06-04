import customObjects from './custom'
import modelInitializer from './modelInitializer'

export function createDocumentLoader(gapi) {

    return function loadDocumentForFile(file) {
        let initNewModel = modelInitializer.create(gapi)

        customObjects.register(gapi);
        
        return new Promise( (resolve, reject) => {
            gapi.drive.realtime.load(
                file.id,
                realtimeDocument => resolve(realtimeDocument),
                initNewModel,
                error => reject(error) //TODO not a good idea...
            )
        })
    }
    
}
