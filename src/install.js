window.handleClientLoad = function() {
	gapi.load('client:auth2', start)
}
	
function start() {
	gapi.client.init({
		discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
		clientId: '%CLIENT_ID%',
		scope: [
			'profile', 
			'https://www.googleapis.com/auth/drive.file', 
			'https://www.googleapis.com/auth/drive.install'
		].join(' ')
	}).then( () => {
		console.log('initialized') 
		gapi.auth2.getAuthInstance().signIn();
	})
}
