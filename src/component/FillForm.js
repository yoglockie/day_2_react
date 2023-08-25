import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

function IncreaseC() {
   console.log("Loki")
}

export default function FillForm() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <div>
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Adhaar Card* (.pdf format)</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Select Your Best Captured Photographs (.jpg, .jpeg, .png format)</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
    </Form>
    <div className="d-grid gap-2">
    <Button variant="primary" size="lg" onClick={IncreaseC}>
      Submit
    </Button>
    <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  </div>
   </div>
  )
}

