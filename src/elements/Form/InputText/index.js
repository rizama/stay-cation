import React, { useState } from 'react';
import propTypes from 'prop-types';

import '.index.scss';

function InputText(props) {
    const {
        value,
        type,
        placeholder,
        name,
        prepend,
        append,
        outerClassName,
        inputClassName,
        errorResponse,
    } = props;

    const [HasError, setHasError] = useState(null);
    let pattern = "";
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (type === "tel") pattern = "[0-9]*";

    const onChange = (event) => {
        const target = {
            target: {
                name: name,
                value: event.target.value,
            },
        };

        if (type === "email") {
            if (!pattern.test(event.target.value)) setHasError(errorResponse);
            else setHasError(null);
        }

        if (type === "tel") {
            if (event.target.validity.valid) props.onChange(target);
        } else {
            props.onChange(target);
        }
    };
    
    return (
        <div>

        </div>
    );
}

InputText.defaultProps = {
    type: "text",
    pattern: "",
    placeholder: "Please type here...",
    errorResponse: "Please match the required format."
};

InputText.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    onChange: propTypes.func.isRequired,
    pretend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    type: propTypes.string,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
    inputClassName: propTypes.string,
};

export default InputText;

