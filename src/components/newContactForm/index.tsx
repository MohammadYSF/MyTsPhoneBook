import React from "react";
import { personType } from "../../types/person.types";
import Button from "../button";
import Input from "../input";
const NewContactForm = () => {
    return (
        <form>
            <Input type="text"/>
            <Input type="number"/>
            <Input type="text"/>
           <Button type="submit" text="submit" bootstrapClasses={["btn" , "btn-success"]} />
        </form>
    );
}
export default NewContactForm;