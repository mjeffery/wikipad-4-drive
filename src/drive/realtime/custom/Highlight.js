export default function Highlight() {}

Highlight.register = gapi => {

    const custom = gapi.drive.realtime.custom;
    const CollaborativeString = gapi.drive.realtime.CollaborativeString;
    const DeleteMode = gapi.drive.realtime.IndexReference.DeleteMode;

    Object.assign(Highlight.prototype, {
        start: custom.collaborativeField('start'),
        end: custom.collaborativeField('end')
    })

    function initialize(text) {
        if(text instanceof CollaborativeString) {
            this.start = text.registerReference(-1, DeleteMode.SHIFT_BEFORE_DELETE)
            this.end = text.registerReference(-1, DeleteMode.SHIFT_BEFORE_DELETE)
        } else {
            console.err('cannot initialize Highlight without CollaborativeString')
        }
    }
    
    custom.registerType(Highlight, 'Highlight')
    custom.setInitializer(Highlight, initialize)
}
