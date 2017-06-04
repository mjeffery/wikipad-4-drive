let initialized = undefined
const initialize = new Promise( (resolve, reject) => { initialized = resolve } )

function init() {
    gapi.client.init({
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        clientId: '%CLIENT_ID%',
        scope: [
            'profile', 
            'https://www.googleapis.com/auth/drive.file', 
        ].join(' ')
    })

       .then( () => initialized(gapi) )
}

window.handleClientLoad = function() {
    gapi.load('auth2:client,drive-realtime,drive-share', init)    
}

export default function getGapi() { return initialize }
