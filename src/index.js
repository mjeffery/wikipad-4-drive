import 'babel-polyfill'

import 'brace'
import 'brace/mode/markdown'
import 'brace/theme/monokai'
import 'brace/theme/github'
import 'brace/theme/solarized_dark'
import 'brace/keybinding/vim'
import 'brace/ext/statusbar'

import React from 'react'
import { render } from 'react-dom'
import AceEditor from 'react-ace'

function onLoad() { console.log('loaded') }
function onChange(value) { console.log('change', value) }

const editor = <AceEditor
	mode="markdown"
	theme="monokai"
	name="editor"
	onLoad={onLoad}
	onChange={onChange}
	fontSize={14}
	showPrintMargin={true}
	showGutter={true}
	highlightActiveLine={true}
	value="Hello, World!"
	setOptions={{
		showLineNumbers: true,
		tabSize: 4
	}}
	editorProps={{$blockScrolling: true}}
/>

render(editor, document.getElementById('container'))
