import React from 'react'
import { Form } from 'react-bootstrap'
import { StyledInput4Main } from './StyledInput4'

const Input4 = ({ type, placeholder,label,value }) => {
    return (
        <StyledInput4Main>
            <div className='inner-container'>
                <label className='lable' htmlFor="">{label}</label>
                <div className="input-field">
                    <Form.Control type={type} placeholder={placeholder} value={value} />
                </div>
            </div>
        </StyledInput4Main>
    )
}

export default Input4