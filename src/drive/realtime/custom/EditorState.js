import Highlight from './Highlight'

export default function EditorState() { }

EditorState.register = gapi => {
    const custom = gapi.drive.realtime.custom;
    const DeleteMode = gapi.drive.realtime.IndexReference.DeleteMode;

    Object.assign(EditorState.prototype, {
        cursor: custom.collaborativeField('cursor'),
        highlight: custom.collaborativeField('highlight')
    })

    function initialize(wikiPage) {
        let model = custom.getModel(this)

        this.cursor = wikiPage.text.registerReference(-1, DeleteMode.SHIFT_BEFORE_DELETE)
        this.highlight = model.create(Highlight, wikiPage.text)
    }

    custom.registerType(EditorState, 'EditorState')
    custom.setInitializer(EditorState, initialize)
}
