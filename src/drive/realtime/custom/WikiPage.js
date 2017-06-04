import EditorState from './EditorState'

export default function WikiPage() { }

WikiPage.register = gapi => {
    const custom = gapi.drive.realtime.custom

    Object.assign(WikiPage.prototype, {
        text:    custom.collaborativeField('text'),
        viewers: custom.collaborativeField('viewers'),

        addViewer: function(collaborator) {
            let userId = collaborator.userId;

            if( !this.viewers.has(userId) ) {
                let model = custom.getModel(this)
                let viewer = model.create(EditorState, this)
                
                model.beginCompoundOperation('', false)
                this.viewers.set(userId, viewer)
                model.endCompoundOperation()
            }
        },
        
        removeViewer(collaborator) {
            let userId = collaborator.userId

            if( this.viewers.has(userId) ) {
                let model = custom.getModel(this)

                model.beginCompoundOperation('', false)
                this.viewers.delete(userId)
                model.endCompoundOperation()
            }
        }
    })

    function initialize(text) {
        let model = custom.getModel(this)

        this.text = model.createString()
        this.viewers = model.createMap()
    }

    custom.registerType(WikiPage, 'WikiPage')
    custom.setInitializer(WikiPage, initialize)
}
