import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import PreviewEditor from './PreviewEditor'

render(<PreviewEditor />, document.getElementById('container'))
