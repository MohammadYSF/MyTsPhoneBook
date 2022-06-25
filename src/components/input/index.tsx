import React from "react";
import { inputProps } from "../../types/input.types";

const Input = (props: inputProps) => {
    return (
        <div className="form-group row">

            {props.classes
                ?
                <input required type={props.type} className={props.classes.join(" ") + "form-control"}
                    id={props.elementId && props.elementId}
                    value={props.value && props.value}
                    placeholder={props.placeHolder}
                />
                :
                <input required type={props.type} className="form-control"
                    id={props.elementId && props.elementId}
                    value={props.value && props.value}
                    placeholder={props.placeHolder}
                />}
        </div>
    );

}
export default Input;