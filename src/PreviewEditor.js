import React from 'react'
import AceEditor from 'react-ace'
import Markdown from './Markdown'

import 'brace'
import 'brace/mode/markdown'
import 'brace/theme/monokai'
import 'brace/theme/github'
import 'brace/theme/solarized_dark'
import 'brace/keybinding/vim'
import 'brace/ext/statusbar'

export default class PreviewEditor extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { text: '' }

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(text) {
		this.setState({ text })
	}

	render() {
		return <div>
			<AceEditor 
				mode="markdown"
				theme="monokai"
				name="editor"
				onChange={this.handleChange}
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				value={this.state.text}
				setOptions={{
					showLineNumbers: true,
					tabSize: 4
				}}
				editorProps={{$blockScrolling: true}}
			/>
			<Markdown source={this.state.text} />
		</div>
	}	
}
