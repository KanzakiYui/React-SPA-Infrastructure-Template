import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'

export const Hello = ({ compiler }) => <h1>Compiler: {compiler}</h1>

Hello.propTypes = {
    compiler: PropTypes.string
}

render(<Hello compiler='JavaScript' />, document.getElementById('react-root'))
