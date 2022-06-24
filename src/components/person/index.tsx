import React from "react";
import Button from "../button";
import { personType } from "../../types/person.types";
const Person = (props: personType) => {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.phoneNumber}</td>
            <td><Button text="delete" bootstrapClasses={["btn", "btn-danger", "btn-sm", "mx-1"]}
                onClickHandler={() => props.handleDelete(props.id)} /></td>
            <td><Button text="edit" bootstrapClasses={["btn", "btn-sm", "btn-info", "mx-1"]}
                onClickHandler={() => props.handleEdit(props.id)} /></td>
        </tr>
    );
}
export default Person;