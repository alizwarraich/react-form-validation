import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    return (
        <div className='formInput'>
            {/* <label>{props.field}: </label> */}
            <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.handleChange} />
        </div>
    )
}

export default FormInput