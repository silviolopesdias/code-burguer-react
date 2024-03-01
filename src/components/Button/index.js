import React from 'react'

import PropTypes from 'prop-types'

import { MyButton } from './styles'

export function Button({ children, ...rest }) {
  return <MyButton {...rest}>{children}</MyButton>
}

Button.propTypes = {
  children: PropTypes.string
}
