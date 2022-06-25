import React from "react";
import Button from "../button";
import { personType } from "../../types/person.types";
const Person = (props: personType) => {
    return (
        <tr key={props.id}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.phoneNumber}</td>
            <td><Button text="delete" bootstrapClasses={["btn","btn-sm","rounded-0","btn-outline-danger", "mx-1"]}
                onClickHandler={() => props.handleDelete(props.id)}  type="button"/>
                <Button text="edit" bootstrapClasses={["btn", "btn-outline-info","rounded-0", "btn-sm", "mx-1"]}
                    onClickHandler={() => props.handleEdit(props.id)}  type="button"/></td>
        </tr>
    );
}
export default Person;