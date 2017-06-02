import React from 'react'
import createRenderer from 'markdown-it'

export default class Markdown extends React.Component {
	
	constructor(props) {
		super(props)

		this.renderer = createRenderer({
			linkify: false,
			typographer: true
		})
	}

	render() {
		let { source } = this.props
		let __html = this.renderer.render(source)

		return <div dangerouslySetInnerHTML={{ __html }} />
	}
}
