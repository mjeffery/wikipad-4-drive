import getGapi from '../getGapi'

export default function tryRefreshToken(error) {
     return getGapi()
        .then( gapi => {
            if( error.type == gapi.drive.realtime.ErrorType.TOKEN_REFRESH_REQUIRED ) {
                const user = gapi.auth2.getAuthInstance().currentUser.get()
                return user.reloadAuthResponse()
            }

            return Promise.reject(error)
        })
}
