import { buttonType } from "../../types/button.types";
const Button = (props: buttonType) => {
    return (
        <button className={props.bootstrapClasses.join(" ")}
            onClick={(e) => props.onClickHandler && props.onClickHandler(e)}
        >{props.text}</button>

    );
}
export default Button;