import React from "react";
import { inputProps } from "../../types/input.types";

const Input = (props: inputProps) => {
    return (
        <div className="form-group">
            {(props.label && props.elementId) && <label htmlFor={props.elementId}>{props.label}</label>}
            <input type={props.type} className={props.classes && props.classes.join(" ") + " form-control"}
             id={props.elementId && props.elementId}
             value={props.value && props.value}
             />
        </div>
    );

}
export default Input;