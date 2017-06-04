import getGapi from '../getGapi'

const requestQueue = []

getGapi()
    .then( gapi => {
        const authInstance = gapi.auth2.getAuthInstance()

        authInstance.isSignedIn.listen( isSignedIn => {
            if(!isSignedIn) return
            requestQueue.forEach( request => request.resolve() )
        })
    })

export default function ensureAuthorized() {
    return getGapi() 
        .then( gapi => {
            const authInstance = gapi.auth2.getAuthInstance()
            if( authInstance.isSignedIn.get() ) {
                return; 
            } else {
                const user = authInstance.currentUser.get()
                const userId = user.getId()

                return new Promise( (resolve, reject) => {
                    requestQueue.push({ userId, resolve, reject })
                })
            }
        })
}
