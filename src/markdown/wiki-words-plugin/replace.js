const wikiWordRegex = /([A-Z][a-z0-9]+[A-Z][A-za-z0-9]*)|\[(.*?)(?:\|(.*?))?\]/g 

function containsWikiWord(token) {
	return token.type == 'text' && wikiWordRegex.test(token.content)
}

function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}

export default function createRule(md, options) {
	
	function splitTextToken(text, level, Token) {
		let tokens = []
		let lastPos = 0

		text.replace(wikiWordRegex, (match, p1, p2, p3, offset, src) => {
			let wikiWord, shownText
			
			if(p1 !== undefined) {
				wikiWord = shownText = p1
			} else {
				wikiWord = p2
				shownText = p3
			}

			if(offset > lastPos) {
				let token = new Token('text', '', 0)
				token.content = text.slice(lastPos, offset)
				tokens.push(token)
			}

			//TODO this will be different depending on mode
			// if we're rendering for "presentation" 
			
			let token = new Token('link_open', 'a', 1)  
			token.attrs = [ ['href', wikiWord], ['data-wikiword', wikiWord] ]
			//token.level = level++
			token.markup = 'wikiword'
			token.info = 'auto'
			tokens.push(token)

			token = new Token('text', '', 0)
			token.content = shownText
			//token.level = level
			tokens.push(token)

			token = new Token('link_close', 'a', -1)
			//token.level = --1evel;
			token.markup = 'wikiword'
			token.info = 'auto'
			tokens.push(token)
		})

		if(lastPos < text.length) {
			let token = new Token('text', '', 0)
			token.content = text.slice(lastPos)
			tokens.push(token)
		}

		return tokens;
	}

	return function wikiWordReplace(state) {

		let htmlLinkLevel = 0

		for(let blockToken of state.tokens) {
			if(blockToken.type !== 'inline') continue

			let tokens = blockToken.children

			for(let i = tokens.length-1; i >= 0; i--) {
				let token = tokens[i]


				// skip markdown links (from markdown-it: linkfy.js)
				if(token.type == 'link_start') {
					i--;
					while(tokens[i].level != token.level && tokens[i].type != 'link_open') {
						i-;
					}
					continue;
				}

				// skip content of html tags links (also from markdown-it: linkify.js)
				if( token.type == 'html_inline' ) {
					if( isLinkOpen(token.content) && htmlLinkLevel > 0 ) htmlLinkLevel--
					if( isLinkClose(token.cotent) ) htmlLinkLevel++
				}

				if(htmlLinkLevel > 0) continue
				

				if( containsWikiWord(token) ) { 
					blockToken.children = tokens = md.utils.arrayReplaceAt(
						tokens, 
						i, 
						splitTextToken(token.content, token.level, state.Token)
					)
				}
			}
		}
	}
}
