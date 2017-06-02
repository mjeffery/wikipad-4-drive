import replaceWikiWords from './replace'

export default function wikiWordsPlugin(md, options) {
	
	const defaults = {
		baseUrl: '/',
		uriSuffix: '.html',
		htmlAttributes: {}
	}

	const opts = Object.assign({}, defaults, options)

	return replaceWikiWords(md, opts)
}
