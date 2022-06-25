import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { personType } from "../../types/person.types";
import Button from "../button";
import Input from "../input";
const NewContactForm = (props: { onSubmit: (p: personType) => void }) => {
    const [person, SetPerson] = useState<personType>({} as personType);
    const handleIdValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number.parseInt(event.target.value);
        let newData: personType = {
            id: value,
            name: person.name,
            phoneNumber: person.phoneNumber
        };
        SetPerson(newData);
    };
    const handleNameValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        let newData: personType = {
            id: person.id,
            name: value,
            phoneNumber: person.phoneNumber
        };
        SetPerson(newData);
    };
    const handlePhoneNumberValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        let newData: personType = {
            id: person.id,
            name: person.name,
            phoneNumber: value
        };
        SetPerson(newData);
    };
    const navigate = useNavigate();
    return (
        <div className="mt-5">
            <div className="mb-5">
                <h1 className="h3">Add a new one!</h1>
                <p>Add a new contact to your list using the form below</p>
            </div>
            <form className="w-50 mx-auto" onSubmit={
                (e) => {
                    e.preventDefault();
                    props.onSubmit(person);
                    navigate("/");
                }
            }>
                <Input type="number" placeHolder="Input the id" elementId="id" handleChange={handleIdValue} />
                <Input type="text" placeHolder="Input the name : " elementId="name" handleChange={handleNameValue} />
                <Input type="number" placeHolder="Input the phone number : " elementId="phoneNumber" handleChange={handlePhoneNumberValue} />
                <Button type="submit" text="submit" bootstrapClasses={["btn", "btn-success", "py-1", "px-5", "rounded-0", "d-block", "mx-auto", "mb-3"]} />

                <Link to="/" className="btn btn-sm btn-outline-dark rounded-0">Back to Home</Link>
            </form>
        </div>
    );
}
export default NewContactForm;