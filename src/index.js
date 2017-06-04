import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import { createRouter } from './router'

import PreviewEditor from './PreviewEditor'

createRouter()

render(<PreviewEditor />, document.getElementById('container'))
