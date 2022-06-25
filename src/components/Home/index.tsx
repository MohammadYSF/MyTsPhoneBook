import React from 'react';
import People from '../people';
import Person from '../person';
import Button from '../button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { personType } from '../../types/person.types';
const Home = (props:{data:personType[]}) => {
   
    const deletePerson = (id: number): void => {
        console.log(`deleting person with id : ${id}`);
    }
    const editPerson = (id: number): void => {
        console.log(`editting person with id : ${id}`);
    }

    return (
        <div className="App">

            <div className='my-5'>
                <h1 className='h1'>My ts phone book</h1>
                <p>this is a simple phone book !</p>
                <p>I have used these technologies to build this app : React , Typescript , Bootstrap</p>

                <Link to={"/addNew"} className="btn btn-success px-5 py-1" type='button'>add new !</Link>
            </div>
            <div className='text-center'>
                <People bootstrapTableClasses={["table", "table-striped"]} >

                    {props.data.map((p, index) => {
                        return (
                            <Person id={p.id} name={p.name} phoneNumber={p.phoneNumber}
                                handleDelete={deletePerson} handleEdit={editPerson} />
                        );
                    })}
                </People>
            </div>

        </div>

    );
}
export default Home;