import React from 'react'
import { Form } from 'react-bootstrap'
import { InputMain } from './StyledInput'

const Input = ({type,placeholder}) => {
  return (
    <InputMain>
     <Form.Control type={type} placeholder={placeholder} />
    </InputMain>
  )
}

export default Input