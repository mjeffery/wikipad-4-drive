import getDriveClient from './getDriveClient'

export default function createDocument({ folderId }) {
    let metadata = {
        name: 'Untitled Wiki',
        mimeType: 'application/vnd.google-apps.drive-sdk'
    }

    if(folderId) {
        metadata.parents = [ folderId ]
    }
    
    return getDriveClient()
        .then( drive => {
            return drive.files.create({
                resource: metadata,
                fields: ['id', 'name'].join(', ')
            })
                .then( file => drive.realtime.loadDocument(file) )
                .then( realtimeDocument => {
                    console.log('it happened!')
                })
        })
}
