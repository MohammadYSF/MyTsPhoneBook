import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/people';
import Person from './components/person';
function App() {
  const deletePerson = (id:number):void =>{
    console.log(`deleting person with id : ${id}`);
  } 
  const editPerson = (id:number):void =>{
    console.log(`editting person with id : ${id}`);
  } 
  
  return (
    <div className="App">
      <div className='container'>
        <div className='text-center'>
          <h1 className='h1'>My ts phone book</h1>
          <p>this is a simple phone book !</p>
          <p>I have used these technologies to build this app : React , Typescript , Bootstrap</p>
        </div>
        <div className='text-center'>
          <People bootstrapTableClasses={["table","table-striped"]} >
            <Person id={1} name="mohammad" phoneNumber='09141257762' handleDelete={deletePerson} handleEdit={editPerson} />
            <Person id={2} name="ali" phoneNumber='09141257762' handleDelete={deletePerson} handleEdit={editPerson} />
            <Person id={2} name="ehsan" phoneNumber='09141257762' handleDelete={deletePerson} handleEdit={editPerson} />
            <Person id={2} name="zolfian" phoneNumber='09141257762' handleDelete={deletePerson} handleEdit={editPerson} />
          </People>
        </div>
      </div>
    </div>
  );
}

export default App;
