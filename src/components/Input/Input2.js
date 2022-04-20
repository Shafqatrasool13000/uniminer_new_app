import React from 'react'
import { Form } from 'react-bootstrap'
import { StyledInput2Main } from './StyledInput2'

const Input2 = ({ type, placeholder,label,value }) => {
    return (
        <StyledInput2Main>
            <div className='inner-container'>
                <label className='lable' htmlFor="">{label}</label>
                <div className="input-field">
                    <Form.Control type={type} placeholder={placeholder} value={value} />
                </div>
            </div>
        </StyledInput2Main>
    )
}

export default Input2