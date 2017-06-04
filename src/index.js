import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import { createRouter } from './router'

import PreviewEditor from './PreviewEditor'

createRouter()

window.handleClientLoad = x => x

render(<PreviewEditor />, document.getElementById('container'))
