import path from 'path'
import generate from 'markdown-it-testgen'
import plugin from '../../src/markdown/wiki-words-plugin'
import markdown from 'markdown-it'

describe('markdown-it wikiwords', () => {
	const md = markdown().use(plugin)

	generate(path.join(__dirname, 'fixtures/wikiwords.txt'), { header: true }, md)
})
