import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Route, Routes } from 'react-router-dom';
import { ethBlockLatest } from './Logic/Request.js';

async function LogETH() {
  return (await ethBlockLatest()).json();
}

function App() {

  return (
    <Routes>
      <Route path="/block/:blockId" element={<div>1{LogETH()}</div>}/>
      <Route path="/block/latest" element={<div>2{LogETH()}</div>}/>
    </Routes>
  );
}

/*
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" /> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    */

export default App;
