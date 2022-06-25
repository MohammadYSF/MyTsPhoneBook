import React from "react";
import { Link } from "react-router-dom";
import { personType } from "../../types/person.types";
import Button from "../button";
import Input from "../input";
const NewContactForm = () => {
    return (
        <div className="mt-5">
            <div className="mb-5">
                <h1 className="h3">Add a new one!</h1>
                <p>Add a new contact to your list using the form below</p>
            </div>
            <form className="w-50 mx-auto">

                <Input type="text" placeHolder="Input the name : " elementId="name" />
                <Input type="number" placeHolder="Input the phone number : "  elementId="phoneNumber" />
                <Button type="submit" text="submit" bootstrapClasses={["btn", "btn-success" , "py-1" , "px-5" , "rounded-0" , "d-block" ,"mx-auto" , "mb-3"]} />
                
                <Link to="/" className="btn btn-sm btn-outline-dark rounded-0">Back to Home</Link>
            </form>
        </div>
    );
}
export default NewContactForm;