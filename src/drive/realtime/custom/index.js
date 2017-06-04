import Highlight from './Highlight'
import EditorState from './EditorState'
import WikiPage from './WikiPage'

function register(gapi) {
    Highlight.register(gapi)
    EditorState.register(gapi)
    WikiPage.register(gapi)
}

export { Highlight, EditorState, WikiPage }

export default { Highlight, EditorState, WikiPage, register }

