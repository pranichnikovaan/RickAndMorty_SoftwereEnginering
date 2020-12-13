import React from "react";

export const Input = ({input, meta, ...props}) => {
    return (
        <div className="d-flex mr-2 position-relative">
            {
                meta.touched && meta.error &&
                <span className="text-danger font-weight-bold position-absolute "
                      style={{bottom: -25, left: 5, fontSize: 14}}
                >
                    {meta.error}
                </span>
            }
            <input {...input} {...props} value={props.defaultValue}/>
        </div>
    )
}
