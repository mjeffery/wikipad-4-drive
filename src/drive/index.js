import { createDocumentLoader } from './realtime'

window.handleClientLoad = function() {
    gapi.load('client,drive-realtime,drive-share', init)    
}

let initialize = undefined
const initialized = new Promise( (resolve, reject) => { initialize = resolve } )

function init() {
    gapi.client.init({
		discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
        ],
		clientId: '%CLIENT_ID%',
		scope: [
			'profile', 
			'https://www.googleapis.com/auth/drive.file', 
		].join(' ')
	})
        .then( () => initialize(gapi) )
}

function createDocument({ folderId }) {
    let metadata = {
        name: 'Untitled Wiki',
        mimeType: 'application/vnd.google-apps.drive-sdk'
    }

    if(folderId) {
        metadata.parents = [ folderId ]
    }
    
    return initialized
        .then( createDocumentLoader ) //TODO this file loader should like... go somewhere?
        .then( realtimeFileLoader => {
            return gapi.client.drive.files.create({
                resource: metadata,
                fields: ['id']
            })
            .then( file => realtimeFileLoader(file.id) )
        })
        .then( realtimeDocument => {
            console.log('it happenened!') 
        })
    
}

export default { createDocument }
