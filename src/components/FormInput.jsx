import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    const [focused, setFocused] = React.useState(false);
    const { label, errormessage, onChange, id, placeholder, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className='formInput'>
            {/* <label>{label}: </label> */}
            <input
                {...inputProps} placeholder={inputProps.required ? `${placeholder}*` : placeholder}
                onChange={props.onChange} onBlur={handleFocus}
                focused={focused.toString()} onFocus={() => {
                    inputProps.name === "confirmpassword" && setFocused(true)
                }} />
            <span>{errormessage}</span>
        </div>
    )
}

export default FormInput