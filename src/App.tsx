import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewContactForm from './components/newContactForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { useState } from 'react';
function App() {
  type person = {
    id: number,
    name: string,
    phoneNumber: string
  };
  let data: person[] = [
    {
      "id": 1,
      "name": "mohammad",
      "phoneNumber": "09924300159"
    },
    {
      "id": 2,
      "name": "foozhan",
      "phoneNumber": "09149234316"
    },
    {
      "id": 3,
      "name": "shahnam",
      "phoneNumber": "09372898644"
    },
    {
      "id": 4,
      "name": "shahzawd",
      "phoneNumber": "09148026935"
    },
    {
      "id": 5,
      "name": "vahid",
      "phoneNumber": "09141257762"
    },
  ]
  const [people, setPeople] = useState<person[]>(data);
  const addNewPerson = (p: person): void => {
    let newData: person[] = [...people, p];
    setPeople(newData);
    console.log(people);
    
  }
  return (
    <div className='container text-center'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home data={people}/>} path="/" />
          <Route element={<NewContactForm onSubmit={addNewPerson}/>} path="/addNew" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
