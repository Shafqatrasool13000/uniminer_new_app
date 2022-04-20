import React from 'react'
import { Form } from 'react-bootstrap'
import { StyledInput3Main } from './StyledInput3'

const Input3 = ({ type, placeholder,label,value }) => {
    return (
        <StyledInput3Main>
            <div className='inner-container'>
                <label className='label' htmlFor="">{label}</label>
                <div className="input-field d-flex mt-2 mt-sm-0">
                    <Form.Control type={type} placeholder={placeholder} value={value} />
              <p className="change">Change</p>
                </div>
            </div>
        </StyledInput3Main>
    )
}

export default Input3